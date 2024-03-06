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


    infuse('minecraft:leather_helmet','kubejs:osmium_enriched',50,'mekanism:hazmat_mask')
    infuse('minecraft:leather_chestplate','kubejs:osmium_enriched',80,'mekanism:hazmat_gown')
    infuse('minecraft:leather_leggings','kubejs:osmium_enriched',70,'mekanism:hazmat_pants')
    infuse('minecraft:leather_boots','kubejs:osmium_enriched',20,'mekanism:hazmat_boots')

    infuse('mekanism:ingot_uranium','kubejs:osmium_enriched',10000,'kubejs:uranium')
    infuse('nuclearcraft:thorium_ingot','kubejs:osmium_enriched',10000,'kubejs:thorium')
})