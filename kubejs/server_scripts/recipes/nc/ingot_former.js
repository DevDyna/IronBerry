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
          "radiation": global.nc.rad,
          "timeModifier": global.nc.speed
        }).id(RegX(fluid +amount+ '_' + output, '_'))
    }


    former('kubejs:tin',100,'thermal:tin_ingot')
    former("kubejs:osmium",100,'mekanism:ingot_osmium')
    former("kubejs:thorium",100,'nuclearcraft:thorium_ingot')
    former("kubejs:boron",100,'nuclearcraft:boron_ingot')
    former("kubejs:magnesium",100,'nuclearcraft:magnesium_ingot')
    former("kubejs:uranium",100,'mekanism:ingot_uranium')
    former('nuclearcraft:marshmallow',144,'nuclearcraft:marshmallow')
    former('nuclearcraft:unsweetened_chocolate',144,'nuclearcraft:unsweetened_chocolate')
    former('nuclearcraft:milk_chocolate',144,'nuclearcraft:milk_chocolate')
    former('nuclearcraft:dark_chocolate',144,'nuclearcraft:dark_chocolate')
    former('kubejs:graphite',144,'nuclearcraft:graphite_ingot')
    former('kubejs:fuel_mixture',144,'thoriumreactors:enriched_uranium')

})