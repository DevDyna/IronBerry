ServerEvents.recipes((event) => {
  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "minecraft:brick",
      },
    ],
    pressure: 3.0,
    results: [
      {
        item: "pedestals:block_pedestal",
      },
    ],
  });
  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "bluepower:teslatite_dust",
      },
    ],
    pressure: 2.5,
    results: [
      {
        item: "tombstone:grave_dust",
        count: 16,
      },
    ],
  });
  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "minecraft:sand",
      },
    ],
    pressure: 2.5,
    results: [
      {
        item: "nuclearcraft:silicon_gem",
      },
    ],
  });
  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "kubejs:pre_compressed",
      },
    ],
    pressure: 2.5,
    results: [
      {
        item: "pneumaticcraft:ingot_iron_compressed",
      },
    ],
  });
  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "bluepower:blue_alloy_ingot",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 16,
        item: "kubejs:blank",
      },
    ],
    pressure: 2.5,
    results: [
      {
        item: "kubejs:casing",
        count: 16,
      },
    ],
  });
  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "thermal:saw_blade",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 16,
        item: "kubejs:casing",
      },
    ],
    pressure: 2.5,
    results: [
      {
        item: "kubejs:machine",
        count: 16,
      },
      {
        item: "thermal:saw_blade",
      },
    ],
  });
  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "reactive:stardust",
      },
      {
        item: "twilightforest:steeleaf_ingot",
      },
      {
        item: "froglins:froglin_egg",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 2,
        item: "kubejs:aquamarine",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 3,
        item: "nuclearcraft:silicon_gem",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "kubejs:iolite",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 5,
        item: "kubejs:jade",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 6,
        item: "twilightforest:borer_essence",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 7,
        item: "kubejs:topaz",
      },
    ],
    pressure: 2.5,
    results: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "kubejs:raw_plastic",
      },
    ],
  });
  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "pneumaticcraft:small_tank",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 16,
        item: "kubejs:raw_plastic",
      },
    ],
    pressure: 2.5,
    results: [
      {
        item: "pneumaticcraft:small_tank",
        nbt: '{BlockEntityTag:{SavedTanks:{Tank:{Amount:32000,FluidName:"pneumaticcraft:plastic"}}}}',
      },
    ],
  });

  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "kubejs:assembly_plate",
      },
      {
        item: "reactive:stardust",
      },
    ],
    pressure: 2.5,
    results: [
      {
        item: "pneumaticcraft:assembly_program_laser",
      },
    ],
  });

  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "kubejs:assembly_plate",
      },
      {
        item: "thermal:drill_head",
      },
    ],
    pressure: 2.5,
    results: [
      {
        item: "pneumaticcraft:assembly_program_drill",
      },
    ],
  });

  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "pneumaticcraft:assembly_program_drill",
      },
      {
        item: "pneumaticcraft:assembly_program_laser",
      },
    ],
    pressure: 2.5,
    results: [
      {
        item: "pneumaticcraft:assembly_program_drill_laser",
      },
    ],
  });
  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "kubejs:printed_plate",
      },
      {
        tag: "rootsclassic:berries",
      },
      {
        item: "ars_nouveau:starby_gift",
      },
    ],
    pressure: -0.5,
    results: [
      {
        item: "minecraft:paper",
      },
      {
        item: "minecraft:glowstone_dust",
      },
      {
        item: "minecraft:ink_sac",
      },
      {
        item: "minecraft:glow_ink_sac",
      },
      {
        item: "minecraft:redstone",
      },
      {
        item: "kubejs:printed_plate",
      },
    ],
  });

  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "quark:soul_bead",
      },
      {
        item: "twilightforest:maze_map_focus",
      },
      {
        item: "pneumaticcraft:pressure_gauge",
      },
      {
        item: "twilightforest:magic_map_focus",
      },
      {
        item: "pneumaticcraft:plastic",
      },
    ],
    pressure: 2.0,
    results: [
      {
        item: "kubejs:printed_plate",
      },
    ],
  });
  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "bluepower:teslatite_dust",
      },
      {
        item: "pneumaticcraft:plastic",
      },
      {
        item: "pneumaticcraft:printed_circuit_board",
      },
    ],
    pressure: 2.0,
    results: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "pneumaticcraft:upgrade_matrix",
      },
    ],
  });
  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "bluepower:teslatite_dust",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 2,
        item: "minecraft:redstone_torch",
      },
    ],
    pressure: 2.0,
    results: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 6,
        item: "pneumaticcraft:capacitor",
      },
    ],
  });
  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "bluepower:tungsten_ingot",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 3,
        item: "minecraft:redstone_torch",
      },
    ],
    pressure: 2.0,
    results: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 6,
        item: "pneumaticcraft:transistor",
      },
    ],
  });
  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "twilightforest:fiery_ingot",
      },
      {
        item: "kubejs:pre_compressed",
      },
    ],
    pressure: 2.0,
    results: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 2,
        item: "bluepower:tungsten_ingot",
      },
    ],
  });

  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "minecraft:redstone",
      },
      {
        item: "ars_nouveau:source_gem",
      },
      {
        item: "bluepower:teslatite_dust",
      },
      {
        item: "thermal:rosin",
      },
      {
        item: "exoticbirds:ambrosia",
      },
    ],
    pressure: 1.0,
    results: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "cyclic:gem_amber",
      },
    ],
  });

  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "pneumaticcraft:vacuum_module",
      },
      {
        item: "pneumaticcraft:plastic",
      },
      {
        item: "pneumaticcraft:transistor",
      },
      {
        item: "pneumaticcraft:printed_circuit_board",
      },
    ],
    pressure: 1.6,
    results: [
      {
        item: "pneumaticcraft:camo_applicator",
      },
    ],
  });

  //-------------------------------------------------------//

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "thermal:rubber",
      },
      {
        item: "thermal:sulfur",
      },
    ],
    pressure: 3.0,
    results: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "thermal:cured_rubber",
      },
    ],
  });

  //-------------------------------------------------------//

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "pneumaticcraft:plastic",
      },
      {
        item: "nuclearcraft:silicon_gem",
      },
    ],
    pressure: 3.0,
    results: [
      {
        item: "kubejs:plastic_mixture",
      },
    ],
  });

  //-------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 64,
        item: "pneumaticcraft:reinforced_pressure_tube",
      },{
        item : 'supplementaries:sack'
      },
      {
        item: "thermal:lead_coin",
      },
    ],
    pressure: 2.0,
    results: [
      {
        item: "kubejs:sack_cables",
      },
    ],
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "bluepower:battery_block",
      },{
        item : 'supplementaries:sack'
      },
      {
        item: "rftoolsbase:crafting_card",
      },
      {
        item: "cyclic:detector_item",
      },
      {
        item: "rftoolsutility:sensor",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "thermal:lead_coin",
      }
    ],
    pressure: 2.0,
    results: [
      {
        item: "kubejs:sack_misc",
      },
    ],
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 16,
        item: "ae2:advanced_card",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 16,
        item: "ae2:basic_card",
      },{
        item : 'supplementaries:sack'
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "thermal:lead_coin",
      },
    ],
    pressure: 2.0,
    results: [
      {
        item: "kubejs:sack_cards",
      },
    ],
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: "pneumaticcraft:tube_junction",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 16,
        item: "integratedtunnels:part_interface_fluid",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 16,
        item: "integratedtunnels:part_interface_item",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 16,
        item: "integratedtunnels:part_interface_energy",
      },{
        item : 'supplementaries:sack'
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "thermal:lead_coin",
      },
    ],
    pressure: 2.0,
    results: [
      {
        item: "kubejs:sack_ports",
      },
    ],
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "integrateddynamics:part_display_panel",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "prettypipes:crafting_terminal",
      },{
        item : 'supplementaries:sack'
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "thermal:lead_coin",
      },
    ],
    pressure: 2.0,
    results: [
      {
        item: "kubejs:sack_access",
      },
    ],
  });


  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 64,
        item: 'thoriumreactors:graphite_tube',
      }
    ],
    pressure: 2.0,
    results: [
      {
        item: 'thoriumreactors:reactor_graphite_moderator',
      },
    ],
  });


  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        item: 'ars_nouveau:scryers_crystal',
      },
      {
        item: 'ars_nouveau:source_jar',
      },
      {
        item: 'cyclic:location_data',
      }
    ],
    pressure: 2.5,
    results: [
      {
        item: 'ars_nouveau:enchanters_eye', 
        nbt:'{"ars_nouveau:caster":{current_slot:0,flavor:"",hidden_recipe:"",is_hidden:0b,spell_count:1,spells:{spell0:{name:"",recipe:{part0:"ars_nouveau:glyph_touch",part1:"ars_nouveau:glyph_interact",size:2},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:180,g:25,r:255,type:"ars_nouveau:constant"}}}}}'
      },
    ],
  });

});
