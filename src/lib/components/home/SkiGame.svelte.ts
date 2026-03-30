import { cImg, component, cQuad, getSrc, type RenderPkg } from "./CanvasTools.ts";

const loadSprites = (names: string[]) => {
    return names.map(n => {
        let s: HTMLImageElement = new Image();
        s.src = getSrc(n);
        return s;
    })
}

const envSprites = loadSprites(["mountains.svg"])

interface boundRange {
    min: number,
    max: number
}

let keybinds : {[id: string]: () => void} = {};

const positionRange: boundRange = {min: 0, max: 4};

const backgroundFrames: number = 15000;

export class GameRenderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    mobile: boolean;
    pkg: RenderPkg;
    renderHandle = -1;

    currentTime = 0;
    delta = 0;

    staticObj: component[] = [];
    bgMovingObjs: {[id: string]: component} = {};

    ottPosition: number = 2;

    state: string = "play";


    constructor(canvas: HTMLCanvasElement, mobileMode:boolean){
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")!;
        this.pkg = {
            ctx: this.ctx,
            w: canvas.width,
            h: canvas.height
        }
        this.mobile = mobileMode;
        this.init();
    }

    init(){
        this.setupEnv();
        this.setupEvents();

        this.renderHandle = requestAnimationFrame(this.eventLoop.bind(this));
    }

    setupEnv(){
        //mountains
        this.staticObj.push(
            new cImg(this.pkg,
                0, 0.34,
                [envSprites[0]]
            ),
            new cImg(this.pkg,
                1, 0.34,
                [envSprites[0]]
            ),
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
    }

    setupEvents(){
        keybinds['a'] = () => {
            if(this.ottPosition > positionRange.min){
                this.ottPosition--;
            }
        };
        keybinds['d'] = () => {
            if(this.ottPosition < positionRange.max){
                this.ottPosition++;
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
    }

    destroy() {
        cancelAnimationFrame(this.renderHandle);
    }
}