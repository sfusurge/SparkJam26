import { cImg, component, cQuad, getSrc, type RenderPkg } from "./CanvasTools.ts";

export const GamePhase = {
    PRE: 0,
    RUNNING: 1,
    PAUSED: 2,
    ENDED: 3
} as const;

export type GamePhaseType = typeof GamePhase[keyof typeof GamePhase]

interface boundRange {
    min: number,
    max: number
}

interface obstacleItem {
    spriteID: number,
    lanePosition: number,
    trailPosition: number
}

let keybinds : {[id: string]: () => void} = {};

const loadSprites = (names: string[]) => {
    return names.map(n => {
        let s: HTMLImageElement = new Image();
        s.src = getSrc(n);
        return s;
    })
}

const envSprites = loadSprites(["mountains.svg", "Pattern.svg", "waterlooWelcome", "Sign"]);
const obstacleSprites = loadSprites(["redCone", "blueCone", "redBall.svg", "blueBall.svg"]);
const otterSprites = loadSprites(["otterSkiing", "fall1", "fall2", "fall3"]);

const positionRange: boundRange = {min: 0, max: 4};
const defaultPos: number = 2;
const ottoAnimProg: number[] = [0, 0.55, 0.8, 0.95, 1];

const ottID: string = "OTT";
const positionCoords: number[][] = [
    [0.17, 0.37],
    [0.13, 0.404],
    [0.09, 0.438],
    [0.05, 0.472],
    [0.01, 0.506],
];
const spawnCoords: number[][] = [
    [0.77, 1.07],
    [0.73, 1.104],
    [0.69, 1.138],
    [0.65, 1.172],
    [0.61, 1.206],
]
const skiTrackLen: number = 1.35;

const backgroundFrames: number = 30000;
const slowSpeed: number = 0.15;

const destination: number = 4173;
const duration: number = 400000;
const gameSpeed: number = 1.25;
const obstacleVisibilityWindow: number = 2500;

const obstacleGenerationSpacing: boundRange = {min: 500, max: 2000};

const randWholeNum = (range: number) => {
    return Math.trunc(Math.random() * range);
}

const slopeAngle = 49.5 * Math.PI / 180;

const waterlooID: string = "water";
const waterlooOffscreen = [0.65, 1];
const waterlooAppear = [0.65, 0.8];
const mobileWaterlooOffset = [-0.6, 0.25];
const waterlooPause = 5000;

const signID: string = "sign";
const signStartPos:number[] = [0.6, .8];

