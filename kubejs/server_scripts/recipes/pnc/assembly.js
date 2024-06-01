ServerEvents.recipes((event) => {
  //-----------------------------------------------------------------------------------------------------------//
  event.custom({
    type: "pneumaticcraft:assembly_drill",
    input: {
      item: "supplementaries:present",
    },
    program: "drill",
    result: {
      item: "tombstone:gift",
      nbt: '{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"tombstone:gift",tag:{Items:[{Count:1,id:"minecraft:player_head",tag:{SkullOwner:"DevDyna"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}',
    },
  });
  //-----------------------------------------------------------------------------------------------------------//
  //-----------------------------------------------------------------------------------------------------------//
  function drill(input, output, count) {
    //drill recipe with sequential laser recipe will automatly unified as drill input = laser output!
    event
      .custom({
        type: "pneumaticcraft:assembly_drill",
        input: ItemOrTag(input),
        program: "drill",
        result: ItemAndCount(output, count),
      })
      .id(RegX(input + "_" + output + "_" + count));
  }
  function laser(input, output, count) {
    event
      .custom({
        type: "pneumaticcraft:assembly_laser",
        input: ItemOrTag(input),
        program: "laser",
        result: ItemAndCount(output, count),
      })
      .id(RegX(input + "_" + output + "_" + count));
  }
  function drill_laser(input, middle, middle_count, output, output_count) {
    drill(input, middle, middle_count);
    laser(middle, output, output_count);
  }
  //-----------------------------------------------------------------------------------------------------------//

  laser("#minecraft:logs_that_burn", "supplementaries:ash", 16);
  drill("supplementaries:ash", "minecraft:gold_nugget", 4);

  drill_laser(
    "pneumaticcraft:empty_pcb",
    "pneumaticcraft:unassembled_pcb",
    1,
    "pneumaticcraft:printed_circuit_board",
    1
  );

  drill(
    "pneumaticcraft:printed_circuit_board",
    "mekanism:basic_control_circuit",
    2
  );

  laser("pneumaticcraft:upgrade_matrix", "minecraft:lapis_lazuli", 16);

  drill_laser(
    "homespun:ironberries",
    "homespun:tiny_iron_dust",
    4,
    "minecraft:raw_iron",
    4
  );

  drill_laser(
    "minecraft:raw_copper",
    "kubejs:patina",
    12,
    "homespun:copper_nugget",
    3
  );

  laser("minecraft:sand", "minecraft:red_sand", 1);

  drill_laser(
    "minecraft:iron_ingot",
    "thermal:silver_ingot",
    1,
    "thermal:lead_ingot",
    1
  );

  laser("kubejs:solidified_resin", "nuclearcraft:bioplastic", 2);

  laser("kubejs:plastic_mixture", "kubejs:silicon_plated", 1);

  function keepnbt(input, output, nbt) {
    event.custom({
      type: "pneumaticcraft:assembly_drill",
      input: {
        item: input,
      },
      program: "drill",
      result: {
        item: output,
        nbt: nbt,
      },
    });
  }

  keepnbt(
    "kubejs:sack_access",
    "supplementaries:sack",
    '{BlockEntityTag:{Items:[{Count:2b,Slot:0b,id:"ae2:crafting_terminal"},{Count:2b,Slot:1b,id:"ae2:terminal"},{Count:2b,Slot:2b,id:"ae2:storage_monitor"},{Count:2b,Slot:3b,id:"ae2:conversion_monitor"}],id:"minecraft:shulker_box"}}'
  );

  keepnbt(
    "kubejs:sack_ports",
    "supplementaries:sack",
    '{BlockEntityTag:{Items:[{Count:16b,Slot:0b,id:"ae2:interface"},{Count:16b,Slot:1b,id:"ae2:import_bus"},{Count:16b,Slot:2b,id:"ae2:export_bus"},{Count:16b,Slot:3b,id:"ae2:storage_bus"},{Count:16b,Slot:4b,id:"ae2:annihilation_plane"},{Count:16b,Slot:5b,id:"ae2:formation_plane"},{Count:32b,Slot:6b,id:"ae2:me_p2p_tunnel"}],id:"minecraft:shulker_box"}}'
  );


  keepnbt(
    "kubejs:sack_cards",
    "supplementaries:sack",
    '{BlockEntityTag:{Items:[{Count:8b,Slot:0b,id:"ae2:inverter_card"},{Count:8b,Slot:1b,id:"ae2:capacity_card"},{Count:8b,Slot:3b,id:"ae2:fuzzy_card"},{Count:8b,Slot:4b,id:"ae2:redstone_card"}],id:"minecraft:shulker_box"}}'
  );

  keepnbt(
    "kubejs:sack_misc",
    "supplementaries:sack",
    '{BlockEntityTag:{Items:[{Count:1b,Slot:0b,id:"ae2:energy_acceptor"},{Count:64b,Slot:1b,id:"ae2:toggle_bus"},{Count:64b,Slot:2b,id:"ae2:inverted_toggle_bus"},{Count:64b,Slot:3b,id:"ae2:energy_level_emitter"},{Count:64b,Slot:4b,id:"ae2:level_emitter"},{Count:1b,Slot:5b,id:"ae2:energy_cell",tag:{}},{Count:1b,Slot:6b,id:"ae2:memory_card",tag:{}}],id:"minecraft:shulker_box"}}'
  );
  keepnbt(
    "kubejs:sack_cables",
    "supplementaries:sack",
    '{BlockEntityTag:{Items:[{Count:64b,Slot:0b,id:"ae2:fluix_smart_cable"},{Count:64b,Slot:1b,id:"ae2:fluix_smart_cable"},{Count:64b,Slot:2b,id:"ae2:fluix_smart_cable"},{Count:64b,Slot:3b,id:"ae2:fluix_smart_cable"},{Count:64b,Slot:4b,id:"ae2:quartz_fiber"},{Count:64b,Slot:5b,id:"ae2:fluix_smart_cable"},{Count:64b,Slot:6b,id:"ae2:fluix_smart_cable"},{Count:64b,Slot:7b,id:"ae2:fluix_smart_cable"},{Count:64b,Slot:8b,id:"ae2:fluix_smart_cable"}],id:"minecraft:shulker_box"}}'
  );

});
