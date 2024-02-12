ServerEvents.recipes(event => {

    function separator(influid,fluidcount,gas1,count1,gas2,count2){
        event.custom({
            "type": "mekanism:separating",
            "input": {
                "amount": fluidcount,
                "fluid": influid
            },
            "leftGasOutput": {
                "amount": count1,
                "gas": gas1
            },
            "rightGasOutput": {
                "amount": count2,
                "gas": gas2
            }
        })
    }
    separator("kubejs:micio",2,"kubejs:clumperio",1,"mekanism:lithium",1)
    separator("mekanism:lithium",10,"kubejs:dustite",9,"kubejs:nucleonium",1)
    separator('kubejs:clumperio',10,'kubejs:clay',4,'kubejs:tesla',1)
    separator("kubejs:dustite",6,'kubejs:red',1,'kubejs:glow',2)
    separator('mekanism:steam',125,'mekanism:ethene',1,"kubejs:pyrotheum",2)
    



})