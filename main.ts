sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    pizza.setPosition(randint(10, 160), randint(10, 120))
    info.startCountdown(10)
})
let pizza: Sprite = null
scene.setBackgroundColor(13)
let mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 f 5 5 5 5 5 f 5 5 5 5 f 
    f 5 5 5 5 f 5 5 5 5 5 f 5 5 5 f 
    f 5 5 5 5 f 5 5 5 5 5 f 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 f 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 f 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 f 5 5 f 
    f 5 5 f 5 5 5 5 5 5 5 f 5 5 5 f 
    f 5 5 5 f 5 5 5 5 5 f f 5 5 5 f 
    f 5 5 5 5 f f f f f 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . . 4 4 4 . . . . . . 
    . . . . . . . 5 4 4 4 . . . . . 
    . . . . . . 5 5 5 4 4 4 . . . . 
    . . . . . 5 2 5 5 2 4 4 4 . . . 
    . . . . . 5 5 5 5 5 5 4 4 4 . . 
    . . . . 5 5 5 5 5 5 5 5 4 4 4 . 
    . . . 2 5 5 5 5 5 2 5 5 5 4 4 . 
    . . . 5 5 5 2 5 5 5 5 5 2 . . . 
    . . . . 5 5 5 5 5 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
