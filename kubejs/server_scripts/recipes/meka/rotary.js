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

})