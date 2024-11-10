ServerEvents.recipes(event => {

    function rotary(gas,fluid){
        event.custom({
            "type": "mekanism:rotary",
            "fluidInput": {
                "amount": 1,
                "fluid": fluid
            },
            "fluidOutput": {
                "amount": 1,
                "fluid": fluid
            },
            "gasInput": {
                "amount": 1,
                "gas": gas
            },
            "gasOutput": {
                "amount": 1,
                "gas": gas
            }
        })
    }


    rotary("mekanism:ethene","mekanism:ethene")
    rotary("mekanism:steam","mekanism:steam")
    rotary('kubejs:dustite','kubejs:dustite')
    rotary('kubejs:clumperio','kubejs:clumperio')
    rotary('mekanism:lithium','mekanism:lithium')
    rotary("kubejs:micio","kubejs:micio")
    rotary('kubejs:superio','kubejs:superio')
    rotary('kubejs:zicio','kubejs:zicio')
    rotary('kubejs:methane','kubejs:methane')

    rotary('kubejs:radio_thorium','kubejs:radio_thorium')
    rotary('kubejs:radio_uranium','kubejs:radio_uranium')
    rotary('kubejs:exosteam','kubejs:exosteam')

})