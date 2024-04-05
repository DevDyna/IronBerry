ServerEvents.recipes(event => {

    function smok(input, output) {
        event.smoking(output, input)
    }

    smok('createaddition:cake_base', 'createaddition:cake_base_baked')


})
