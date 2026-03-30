import { cImg, component, cQuad, getSrc, type RenderPkg } from "./CanvasTools.ts";

interface boundRange {
    min: number,
    max: number
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
const defaultPos: number = 1;
const positionCoords: number[][] = [
    [0.17, 0.37],
    [0.14, 0.42],
    [0.11, 0.47],
    [0.08, 0.52],
    [0.05, 0.57]
];

const backgroundFrames: number = 15000;

const destination: number = 4173;
const duration: number = 400000;

const obstacleGenerationSpacing: boundRange = {min: 4000, max: 10000};

export class GameRenderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    mobile: boolean;
    pkg: RenderPkg;
    renderHandle = -1;

    currentTime = 0;
    delta = 0;

    staticObj: component[] = [];
    obstaclesObj: component[] = [];
    dynamicObjs: {[id: string]: component} = {};

    ottPosition: number = defaultPos;
    ottID: string = "OTT";

    state: string = "play";

    currentDistanceInKM: number = $state(0);


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

        this.renderHandle = requestAnimationFrame(this.eventLoop.bind(this));
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

        this.staticObj.push(
            new cQuad(this.pkg,
                -0.05, 0.1,
                1.2, 1.2,
                "fill",
                () => {
                    this.ctx.fillStyle = "white";
                    this.ctx.rotate(34 * Math.PI / 180);
                }
            ),
            new cQuad(this.pkg,
                -0.05, 0.6,
                1.2, 1.2,
                "fill",
                () => {
                    this.ctx.fillStyle = "lightgrey";
                    this.ctx.rotate(34 * Math.PI / 180);
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
        
    }

    setupEvents(){
        keybinds['a'] = () => {
            if(this.ottPosition > positionRange.min){
                this.ottPosition--;
                this.dynamicObjs[this.ottID].setPosition(positionCoords[this.ottPosition][0], positionCoords[this.ottPosition][1]);
            }
        };
        keybinds['d'] = () => {
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
        
        Object.keys(this.dynamicObjs).forEach(k => {
            this.dynamicObjs[k].update();
        })

        // this.obstaclesObj.forEach(obj => {
        //     obj.update();
        // });
    }

    destroy() {
        cancelAnimationFrame(this.renderHandle);
    }
}