namespace SpriteKind {
    export const Porteria = SpriteKind.create()
    export const Portero = SpriteKind.create()
    export const Pelota = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Pelota.setVelocity(0, -100)
})
sprites.onOverlap(SpriteKind.Pelota, SpriteKind.Porteria, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Pelota.setPosition(80, 60)
    Pelota.setVelocity(0, 0)
    controller.moveSprite(Pelota, 100, 0)
})
sprites.onOverlap(SpriteKind.Pelota, SpriteKind.Portero, function (sprite, otherSprite) {
    Pelota.setPosition(80, 60)
    Pelota.setVelocity(0, 0)
    controller.moveSprite(Pelota, 100, 0)
})
let Pelota: Sprite = null
tiles.setCurrentTilemap(tilemap`Campo`)
let Portería = sprites.create(assets.image`Porteria`, SpriteKind.Porteria)
Portería.setScale(7, ScaleAnchor.Middle)
Portería.setPosition(77, 16)
let Bengi_Pararalo_Todo_Prais = sprites.create(assets.image`Bengi`, SpriteKind.Portero)
let Alan = sprites.create(assets.image`Alan`, SpriteKind.Portero)
let Portero_Ninga_Wuarner = sprites.create(assets.image`Wuarner`, SpriteKind.Portero)
Bengi_Pararalo_Todo_Prais.setPosition(70, 26)
Portero_Ninga_Wuarner.setPosition(70, 26)
Alan.setPosition(70, 26)
Pelota = sprites.create(assets.image`Pelota`, SpriteKind.Pelota)
Pelota.setPosition(80, 60)
Pelota.setStayInScreen(true)
controller.moveSprite(Pelota, 100, 0)
forever(function () {
    pause(500)
    tiles.placeOnRandomTile(Portero_Ninga_Wuarner, assets.tile`Aparecer Wuarner`)
})
forever(function () {
    pause(1000)
    tiles.placeOnRandomTile(Bengi_Pararalo_Todo_Prais, assets.tile`Linia`)
})
forever(function () {
    pause(2000)
    tiles.placeOnRandomTile(Alan, sprites.castle.tileGrass2)
})
