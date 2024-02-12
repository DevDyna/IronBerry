ServerEvents.recipes(event => {

    function former(fluid,amount,output){
        event.custom({
          "type": "nuclearcraft:ingot_former",
          "inputFluids": [
            {
              "amount": amount,
              "fluid": fluid
            }
          ],
          "output": [
            {
              "item": output
            }
          ],
          "powerModifier": global.nc.energy,
          "radiation": 0.0,
          "timeModifier": global.nc.speed
        }).id(RegX(fluid +amount+ '_' + output, '_'))
    }


    former('kubejs:tin',100,'thermal:tin_ingot')
    former("kubejs:graphite",100,'nuclearcraft:graphite_ingot')
    former("kubejs:thorium",100,'nuclearcraft:thorium_ingot')
    former("kubejs:boron",100,'nuclearcraft:boron_ingot')
    former("kubejs:magnesium",100,'nuclearcraft:magnesium_ingot')
    former("kubejs:uranium",100,'nuclearcraft:uranium_ingot')

})