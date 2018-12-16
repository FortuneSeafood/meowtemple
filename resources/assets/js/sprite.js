export default (option) => {
    const { name } = option
    let Sprite
    if (name) {
        //沒有.texture的話會加載不到東西
        Sprite = new PIXI.Sprite(PIXI.loader.resources[name].texture);
    }
    return Sprite
}