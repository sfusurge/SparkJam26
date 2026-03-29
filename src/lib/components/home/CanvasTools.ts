export interface RenderPkg {
    ctx: CanvasRenderingContext2D;
    w: number;
    h: number;
}

export function getSrc(file: string) {
    return `/game/${file}${(file.split(".").length < 2) && ".webp"}`
}

export abstract class component {
    x: number;
    y: number;
    ctx: CanvasRenderingContext2D;

    pkg: RenderPkg;

    SpecialSetup: () => void;

    constructor(pkg: RenderPkg, x: number, y: number, setup = () => { }) {
        this.x = x;
        this.y = y;
        this.ctx = pkg.ctx;
        this.pkg = pkg;
        this.SpecialSetup = setup;
    }

    abstract update(): void;

    xStd(x: number) {
        return x * this.pkg.w;
    }

    yStd(y: number) {
        return y * this.pkg.h;
    }
}

export class cQuad extends component {
    width: number;
    height: number;
    type: string;

    constructor(pkg: RenderPkg, x: number, y: number, width: number, height: number, type: string, setup = () => { }) {
        super(pkg, x, y, setup);
        this.width = width;
        this.height = height;
        this.type = type;
    }

    update() {
        this.SpecialSetup();
        if (this.type == "fill") {
            this.ctx.fillRect(this.xStd(this.x), this.yStd(this.y), this.xStd(this.width), this.yStd(this.height));
        } else {
            this.ctx.strokeRect(this.xStd(this.x), this.yStd(this.y), this.xStd(this.width), this.yStd(this.height));
        }
    }
}

export class cCircle extends component {
    radius: number

    constructor(pkg: RenderPkg, x: number, y: number, radius: number, setup = () => { }) {
        super(pkg, x, y, setup);
        this.radius = radius;
    }

    update() {
        this.SpecialSetup();
        this.ctx.beginPath();
        this.ctx.arc(this.xStd(this.x), this.yStd(this.y), this.yStd(this.radius), 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
    }
}

export class cImg extends component {
    currentSprite: number;
    spriteForms: HTMLImageElement[];

    static imageCache: { [key: number]: HTMLImageElement } = {};
    constructor(pkg: RenderPkg, x: number, y: number, sprites: HTMLImageElement[], currentId: number = 0, setup = () => { }) {
        super(pkg, x, y, setup);
        this.currentSprite = currentId;
        this.spriteForms = sprites;
        sprites.forEach((s, i) => {
            if (i in cImg.imageCache) {
                return cImg.imageCache[i];
            }
            cImg.imageCache[i] = s;
        })
    }

    update() {
        this.SpecialSetup();
        this.ctx.drawImage(this.spriteForms[this.currentSprite], this.xStd(this.x), this.yStd(this.y));
    }
}

export const createImgElementByName = (pkg: RenderPkg, x: number, y: number, sprites: string[], currentId: number = 0, setup = () => { }) => {
    let imgs = sprites.map((s) => {
        let i = new HTMLImageElement();
        i.src = s;
        return i;
    })
    return new cImg(pkg, x, y, imgs, currentId, setup);
}

export class cText extends component {
    stringVal: string;

    constructor(pkg: RenderPkg, x: number, y: number, stringValue: string, setup = () => { }) {
        super(pkg, x, y, setup);
        this.stringVal = stringValue;
    }

    update() {
        this.SpecialSetup();
        this.ctx.fillStyle = "black";
        this.ctx.strokeStyle = "white";
        this.ctx.font = "bold 20px Arial";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.lineWidth = 2
        this.ctx.strokeText(this.stringVal, this.xStd(this.x), this.yStd(this.y));
        this.ctx.fillText(this.stringVal, this.xStd(this.x), this.yStd(this.y));
    }
}