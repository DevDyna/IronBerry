ServerEvents.recipes(event => {
    //shapeless
    event.shapeless(
        Item.of('rootsclassic:fruit_salad', 3), // arg 1: output
        [
            'minecraft:bowl',
            '3x #rootsclassic:berries'
        ])
    //
    //
})
