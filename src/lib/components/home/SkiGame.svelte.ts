import { getSrc, type RenderPkg } from "./CanvasTools.ts";

const loadSprites = (names: string[]) => {
    return names.map(n => {
        let s: HTMLImageElement = new Image();
        s.src = getSrc(n);
        return s;
    })
}

interface boundRange {
    min: number,
    max: number
}

let keybinds : {[id: string]: () => void} = {};

const positionRange: boundRange = {min: 0, max: 4};

export class GameRenderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    mobile: boolean;
    pkg: RenderPkg;
    renderHandle = -1;

    ottPosition: number = 2;

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
        // this.renderHandle = requestAnimationFrame()
    }

    setupEnv(){

    }

    setupEvents(){
        console.log("test");
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
        // this.canvas.addEventListener("click", (e) => {
        // }, { capture: true });
    }

    inputCallback(k: string){
        try{
            console.log(k)
            keybinds[k]();
        }catch{}
    }

    eventLoop(){

    }

    destroy() {
        cancelAnimationFrame(this.renderHandle);
    }
}