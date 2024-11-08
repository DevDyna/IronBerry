//priority 9
ServerEvents.recipes((event) => {
  ////recipe removed
  //-----------------------------------------------//
  let remid = (idlist) => {
    for (let i = 0; i < idlist.length; i++) {
      event.remove({
        id: idlist[i],
      });
    }
  };
  //-----------------------------------------------//
  let remtype = (typelist) => {
    for (let i = 0; i < typelist.length; i++) {
      event.remove({
        type: typelist[i],
      });
    }
  };
  //-----------------------------------------------//
  //Dynamic Tag Remover//
  event.remove({
    output: ["#ironberry:output", "#ironberry:any", "#ironberry:disabled"],
  });

  event.remove({
    input: ["#ironberry:input", "#ironberry:any", "#ironberry:disabled"],
  });
  //-----------------------------------------------//

  remid([
    'bluepower:furnace/tungsten_ingot_from_tungsten_dust',
    "bluepower:blast_furnace/tungsten_ingot",
    "mekanism:processing/bronze/ingot/from_dust_blasting",
    "mekanism:processing/osmium/ingot/from_ore_smelting",
    "mekanism:processing/uranium/ingot/from_ore_smelting",
    "mekanism:processing/bronze/ingot/from_dust_smelting",
    "minecraft:nuclearcraft_ferroboron_plate",
    "minecraft:nuclearcraft_hard_carbon_dust",
    "minecraft:nuclearcraft_magnesium_plate",
    "minecraft:nuclearcraft_magnesium_raw",
    "minecraft:nuclearcraft_extreme_plate",
    "minecraft:nuclearcraft_boron_ore",
    "minecraft:nuclearcraft_manganese_plate",
    "minecraft:nuclearcraft_ferroboron_dust",
    "minecraft:nuclearcraft_magnesium_ore",
    "mekanism:processing/osmium/ingot/from_raw_smelting",
    "mekanism:processing/steel/ingot/from_dust_smelting",
    "minecraft:nuclearcraft_hard_carbon_plate",
    "minecraft:nuclearcraft_boron_raw",
    "minecraft:nuclearcraft_thermoconducting_plate",
    "minecraft:nuclearcraft_boron_plate",
    "minecraft:nuclearcraft_tough_alloy_plate",
    "mekanism:processing/osmium/ingot/from_dust_smelting",
    "mekanism:processing/uranium/ingot/from_dust_smelting",
    "minecraft:nuclearcraft_magnesium_dust",
    "bluepower:furnace/tungsten_ingot",
    "minecraft:nuclearcraft_extreme_dust",
    "mekanism:processing/osmium/ingot/from_raw_blasting",
    "mekanism:processing/steel/ingot/from_dust_blasting",
    "mekanism:processing/uranium/ingot/from_dust_blasting",
    "mekanism:processing/osmium/ingot/from_ore_blasting",
    "mekanism:processing/uranium/ingot/from_ore_blasting",
    "mekanism:processing/osmium/ingot/from_dust_blasting",
    "mekanism:processing/refined_obsidian/ingot/from_block",
    "mekanism:processing/osmium/ingot/from_block",
    "cyclic:rotator",
    "minecraft:boron_from_nugget",
    "mekanism:upgrade/muffling",
    "mekanism:upgrade/speed",
    "cyclic:user",
    "cyclic:solidifier",
    "cyclic:crusher",
    "cyclic:guide_book",
    "ae2:network/blocks/quantum_ring",
    "minecraft:magnesium_from_nugget",
    "ae2:network/parts/cable_anchor",

    "extendedcrafting:crystaltine_singularity",
    "ae2:network/blocks/interfaces_interface",
    "ae2:network/blocks/pattern_providers_interface",
    "ten3:induction_furnace/azure_glass",
    "ten3:vanilla/redstone_ai",
    "ten3:vanilla/detector",
    "ten3:vanilla/machine/machine_refiner",
    "inventorypets:coal",
    "inventorypets:nugget_coal_alt",
    "inventorypets:nugget_coal",
    "inventorypets:nugget_emerald_alt",
    "ae2:network/cables/glass_fluix",
    "ae2:network/cables/covered_fluix",
    "ae2:network/cables/smart_fluix",
    "ae2:inscriber/certus_quartz_dust",
    "ae2:charger/charged_certus_quartz_crystal",
    "ae2:transform/fluix_crystal",
    "ae2:transform/certus_quartz_crystals",
    "ae2:transform/fluix_crystals",
    "engineersdecor:independent/small_block_breaker_recipe",
    "engineersdecor:dependent/small_solar_panel_recipe",
    "cyclic:crusher/granite",
    "cyclic:crusher/diorite",
    "bluepower:solar_panel",
    "mekanism:teleportation_core",
    "ironchest:upgrades/gold_to_diamond_chest_upgrade",
    "ironchest:upgrades/iron_to_gold_chest_upgrade",
    "ironchest:upgrades/copper_to_iron_chest_upgrade",
    "ironchest:upgrades/wood_to_copper_chest_upgrade",
    "cyclic:crusher/jukebox",
    //'thermal:machines/refinery/refinery_crude_oil',
    //'thermal:machines/refinery/refinery_resin',
    //'thermal:devices/rock_gen/rock_gen_deepslate',
    //'thermal:devices/rock_gen/rock_gen_cobbled_deepslate',
    "craftingstation:crafting_station_slab",
    "homespun:crushing/crushing_flint_from_gravel",
    "homespun:crushing/crushing_sugar_from_beets",
    "homespun:crushing/crushing_ironberry_juice_from_ironberries",
    "homespun:evaporating_tiny_iron_dust_from_ironberry_juice",
    "homespun:crushing_tiny_iron_dust_from_raw_iron",
    "pedestals:pedestals/pedestal_stone",
    "minecraft:raw_iron",
    "cyclic:compat/sturdy_stone",
    "cyclic:compressed_cobblestone",
    "twilightforest:uncrafting/tipped_arrow_uncraft",
    "cyclic:compressed_cobblestone_u",
    "cyclic:crusher/redstone_observer",
    "cyclic:crusher/redsone_comparator", //redsone o.o
    "ars_nouveau:stable_warp_scroll",
    "mekanism:coolant/sodium",
    "mekanism:coolant/water",
    "mekanism:processing/fissile_fuel",
    /* 			'mekanism:rotary/brine',
            'mekanism:rotary/chlorine',
            'mekanism:rotary/ethene',
            'mekanism:rotary/hydrofluoric_acid',
            'mekanism:rotary/hydrogen',
            'mekanism:rotary/hydrogen_chloride',
            'mekanism:rotary/lithium',
            'mekanism:rotary/oxygen',
            'mekanism:rotary/sodium',
            'mekanism:rotary/steam',
            'mekanism:rotary/sulfuric_acid',
            'mekanism:rotary/sulfur_dioxide',
            'mekanism:rotary/sulfur_trioxide',
            'mekanism:rotary/superheated_sodium',
            'mekanism:rotary/uranium_hexafluoride',
            'mekanism:rotary/uranium_oxide', */
    /* 			'mekanismgenerators:rotary/deuterium',
            'mekanismgenerators:rotary/fusion_fuel',
            'mekanismgenerators:rotary/tritium', */
    "mekanism:processing/iron/crystal/from_slurry",
    "mekanism:processing/tin/crystal/from_slurry",
    "mekanism:processing/uranium/crystal/from_slurry",
    "mekanism:processing/lead/crystal/from_slurry",
    "mekanism:processing/osmium/crystal/from_slurry",
    "mekanism:processing/gold/crystal/from_slurry",
    "mekanism:processing/copper/crystal/from_slurry",
    "mekanism:crystallizing/lithium",
    "mekanism:separator/water",
    "mekanismgenerators:separator/heavy_water",
    "mekanism:separator/brine",
    "biomancy:decomposer",
    "biomancy:bio_forging/decomposer_from_bio_forging",
    "biomancy:nutrient_paste",
  ]);

  remtype([
    "twilightforest:transformation_powder",
    "create:milling",
    "create:cutting",
    "ae2:entropy",
    "mekanism:energy_conversion",
    /* 			'thermal:machines',
            'thermal:sawmill',
            'thermal:tree_extractor', */
    "cyclic:melter",
    "cyclic:solidifier",
    "pneumaticcraft:assembly_laser",
    "pneumaticcraft:assembly_drill",
    "pneumaticcraft:thermo_plant",
    "pneumaticcraft:explosion_crafting",
    "pneumaticcraft:pressure_chamber",
    "pneumaticcraft:fluid_mixer",
    "pedestals:cobblegen",
    "integrateddynamics:drying_basin",
    "integrateddynamics:mechanical_drying_basin",
    "integrateddynamics:mechanical_squeezer",
    "integrateddynamics:squeezer",
    "ars_nouveau:imbuement",
    "ars_nouveau:reactive_enchantment",
    "ars_nouveau:enchantment",
    "ars_nouveau:armor_upgrade",
    "mekanismgenerators:rotary",
    "cyclic:generator_fluid",
    "cyclic:generator_item",
    "mekanism:rotary",
    "mekanism:oxidizing",
    "mekanism:processing",
  ]);

  event.remove({
    mod: "alchemygadgetry",
  });
  event.remove({
    mod: "thermal",
  });
  event.remove({
    mod: "nuclearcraft",
  });
  event.remove({
    mod: "gateways",
  });

  // event.remove({
  //     mod: 'ae2'
  // })

  event.remove({
    mod: "appmek",
  });

  event.remove({
    mod: "arseng",
  });

  event.remove({
    mod: "expatternprovider",
  });

  event.remove({
    mod: "ae2things",
  });

  event.remove({
    mod: "ae2wtlib",
  });

  event.remove({
    mod: "thoriumreactors",
  });

  event.remove({
    mod: "create",
  });

  event.remove({
    mod: "createaddition",
  });

  event.remove({
    mod: "ten3",
  });

  event.remove({
    mod: "logicchips",
  });

  event.remove({
    mod: "extendedcrafting",
  });

  event.remove({
    mod: "thermalendergy",
  });
});
