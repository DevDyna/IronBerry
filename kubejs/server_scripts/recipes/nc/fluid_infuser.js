ServerEvents.recipes(event => {

    function infuse(item,fluid,amount,output,count){
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
          ItemAndCount(output,count)
        ],
        "powerModifier": global.nc.power,
        "radiation": global.nc.rad,
        "timeModifier": global.nc.speed
      })
    }

    infuse('mekanism:dust_obsidian','kubejs:osmium_enriched',750,'mekanism:dust_refined_obsidian',1)
    infuse('minecraft:bamboo','kubejs:osmium_enriched',150,'minecraft:sugar_cane',1)
    infuse('minecraft:sugar_cane','nuclearcraft:marshmallow',144,'nuclearcraft:gelatin',1)


    infuse('minecraft:leather_helmet','kubejs:osmium_enriched',50,'mekanism:hazmat_mask',1)
    infuse('minecraft:leather_chestplate','kubejs:osmium_enriched',80,'mekanism:hazmat_gown',1)
    infuse('minecraft:leather_leggings','kubejs:osmium_enriched',70,'mekanism:hazmat_pants',1)
    infuse('minecraft:leather_boots','kubejs:osmium_enriched',20,'mekanism:hazmat_boots',1)

    infuse('mekanism:ingot_uranium','kubejs:osmium_enriched',10000,'kubejs:uranium',1)
    infuse('nuclearcraft:thorium_ingot','kubejs:osmium_enriched',10000,'kubejs:thorium',1)

    infuse('ae2:certus_quartz_dust','pneumaticcraft:etching_acid',10,'ae2:fluix_dust',1)

    infuse('ae2:fluix_dust','thermal:glowstone',200,'ae2:fluix_crystal',1)
    infuse('ae2:certus_quartz_dust','thermal:redstone',200,'ae2:charged_certus_quartz_crystal',1)

    infuse('kubejs:lupenio','nuclearcraft:arsenic',144,'kubejs:arsenic_lupenio',1)

    infuse('compressium:stone_2','thermal:glowstone',144,'thoriumreactors:blasted_stone',1)

    infuse('thoriumreactors:depleted_uranium','kubejs:fuel_mixture',144,'thoriumreactors:enriched_uranium',1)

    infuse('thoriumreactors:machine_casing','kubejs:red_power',144, 'thoriumreactors:electromagnetic_coil',1)

    infuse('createaddition:cake_base_baked','create:chocolate',144, 'createaddition:chocolate_cake',1)
    infuse('createaddition:cake_base_baked','cofh_core:honey',144, 'createaddition:honey_cake',1)

    infuse('minecraft:gold_ingot','kubejs:red_power',144,'thermal:rf_coil',1)
    infuse('minecraft:iron_ingot','kubejs:red_power',144,'thermal:redstone_servo',1)

    infuse('farmersdelight:rich_soil','biomancy:acid',50,'kubejs:rich_bone_meal',5)

  })