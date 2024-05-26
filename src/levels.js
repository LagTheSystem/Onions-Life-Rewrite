const LEVELS = [
    //intro
  [
    '^                                                       =',
    '^                                                       =',
    '^                                                       =',
    '^                                                       =',
    '^                                                       =',
    '^                                                       =',
    '=                                                       =',
    '=                                                       =',
    '=                                                       =',
    '=                                                       =',
    '=                                                       =',
    '=                                                       =',
    '=                                                       =',
    '=                                                       =',
    '=                                                       =',
    '=                                                       =',
    '=         l    $$$        ^      l     $$               =',
    '=========================================================',

  ],
]

const levelConf = {
    tileWidth: 64,
    tileHeight: 64,

    tiles: {
        "=": () => [
            sprite("grass"),
            area(),
            body({isStatic: true}),
            anchor("bot"),
            "ground"
        ],
        "$": () => [
            sprite("coin"),
            area(),
            anchor("bot"),
            "coin",
        ],
        "^": () => [
            sprite("spike"),
            area(),
            body({ isStatic: true }),
            anchor("bot"),
            "danger",
        ],
        "l": () => [
            sprite("jumpy"),
            anchor("bot"),
            area(),
            "jumpy",
        ],
    }
}

export {LEVELS, levelConf}