import tarot00 from '../static/00.jpg'
import tarot01 from '../static/01.jpg'
import tarot02 from '../static/02.jpg'

const loader = window.PIXI.loader;

loader.add('tarot00', tarot00)
      .add('tarot01', tarot01)
      .add('tarot02', tarot02)

export default () => {
    // Promise的動作,確保他有加載完成
    return new Promise(resolve => {
        // 網路連線失敗 或其他原因造成加載失敗,可以在這邊做處理
        loader.load((loader, resource) => resolve())
    })
}