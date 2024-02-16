ServerEvents.recipes(event => {

    function infuse(item,fluid,amount,output){
    event.custom({
        "type": "nuclearcraft:fluid_infuser",
        "input": [
          {
            "item": item
          }
        ],
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
        "powerModifier": global.nc.power,
        "radiation": global.nc.rad,
        "timeModifier": global.nc.speed
      })
    }

    infuse('mekanism:dust_obsidian','kubejs:osmium_enriched',750,'mekanism:dust_refined_obsidian')
    infuse('minecraft:bamboo','kubejs:osmium_enriched',150,'minecraft:sugar_cane')
    infuse('minecraft:sugar_cane','nuclearcraft:marshmallow',144,'nuclearcraft:gelatin')

})