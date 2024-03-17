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

    infuse('ae2:certus_quartz_dust','pneumaticcraft:etching_acid',10,'ae2:fluix_dust')

    infuse('ae2:fluix_dust','thermal:glowstone',200,'ae2:fluix_crystal')
    infuse('ae2:certus_quartz_dust','thermal:redstone',200,'ae2:charged_certus_quartz_crystal')

    infuse('kubejs:lupenio','nuclearcraft:arsenic',144,'kubejs:arsenic_lupenio')

    infuse('compressium:stone_2','thermal:glowstone',144,'thoriumreactors:blasted_stone')

    infuse('thoriumreactors:depleted_uranium','kubejs:fuel_mixture',144,'thoriumreactors:enriched_uranium')
})