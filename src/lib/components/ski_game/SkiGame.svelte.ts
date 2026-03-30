import { cImg, component, cQuad, getSrc, type RenderPkg } from "./CanvasTools.ts";

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

const envSprites = loadSprites(["mountains.svg"]);
const obstacleSprites = loadSprites(["redCone", "blueCone", "redBall.svg", "blueBall.svg"]);
const otterSprites = loadSprites(["otterSkiing.svg"]);

const positionRange: boundRange = {min: 0, max: 4};
const defaultPos: number = 2;

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

const backgroundFrames: number = 15000;

const destination: number = 4173;
const duration: number = 400000;
const obstacleVisibilityWindow: number = 2500;

const obstacleGenerationSpacing: boundRange = {min: 500, max: 2000};

const randWholeNum = (range: number) => {
    return Math.trunc(Math.random() * range);
}

const slopeAngle = 49.5 * Math.PI / 180;

export class GameRenderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    mobile: boolean;
    pkg: RenderPkg;
    renderHandle = -1;

    currentTime = 0;
    delta = 0;

    staticObj: component[] = [];
    obstaclesList: component[] = [];
    dynamicObjs: {[id: string]: component} = {};
    skiCourse: obstacleItem[] = [];

    ottPosition: number = defaultPos;
    ottID: string = "OTT";

    state: string = "play";

    currentDistanceInKM: number = $state(0);

    obstacleCache: number = 0;

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

        this.renderHandle = requestAnimationFrame(this.eventLoop.bind(this));
    }

    reset(){
        this.skiCourse = [];
        this.generateSkiCourse();
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

        this.dynamicObjs[this.ottID] = new cImg(
            this.pkg,
            positionCoords[this.ottPosition][0], positionCoords[this.ottPosition][1],
            [otterSprites[0]]
        );

        // otter position debug
        // setInterval(() => {
        //     this.ottPosition = Math.trunc(this.currentTime/1000) % 5;
        //     this.dynamicObjs[this.ottID].setPosition(positionCoords[this.ottPosition][0], positionCoords[this.ottPosition][1]);
        // }, 200);
        
        // this.obstaclesObj.push(
        //     new cImg(this.pkg,
        //         .5, 0.34,
        //         [obstacleSprites[0]]
        //     ),
        //     new cImg(this.pkg,
        //         .6, 0.34,
        //         [obstacleSprites[1]]
        //     ),
        //     new cImg(this.pkg,
        //         .5, 0.6,
        //         [obstacleSprites[2]]
        //     ),
        //     new cImg(this.pkg,
        //         .6, 0.6,
        //         [obstacleSprites[3]]
        //     ),
        // )
    }

    generateSkiCourse(){
        let counter = 0;
        while(counter < duration){
            counter += randWholeNum((obstacleGenerationSpacing.max - obstacleGenerationSpacing.min)) + obstacleGenerationSpacing.min;
            this.skiCourse.push({
                spriteID: randWholeNum(4),
                lanePosition: randWholeNum(positionRange.max + 1),
                trailPosition: counter
            })
        }
    }

    setupEvents(){
        keybinds['d'] = () => {
            if(this.ottPosition > positionRange.min){
                this.ottPosition--;
                this.dynamicObjs[this.ottID].setPosition(positionCoords[this.ottPosition][0], positionCoords[this.ottPosition][1]);
            }
        };
        keybinds['a'] = () => {
            if(this.ottPosition < positionRange.max){
                this.ottPosition++;
                this.dynamicObjs[this.ottID].setPosition(positionCoords[this.ottPosition][0], positionCoords[this.ottPosition][1]);
            }
        };
        keybinds['arrowleft'] = () => {
            this.inputCallback('a');
        }
        keybinds['arrowright'] = () => {
            this.inputCallback('d');
        }
        // this.canvas.addEventListener("click", (e) => {
        // }, { capture: true });
    }

    inputCallback(k: string){
        try{
            keybinds[k]();
        }catch{}
    }

    eventLoop(time: number){
        this.delta = (time - this.currentTime) / 1000;
        this.currentTime = time;

        this.currentDistanceInKM = Math.trunc((this.currentTime / duration) * destination);

        this.render();
        this.renderHandle = requestAnimationFrame(this.eventLoop.bind(this));
    }

    render() {
        this.ctx.clearRect(0, 0, this.pkg.w, this.pkg.h);
        // update canvas size before rendering to avoid flicker
        if (this.canvas.width !== this.pkg.w || this.canvas.height !== this.pkg.h) {
            this.canvas.width = this.pkg.w;
            this.canvas.height = this.pkg.h;
        }

        this.renderEnv();
        this.renderObstacles();
    }

    renderEnv() {
        this.staticObj.forEach(obj => {
            obj.update();
        });

        if(this.state == "play"){
            let bgHalf = backgroundFrames / 2
            let p = ((backgroundFrames - (this.currentTime % backgroundFrames))/bgHalf) - 1.01;
            let p2 = ((backgroundFrames - (this.currentTime + bgHalf) % backgroundFrames)) / bgHalf - 1.01;

            this.staticObj[0].x = p;
            this.staticObj[1].x = p2;
        }

        // this.obstaclesObj.forEach(obj => {
        //     obj.update();
        // });
    }

    renderObstacles() {
        const obstacleRender = (o: obstacleItem) => {
            let coord = this.calculateSlopeCoordXY(o.lanePosition, (this.currentTime - o.trailPosition)/obstacleVisibilityWindow);
            this.ctx.drawImage(
                obstacleSprites[o.spriteID],
                this.xStd(coord[0]),
                this.yStd(coord[1])
            )
        }

        let obstacles:obstacleItem[] = [];
        for (let i = this.obstacleCache; i < this.skiCourse.length; i++){
            let obst = this.skiCourse[i];
            let pos = obst.trailPosition;
            if(this.currentTime > pos + obstacleVisibilityWindow){
                this.obstacleCache++;
                continue;
            }
            if(this.currentTime < pos){
                break;
            }
            let ln = this.skiCourse[i].lanePosition;
            if(ln >= this.ottPosition){
                obstacles.push(obst);
            }else{
                obstacleRender(obst);
            }
        }
        Object.keys(this.dynamicObjs).forEach(k => {
            this.dynamicObjs[k].update();
        })
        obstacles.forEach(o => {
            obstacleRender(o);
        })
    }

    xStd(x: number) {
        return x * this.pkg.w;
    }

    yStd(y: number) {
        return y * this.pkg.h;
    }

    calculateSlopeCoordXY(lane: number, position: number){
        let len = position * skiTrackLen;
        let x = spawnCoords[lane][0] - len * Math.cos(slopeAngle);
        let y = spawnCoords[lane][1] - len * Math.sin(slopeAngle);
        return [x, y];
    }

    destroy() {
        cancelAnimationFrame(this.renderHandle);
    }
}