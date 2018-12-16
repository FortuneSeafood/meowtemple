import PIXI from 'pixi.js'
import App from 'apps.js'
import load from 'load.js'
import sprite from 'sprite.js'

// Hook:掛鉤,提高對資源的控管和掌握
const Hook = {
    async create() {
        const app = new App('body')
        // 等待資源加載完
        await load()

        //create的時候,把Application new出來＋資源都加載完了
        //接下來就是在場景做想做的事情就可以,不用怕資源抓不到
        return app
    },
    async mounted() {
        // this =  PIXI.Application
        const x = sprite({ name:'tarot00' })
        //這邊應該用一個component去接這個x,再把component給這個stage
        //第一層 導演：控制整個場景該負責的畫面
        //第二層 零件：Component 把一些精靈,或資源加載到自己身上,等待導演呼叫他出來
        //第三層 資源：resource 單一資源
        //x.position = 10
        this.stage.addChild(x)
    }
}

const init = async () => {
    // 初始化資源
    const app = await Hook.create()
    await Hook.mounted.call(app)
}

// 避免還沒加載完,就去讀js,append的時候dom節點根本還沒準備好
window.onload = init()