export class GameRenderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    mobile: boolean = $state(false);
    pkg: RenderPkg;
    renderHandle: number|null = -1;
    observer: IntersectionObserver|null = null;

    gameState: GamePhaseType = $state(GamePhase.PRE);

    pTime = 0;
    currentTime = 0;

    staticObj: component[] = [];
    dynamicObjs: {[id: string]: component} = {};
    skiCourse: obstacleItem[] = [];

    ottPosition: number = defaultPos;
    prevPosition: number = defaultPos;
    ottAnimFrame: number = ottoAnimProg.length;

    currentDistanceInKM: number = $state(0);
    KM_highScore: number = $state(0);

    obstacleCache: number = 0;

    collision: boolean = false;
    collisionSlowDur: number = 1;
    
    waterlooAnim: number = 0;
    waterlooFinish: number = 20; 

    constructor(canvas: HTMLCanvasElement, mobileMode:boolean){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")!;
        this.pkg = {
            ctx: this.ctx,
            w: canvas.width,
            h: canvas.height
        };
        this.mobile = mobileMode;
        
        this.init();
    }

    init(){
        this.setupEnv();
        this.setupEvents();
        this.reset();

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    if(this.renderHandle == -1){
                        this.renderHandle = requestAnimationFrame(this.eventLoop.bind(this));
                    }
                } else {
                    if(this.renderHandle){
                        cancelAnimationFrame(this.renderHandle);
                        this.renderHandle = -1;
                    }
                }
            });
        }, {threshold: 0.1});

        this.observer.observe(this.canvas);
    }

    windowChange(mobile: boolean){
        this.mobile = mobile;
        this.ctx.clearRect(-200, -200, this.pkg.w * 2, this.pkg.h * 2);
    }

    reset(){
        this.currentTime = 0;
        this.currentDistanceInKM = 0;
        this.obstacleCache = 0;

        this.prevPosition = defaultPos;
        this.ottPosition = defaultPos;
        this.ottAnimFrame = ottoAnimProg.length;
        (this.dynamicObjs[ottID] as cImg).currentSprite = 0;
        this.updateOttPosition(positionCoords[defaultPos][0], positionCoords[defaultPos][1]);
        this.collision = false;
        this.collisionSlowDur = 1;
        
        this.skiCourse = [];
        this.generateSkiCourse();
    }

    pauseToggle(){
        if(this.gameState == GamePhase.PRE){
            this.gameState = GamePhase.RUNNING;
        }else if(this.gameState == GamePhase.RUNNING){
            this.gameState = GamePhase.PAUSED;
        }else if(this.gameState == GamePhase.PAUSED){
            this.gameState = GamePhase.RUNNING;
        }
    }

    playAgain(){
        if(this.gameState == GamePhase.ENDED){
            this.gameState = GamePhase.RUNNING;
        }
        this.reset();
    }

    setupEnv(){
        this.staticObj.push(
            new cImg(this.pkg,
                0, 0.34,
                [envSprites[0]]
            ),
            new cImg(this.pkg,
                1, 0.34,
                [envSprites[0]]
            )
        );

        let ang = 34 * Math.PI / 180;
        this.staticObj.push(
            new cQuad(this.pkg,
                -0.05, 0.1,
                1.2, 1.2,
                "fill",
                () => {
                    this.ctx.fillStyle = "white";
                    this.ctx.rotate(ang);
                }
            ),
            new cQuad(this.pkg,
                -0.05, 0.6,
                1.2, 1.2,
                "fill",
                () => {
                    this.ctx.fillStyle = "lightgrey";
                    this.ctx.rotate(ang);
                }
            )
        );

        this.staticObj.push(
            new cImg(this.pkg,
                -.225, 0.38,
                [envSprites[1]], 0,
                () => {
                    this.ctx.rotate(2 * Math.PI / 180);
                    this.ctx.scale(0.9, 0.9);
                }
            )
        );

        this.dynamicObjs[ottID] = new cImg(
            this.pkg,
            positionCoords[this.ottPosition][0], positionCoords[this.ottPosition][1],
            otterSprites
        );

        this.dynamicObjs[waterlooID] = new cImg(
            this.pkg,
            waterlooOffscreen[0], waterlooOffscreen[1],
            [envSprites[2]]
        );

        this.dynamicObjs[signID] = new cImg(
            this.pkg,
            signStartPos[0], signStartPos[1],
            [envSprites[3]]
        );
    }

    generateSkiCourse(start = 0){
        this.skiCourse = [];
        let counter = start;
        while(counter < start + duration){
            counter += randWholeNum((obstacleGenerationSpacing.max - obstacleGenerationSpacing.min)) + obstacleGenerationSpacing.min;
            this.skiCourse.push({
                spriteID: randWholeNum(obstacleSprites.length),
                lanePosition: randWholeNum(positionRange.max + 1),
                trailPosition: counter
            })
        }
        this.obstacleCache = 0;
    }

    setupEvents(){
        keybinds['d'] = () => {
            if(this.gameState == GamePhase.RUNNING && this.ottPosition > positionRange.min){
                this.prevPosition = this.ottPosition;
                this.ottPosition--;
                this.ottAnimFrame = 0;
            }
        };
        keybinds['a'] = () => {
            if(this.gameState == GamePhase.RUNNING && this.ottPosition < positionRange.max){
                this.prevPosition = this.ottPosition;
                this.ottPosition++;
                this.ottAnimFrame = 0;
            }
        };
        keybinds['arrowleft'] = () => {
            this.inputCallback('a');
        }
        keybinds['arrowright'] = () => {
            this.inputCallback('d');
        }
    }

    updateOttPosition(x:number, y:number){
        if(this.gameState == GamePhase.RUNNING && (this.dynamicObjs[ottID] as cImg).currentSprite == 0){
            this.dynamicObjs[ottID].setPosition(x, y);
        }   
    }

    inputCallback(k: string){
        try{
            keybinds[k]();
        }catch{}
    }

    eventLoop(time: number){
        this.ctx.save();
        let d = (time - this.pTime);
        this.pTime = time;

        const ottImg = () => {
            return(this.dynamicObjs[ottID] as cImg);
        }

        let delta = d * (gameSpeed + 3 * (this.currentTime/duration));
        if(this.gameState == GamePhase.RUNNING){
            
            this.currentTime += delta;

            if(this.collision == true){
                if(this.collisionSlowDur > 0){
                    this.collisionSlowDur -= slowSpeed * this.collisionSlowDur / 2;
                    if(this.collisionSlowDur < 0.001){
                        this.collisionSlowDur = 0;
                        this.gameOver();
                    }else if(this.collisionSlowDur < 0.3 && ottImg().currentSprite == 2){
                        ottImg().currentSprite++;
                    }else if(this.collisionSlowDur < 0.4 && ottImg().currentSprite == 1){
                        ottImg().currentSprite++;
                    }else if(this.collisionSlowDur < 0.5 && ottImg().currentSprite == 0){
                        ottImg().currentSprite++;
                    }
                }
                this.currentTime -= delta * (1 - this.collisionSlowDur);
            }

            this.currentDistanceInKM = Math.trunc((this.currentTime / duration) * destination);
        }

        if(this.mobile){
            this.ctx.scale(0.5, 0.5);
            this.ctx.translate(0, 500);
        }
        this.render();
        this.ctx.restore();
        this.renderHandle = requestAnimationFrame(this.eventLoop.bind(this));
    }

    gameOver(){
        if(this.KM_highScore < this.currentDistanceInKM){
            this.KM_highScore = this.currentDistanceInKM;
        }
        this.gameState = GamePhase.ENDED;
    }

    render() {
        this.ctx.clearRect(0, (this.currentTime < obstacleVisibilityWindow) ? -100 : 0, this.pkg.w, this.pkg.h);
        // update canvas size before rendering to avoid flicker
        if (this.canvas.width !== this.pkg.w || this.canvas.height !== this.pkg.h) {
            this.canvas.width = this.pkg.w;
            this.canvas.height = this.pkg.h;
        }

        this.renderEnv();
        this.renderObstacles();
    }

    renderEnv() {
        this.staticObj.forEach((obj, i) => {
            if(this.currentTime < obstacleVisibilityWindow && i == 2){
                this.dynamicObjs[signID].update();
            }
            obj.update();
        });

        let bgHalf = backgroundFrames / 2
        let p = ((backgroundFrames - (this.currentTime % backgroundFrames))/bgHalf) - 1.01;
        let p2 = ((backgroundFrames - (this.currentTime + bgHalf) % backgroundFrames)) / bgHalf - 1.01;

        this.staticObj[0].x = p;
        this.staticObj[1].x = p2;

        //waterloo arrival animation
        if(this.waterlooAnim < this.waterlooFinish && this.currentDistanceInKM > destination){
            let prog = (this.waterlooAnim % (this.waterlooFinish / 2)) + 1;
            let inc = (waterlooOffscreen[1] - waterlooAppear[1])/(this.waterlooFinish / 2) * prog;
            
            if(this.currentTime > duration + waterlooPause){
                this.dynamicObjs[waterlooID]
                .setPosition(waterlooOffscreen[0] + (this.mobile ? mobileWaterlooOffset[0] : 0), waterlooAppear[1] + (this.mobile ? mobileWaterlooOffset[1] : 0) + inc);
                this.waterlooAnim++;
            }else if(this.waterlooAnim < 10){
                this.dynamicObjs[waterlooID]
                .setPosition(waterlooOffscreen[0] + (this.mobile ? mobileWaterlooOffset[0] : 0), waterlooOffscreen[1] + (this.mobile ? mobileWaterlooOffset[1] : 0) - inc);
                this.waterlooAnim++;
            }
        }

        if(this.currentTime < obstacleVisibilityWindow){
            let c = this.calculateSignCoordXY(this.currentTime/obstacleVisibilityWindow);
            this.dynamicObjs[signID].setPosition(c[0], c[1]);
        }
    }

    calculateSignCoordXY(progress:number){
        let len = progress * skiTrackLen;
        let ang = 52 * Math.PI / 180;
        let x = signStartPos[0] - len * Math.cos(ang);
        let y = signStartPos[1] - len * Math.sin(ang);
        return [x, y];
    }

    renderObstacles() {
        const obstacleRender = (o: obstacleItem) => {
            let coord = this.calculateSlopeCoordXY(o.lanePosition, (this.currentTime - o.trailPosition)/obstacleVisibilityWindow);
            this.ctx.drawImage(
                obstacleSprites[o.spriteID],
                this.xStd(coord[0]),
                this.yStd(coord[1] - 0.05 + (o.spriteID > 1 ? 0.03 : 0))
            )
        }

        let obstacles:obstacleItem[] = [];
        for (let i = this.obstacleCache; i < this.skiCourse.length; i++){
            let obst = this.skiCourse[i];
            let pos = obst.trailPosition;
            //removes redundancy of obstacles that the otter has passed
            if(this.currentTime > pos + obstacleVisibilityWindow){
                this.obstacleCache++;
                continue;
            }
            //does not render things far into future
            if(this.currentTime < pos){
                break;
            }
            let ln = this.skiCourse[i].lanePosition;
            let prog = (this.currentTime - pos) / obstacleVisibilityWindow;
            if(ln >= this.ottPosition){
                if(ln == this.ottPosition && prog > 0.66 && prog < 0.75){
                    this.collision = true;
                }
                obstacles.push(obst);
            }else{
                obstacleRender(obst);
            }
        }
        if(this.obstacleCache == this.skiCourse.length){
            this.generateSkiCourse(this.currentTime)
        }
        this.dynamicObjs[ottID].update();
        obstacles.forEach(o => {
            obstacleRender(o);
        })
        if(this.waterlooAnim < this.waterlooFinish && this.currentDistanceInKM > destination){
            this.dynamicObjs[waterlooID].update();
        }
        if(this.gameState == GamePhase.RUNNING && this.ottAnimFrame != ottoAnimProg.length){
            let pPos = positionCoords[this.prevPosition];
            let cPos = positionCoords[this.ottPosition];
            let transit = [cPos[0] - pPos[0], cPos[1] - pPos[1]];
            let p = ottoAnimProg[this.ottAnimFrame];
            this.updateOttPosition(pPos[0] + transit[0] * p, pPos[1] + transit[1] * p);
            this.ottAnimFrame++;
        }
    }

    calculateSlopeCoordXY(lane: number, position: number){
        let len = position * skiTrackLen;
        let x = spawnCoords[lane][0] - len * Math.cos(slopeAngle);
        let y = spawnCoords[lane][1] - len * Math.sin(slopeAngle);
        return [x, y];
    }

    xStd(x: number) {
        return x * this.pkg.w;
    }

    yStd(y: number) {
        return y * this.pkg.h;
    }

    destroy() {
        if(this.renderHandle){
            cancelAnimationFrame(this.renderHandle);
        }
    }
}