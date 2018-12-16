export default class App {
    // el:element
    constructor(el) {
        this.el = el
        // 這邊PIXI可以直接用,因為在main.js已經import,已有注入到window下面
        this.PIXI = new PIXI.Application(800, 600, {backgroundColor : 'red'});
        return this.render(this.el)
    }

    render(el) {
        document.querySelector(el).appendChild(this.PIXI.view)
        return this.PIXI
    }
}