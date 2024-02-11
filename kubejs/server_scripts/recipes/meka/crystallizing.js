ServerEvents.recipes(event => {

    function crystallizer(gas,count,item){
        event.custom({
            "type": "mekanism:crystallizing",
            "chemicalType": "gas",
            "input": {
                "amount": count,
                "gas": gas
            },
            "output": {
                "item": item
            }
        })   
    }

    crystallizer("kubejs:clay",100,"minecraft:clay_ball")
    crystallizer("kubejs:tesla",100,"bluepower:teslatite_dust")
    crystallizer("kubejs:red",100,"minecraft:redstone")
    crystallizer("kubejs:glow",100,"minecraft:glowstone_dust")
    crystallizer('mekanims:lithium',100,'mekanism:dust_lithium')

})