ServerEvents.recipes((event) => {
  let counter = 0;
  //shapeless
  //----------------------------------------------//
  /**
   *
   * @param {item[]} inputs [1,2,3,4,5,6,7,8,9] or just 9x -item- to full all slots
   * @param {item} output result
   */
  let less = (inputs, output) => {
    counter++;
    event
      .shapeless(output, inputs)
      .id(RegX(counter + "_" + inputs + "_" + output).replace(/\s/g, "_"));
  };
  //----------------------------------------------//	tombstone marbles
  for (let i = 0; i < data.block.tombstone.length; i++) {
    //dark to white
    less(
      [
        Item.of(data.block.tombstone[i], "{model_texture:0}"),
        "tombstone:white_marble",
      ],
      Item.of(data.block.tombstone[i], "{model_texture:1}")
    );
    //white to dark
    less(
      [
        Item.of(data.block.tombstone[i], "{model_texture:1}"),
        "tombstone:dark_marble",
      ],
      Item.of(data.block.tombstone[i], "{model_texture:0}")
    );
  }
  //----------------------------------------------//
  try {
    function moless(base, variants) {
      variants.forEach((colors) => {
        less([base, colors[1]], colors[0]); //forge:beds+ *dye* = *bed with dye* -> beds[[bed,dye],[bed,dye]]
      });
    }
  } catch (e) {}
  //----------------------------------------------//
  try {
    function supless(base, result, variants) {
      variants.forEach((ingredient) => {
        less([base, ingredient], result); //forge:beds+ *dye* = *bed with dye* -> beds[[bed,dye],[bed,dye]]
      });
    }
  } catch (e) {}
  //----------------------------------------------//
  try {
    function emolimix(jump, variants) {
      for (let i = 0; i < variants.length - 1; i++) {
        less([variants[i], jump], variants[i + 1]);
      }
    }
  } catch (e) {}
  //----------------------------------------------//
  less(
    ["minecraft:bowl", "3x #rootsclassic:berries"],
    "3x rootsclassic:fruit_salad"
  );

  less(["minecraft:redstone", "minecraft:paper"], "thermal:redprint");

  less(["2x #ironberry:tables"], "2x craftingstation:crafting_station_slab");

  less(
    ["6x minecraft:hopper", "sophisticatedstorage:upgrade_base"],
    "sophisticatedstorage:advanced_hopper_upgrade"
  );

  less(
    ["sophisticatedstorage:upgrade_base", "8x #minecraft:wool"],
    "sophisticatedstorage:advanced_filter_upgrade"
  );

  less(
    ["sophisticatedstorage:upgrade_base", "#tombstone:seeds", "cyclic:trash"],
    "sophisticatedstorage:advanced_void_upgrade"
  );

  less(
    ["sophisticatedstorage:upgrade_base", "minecraft:piston"],
    "sophisticatedstorage:advanced_pickup_upgrade"
  );
  less(
    ["sophisticatedstorage:upgrade_base", "minecraft:ender_pearl"],
    "sophisticatedstorage:magnet_upgrade"
  );
  less(
    ["sophisticatedstorage:magnet_upgrade", "minecraft:ender_pearl"],
    "sophisticatedstorage:advanced_magnet_upgrade"
  );
  less(
    ["#ironberry:tables", "sophisticatedstorage:upgrade_base"],
    "sophisticatedstorage:crafting_upgrade"
  );
  less(
    ["4x sophisticatedstorage:upgrade_base"],
    "sophisticatedstorage:compacting_upgrade"
  );
  less(
    ["4x sophisticatedstorage:compacting_upgrade"],
    "sophisticatedstorage:advanced_compacting_upgrade"
  );

  less(
    [
      "#rootsclassic:berries",
      "sophisticatedstorage:upgrade_base",
      "exoticbirds:hummingbird_feeder",
    ],
    "sophisticatedstorage:advanced_feeding_upgrade"
  );

  less(
    [
      "minecraft:furnace",
      "4x minecraft:hopper",
      "3x #minecraft:wool",
      "sophisticatedstorage:upgrade_base",
    ],
    "sophisticatedstorage:auto_smelting_upgrade"
  );

  less(["4x kubejs:ice_shard"], "minecraft:ice");

  moless("#ars_nouveau:summon_bed", [
    ["ars_nouveau:orange_sbed", "#forge:dyes/orange"],
    ["ars_nouveau:red_sbed", "#forge:dyes/red"],
    ["ars_nouveau:blue_sbed", "#forge:dyes/blue"],
    ["ars_nouveau:green_sbed", "#forge:dyes/green"],
    ["ars_nouveau:yellow_sbed", "#forge:dyes/yellow"],
    ["ars_nouveau:purple_sbed", "#forge:dyes/purple"],
  ]);

  //raw ores and nuggets
  //less(['9x inventorypets:nugget_emerald'],'minecraft:emerald')
  //less(['9x inventorypets:nugget_coal'],'minecraft:coal')
  less(["9x kubejs:raw_copper_nugget"], "minecraft:raw_copper");
  less(["9x kubejs:raw_iron_nugget"], "minecraft:raw_iron");
  less(["9x kubejs:raw_gold_nugget"], "minecraft:raw_gold");

  less(
    ["thermal:compost", "thermal:phytogro", "minecraft:dirt"],
    "4x thermal:phytosoil"
  );
  less(
    [
      "integrateddynamics:logic_director",
      "integrateddynamics:crystalized_menril_block",
      "kubejs:processor",
    ],
    "integrateddynamics:variablestore"
  );

  less(
    [
      "minecraft:mossy_cobblestone",
      "minecraft:paper",
      "rootsclassic:verdant_sprig",
    ],
    "rootsclassic:runic_tablet"
  );

  less(
    ["#ironberry:storage_box", "kubejs:processor", "integrateddynamics:cable"],
    "integratedtunnels:part_interface_item"
  );
  less(
    [
      "integratedtunnels:part_interface_item",
      "kubejs:processor",
      "minecraft:hopper",
    ],
    "integratedtunnels:part_importer_item"
  );
  less(
    [
      "integratedtunnels:part_interface_item",
      "kubejs:processor",
      "uppers:upper",
    ],
    "integratedtunnels:part_exporter_item"
  );
  less(
    [
      "integratedtunnels:part_interface_item",
      "kubejs:processor",
      "thermal:filter_attachment",
    ],
    "integratedtunnels:part_interface_filter_item"
  );

  less(
    ["cyclic:tank", "kubejs:processor", "integrateddynamics:cable"],
    "integratedtunnels:part_interface_fluid"
  );
  less(
    [
      "integratedtunnels:part_interface_fluid",
      "kubejs:processor",
      "minecraft:hopper",
    ],
    "integratedtunnels:part_importer_fluid"
  );
  less(
    [
      "integratedtunnels:part_interface_fluid",
      "kubejs:processor",
      "uppers:upper",
    ],
    "integratedtunnels:part_exporter_fluid"
  );
  less(
    [
      "integratedtunnels:part_interface_fluid",
      "kubejs:processor",
      "thermal:filter_attachment",
    ],
    "integratedtunnels:part_interface_filter_fluid"
  );

  less(
    ["cyclic:battery", "kubejs:processor", "integrateddynamics:cable"],
    "integratedtunnels:part_interface_energy"
  );
  less(
    [
      "integratedtunnels:part_interface_energy",
      "kubejs:processor",
      "minecraft:hopper",
    ],
    "integratedtunnels:part_importer_energy"
  );
  less(
    [
      "integratedtunnels:part_interface_energy",
      "kubejs:processor",
      "uppers:upper",
    ],
    "integratedtunnels:part_exporter_energy"
  );
  less(
    [
      "integratedtunnels:part_interface_energy",
      "kubejs:processor",
      "thermal:filter_attachment",
    ],
    "integratedtunnels:part_interface_filter_energy"
  );

  less(
    [
      "tombstone:voodoo_poppet",
      "alchemygadgetry:iron_supplements",
      "alchemygadgetry:black_tea",
      "rootsclassic:whitecurrant",
    ],
    "alchemygadgetry:air_effigy"
  );
  less(
    [
      "tombstone:voodoo_poppet",
      "alchemygadgetry:vitamins",
      "alchemygadgetry:tonic",
      "rootsclassic:redcurrant",
    ],
    "alchemygadgetry:fire_effigy"
  );
  less(
    [
      "tombstone:voodoo_poppet",
      "alchemygadgetry:elixir",
      "alchemygadgetry:antidote",
      "rootsclassic:elderberry",
    ],
    "alchemygadgetry:water_effigy"
  );
  less(
    [
      "tombstone:voodoo_poppet",
      "alchemygadgetry:eye_drops",
      "alchemygadgetry:salve",
      "rootsclassic:nightshade",
    ],
    "alchemygadgetry:death_effigy"
  );

  less(["2x ars_nouveau:allow_scroll"], "2x ars_nouveau:deny_scroll");
  less(["2x ars_nouveau:deny_scroll"], "2x ars_nouveau:allow_scroll");

  less(
    ["cyclic:trash", "ars_nouveau:blank_parchment"],
    "ars_nouveau:deny_scroll"
  );

  less(
    [
      "pipez:basic_upgrade",
      "sophisticatedstorage:advanced_filter_upgrade",
      "sophisticatedstorage:advanced_filter_upgrade",
    ],
    "8x pipez:gas_pipe"
  );
  less(
    ["pipez:basic_upgrade", "thermal:energy_duct", "thermal:energy_duct"],
    "8x pipez:energy_pipe"
  );
  less(
    ["pipez:basic_upgrade", "minecraft:bucket", "minecraft:bucket"],
    "8x pipez:fluid_pipe"
  );
  less(
    [
      "pipez:basic_upgrade",
      "#ironberry:vanilla_pipe",
      "#ironberry:vanilla_pipe",
    ],
    "8x pipez:item_pipe"
  );

  less(
    [
      "kubejs:quantity_base",
      "minecraft:echo_shard",
      "minecraft:sculk_shrieker",
    ],
    "sculktransporting:quantity_modifier_tier_1"
  );
  less(
    [
      "sculktransporting:quantity_modifier_tier_1",
      "minecraft:echo_shard",
      "minecraft:sculk_shrieker",
    ],
    "sculktransporting:quantity_modifier_tier_2"
  );
  less(
    [
      "sculktransporting:quantity_modifier_tier_2",
      "minecraft:echo_shard",
      "minecraft:sculk_shrieker",
    ],
    "sculktransporting:quantity_modifier_tier_3"
  );
  less(
    ["kubejs:speed_base", "minecraft:echo_shard", "minecraft:sculk_sensor"],
    "sculktransporting:speed_modifier_tier_1"
  );
  less(
    [
      "sculktransporting:speed_modifier_tier_1",
      "minecraft:echo_shard",
      "minecraft:sculk_sensor",
    ],
    "sculktransporting:speed_modifier_tier_2"
  );
  less(
    [
      "sculktransporting:speed_modifier_tier_2",
      "minecraft:echo_shard",
      "minecraft:sculk_sensor",
    ],
    "sculktransporting:speed_modifier_tier_3"
  );
  less(
    [
      "sculktransporting:speed_modifier_tier_3",
      "minecraft:echo_shard",
      "minecraft:sculk_sensor",
    ],
    "sculktransporting:speed_modifier_tier_4"
  );

  less(["9x twilightforest:armor_shard"], "twilightforest:armor_shard_cluster");

  less(
    ["pneumaticcraft:module_expansion_card", "kubejs:printed_plate"],
    "kubejs:assembly_plate"
  );
  less(["minecraft:chest", "minecraft:minecart"], "minecraft:chest_minecart");

  less(
    ["minecraft:hopper", "minecraft:sculk_sensor", "minecraft:echo_shard"],
    "sculktransporting:sculk_emitter"
  );
  less(
    ["essentials:item_chute", "minecraft:sculk", "minecraft:echo_shard"],
    "sculktransporting:sculk_transmitter"
  );
  less(
    ["uppers:upper", "minecraft:sculk_shrieker", "minecraft:echo_shard"],
    "sculktransporting:sculk_receiver"
  );
  less(
    ["minecraft:barrel", "minecraft:echo_shard", "minecraft:echo_shard"],
    "sculktransporting:sculk_barrel"
  );
  less(["minecraft:string", "quark:bottled_cloud"], "4x cyclic:cloud");
  less(["#ironberry:storage_box", "#ironberry:storage_box"], "cyclic:crate");
  less(
    ["ars_nouveau:stable_warp_scroll", "minecraft:redstone", "cyclic:battery"],
    "cyclic:teleport"
  );

  less(["minecraft:charcoal", "minecraft:paper"], "2x cyclic:carbon_paper");
  less(
    ["minecraft:barrel", "minecraft:string", "cyclic:ender_fishing"],
    "cyclic:fisher"
  );

  less(
    ["pneumaticcraft:upgrade_matrix", "2x minecraft:lever"],
    "pneumaticcraft:security_upgrade"
  );
  less(
    [
      "pneumaticcraft:upgrade_matrix",
      "8x pneumaticcraft:reinforced_pressure_tube",
    ],
    "pneumaticcraft:volume_upgrade"
  );
  less(
    ["pneumaticcraft:upgrade_matrix", "4x bluepower:tungsten_carbide"],
    "pneumaticcraft:speed_upgrade"
  );
  less(
    ["4x pneumaticcraft:reinforced_pressure_tube"],
    "pneumaticcraft:tube_junction"
  );

  less(["2x pneumaticcraft:small_tank"], "pneumaticcraft:medium_tank");
  less(["2x pneumaticcraft:medium_tank"], "pneumaticcraft:large_tank");
  less(["4x pneumaticcraft:large_tank"], "pneumaticcraft:huge_tank");

  less(["4x pneumaticcraft:small_tank"], "pneumaticcraft:large_tank");
  less(["8x pneumaticcraft:medium_tank"], "pneumaticcraft:huge_tank");

  less(
    [
      "pneumaticcraft:upgrade_matrix",
      "sophisticatedstorage:advanced_hopper_upgrade",
    ],
    "pneumaticcraft:dispenser_upgrade"
  );
  less(
    ["pneumaticcraft:upgrade_matrix", "essentials:item_chute"],
    "pneumaticcraft:range_upgrade"
  );
  less(
    [
      "pneumaticcraft:upgrade_matrix",
      "sophisticatedstorage:advanced_magnet_upgrade",
    ],
    "pneumaticcraft:magnet_upgrade"
  );
  less(
    ["pneumaticcraft:ingot_iron_compressed", "minecraft:chest"],
    "pneumaticcraft:reinforced_chest"
  );

  less(
    [
      "pneumaticcraft:upgrade_matrix",
      "pneumaticcraft:upgrade_matrix",
      "pneumaticcraft:reinforced_chest",
      "pneumaticcraft:upgrade_matrix",
      "pneumaticcraft:upgrade_matrix",
    ],
    "pneumaticcraft:smart_chest"
  );

  //less([],)

  moless("pneumaticcraft:upgrade_matrix", [
    ["pneumaticcraft:ender_visor_upgrade", "minecraft:carved_pumpkin"],
    ["pneumaticcraft:gilded_upgrade", "minecraft:gold_ingot"],
    ["pneumaticcraft:stomp_upgrade", "#minecraft:wool"],
    ["pneumaticcraft:elytra_upgrade", "minecraft:elytra"],
    ["pneumaticcraft:flippers_upgrade", "thermal:diving_boots"],
    ["pneumaticcraft:radiation_shielding_upgrade", "inventorypets:pet_shield"],
    ["pneumaticcraft:scuba_upgrade", "homespun:fluid_storage"],
    ["pneumaticcraft:night_vision_upgrade", "cyclic:apple_lapis"],
    ["pneumaticcraft:armor_upgrade", "jetboots:armor_core"],
    ["pneumaticcraft:charging_upgrade", "pneumaticcraft:charging_module"],
    ["pneumaticcraft:search_upgrade", "tombstone:tablet_of_cupidity"],
    ["pneumaticcraft:coordinate_tracker_upgrade", "minecraft:clock"],
    ["pneumaticcraft:block_tracker_upgrade", "minecraft:recovery_compass"],
    ["pneumaticcraft:item_life_upgrade", "cyclic:apple_diamond"],
    ["pneumaticcraft:entity_tracker_upgrade", "minecraft:compass"],
  ]);

  emolimix("jetboots:rocket_boots", [
    "pneumaticcraft:upgrade_matrix",
    "pneumaticcraft:jet_boots_upgrade_1",
    "pneumaticcraft:jet_boots_upgrade_2",
    "pneumaticcraft:jet_boots_upgrade_3",
    "pneumaticcraft:jet_boots_upgrade_4",
    "pneumaticcraft:jet_boots_upgrade_5",
  ]);
  emolimix("ars_nouveau:jump_ring", [
    "pneumaticcraft:upgrade_matrix",
    "pneumaticcraft:jumping_upgrade_1",
    "pneumaticcraft:jumping_upgrade_2",
    "pneumaticcraft:jumping_upgrade_3",
    "pneumaticcraft:jumping_upgrade_4",
  ]);

  moless("cyclic:apple_sprout", [
    ["cyclic:apple_sprout_emerald", "minecraft:emerald"],
    ["cyclic:apple_sprout_diamond", "minecraft:diamond"],
  ]);

  moless("minecraft:enchanted_golden_apple", [
    ["cyclic:apple_bone", "minecraft:bone_meal"],
    ["cyclic:apple_iron", "minecraft:iron_ingot"],
    ["cyclic:apple_lapis", "minecraft:lapis_lazuli"],
    ["cyclic:apple_chocolate", "minecraft:cocoa_beans"],
    ["cyclic:apple_prismarine", "minecraft:prismarine_shard"],
    ["cyclic:apple_chorus", "minecraft:chorus_fruit"],
  ]);

  less(
    ["minecraft:enchanted_golden_apple", "minecraft:enchanted_golden_apple"],
    "2x cyclic:apple_sprout"
  );
  less(
    ["ars_nouveau:starbuncle_shards", "twilightforest:borer_essence"],
    "ars_nouveau:starbuncle_charm"
  );

  less(
    ["farmersdelight:fried_egg", "minecraft:bread", "farmersdelight:fried_egg"],
    "farmersdelight:egg_sandwich"
  );
  less(
    [
      "minecraft:bread",
      "#ironberry:birds_cooked",
      "farmersdelight:cabbage_leaf",
    ],
    "farmersdelight:chicken_sandwich"
  );
  less(
    [
      "minecraft:bread",
      "twilightforest:cooked_meef",
      "farmersdelight:cabbage",
      "farmersdelight:tomato",
    ],
    "farmersdelight:hamburger"
  );
  less(
    ["minecraft:honey_bottle", "minecraft:slime_ball"],
    "2x minecraft:honey_bottle"
  );

  less(
    ["#ironberry:tables", "#ironberry:storage_box"],
    "bluepower:project_table"
  );

  less(
    [
      "homespun:copper_nugget",
      "homespun:copper_nugget",
      "homespun:copper_nugget",
      "homespun:copper_nugget",
      "homespun:copper_nugget",
      "homespun:copper_nugget",
      "homespun:copper_nugget",
      "homespun:copper_nugget",
      "homespun:copper_nugget",
    ],
    "minecraft:copper_ingot"
  );

  less(
    [
      "thermal:bitumen",
      "thermal:bitumen",
      "thermal:bitumen",
      "thermal:bitumen",
      "thermal:bitumen",
      "thermal:bitumen",
      "thermal:bitumen",
      "thermal:bitumen",
      "thermal:bitumen",
    ],
    "thermal:bitumen_block"
  );

  less(["thermal:bitumen_block"], "9x thermal:bitumen");

  //less(['kubejs:acid_bucket'],'reactive:acid_bucket')

  less(
    ["rootsclassic:verdant_sprig", "minecraft:lime_stained_glass"],
    "cyclic:terra_glass"
  );

  less(["mekanism:block_steel"], "9x mekanism:ingot_steel");
  less(
    [
      "mekanism:ingot_steel",
      "mekanism:ingot_steel",
      "mekanism:ingot_steel",
      "mekanism:ingot_steel",
      "mekanism:ingot_steel",
      "mekanism:ingot_steel",
      "mekanism:ingot_steel",
      "mekanism:ingot_steel",
      "mekanism:ingot_steel",
    ],
    "mekanism:block_steel",
    1
  );

  less(
    ["mekanism:basic_logistical_transporter", "minecraft:repeater"],
    "mekanism:restrictive_transporter"
  );
  less(
    ["mekanism:basic_logistical_transporter", "minecraft:redstone_torch"],
    "mekanism:diversion_transporter"
  );
  less(["minecraft:copper_block"], "9x minecraft:copper_ingot");
  less(["ppfluids:fluid_pipe"], "prettypipes:pipe");
  less(["minecraft:raw_iron_block"], "9x minecraft:raw_iron");
  less(
    ["bluepower:solar_panel", "minecraft:quartz", "bluepower:red_alloy_ingot"],
    "2x engineersdecor:small_solar_panel"
  );
  less(
    ["minecraft:observer", "minecraft:quartz", "bluepower:red_alloy_ingot"],
    "2x engineersdecor:small_block_breaker"
  );

  function aug_tec(io) {
    less(["kubejs:base_augment", io[0]], io[1]);
  }

  aug_tec(["ten3:chlorium_dust", "ten3:photosyn_levelup"]);
  aug_tec(["minecraft:mojang_banner_pattern", "ten3:knowledge_levelup"]);
  aug_tec(["thermal:area_radius_augment", "ten3:range_levelup"]);
  aug_tec(["integrateddynamics:energy_battery", "ten3:stream_levelup"]);

  function aug_upgrade(io) {
    less(["minecraft:repeater", "bluepower:lumar_yellow", io[0]], io[1]);
  }

  aug_upgrade(["ten3:photosyn_levelup", "ten3:augmented_levelup"]);
  aug_upgrade(["ten3:augmented_levelup", "ten3:powered_levelup"]);
  aug_upgrade(["ten3:powered_levelup", "ten3:relic_levelup"]);

  less(["rftoolsutility:matter_transmitter"], "rftoolsutility:matter_receiver");
  less(["rftoolsutility:matter_receiver"], "rftoolsutility:matter_transmitter");

  less(
    [
      "#ironberry:te_filter",
      "#ironberry:te_filter",
      "#ironberry:te_filter",
      "#ironberry:te_filter",
      "#ironberry:te_filter",
      "#ironberry:te_filter",
      "#ironberry:te_filter",
      "#ironberry:te_filter",
      "#ironberry:te_filter",
    ],
    "rftoolsbase:filter_module"
  );

  less(
    [
      "rftoolsbase:machine_frame",
      "cyclic:crafter",
      "rftoolsbase:crafting_card",
    ],
    "rftoolsutility:crafter1"
  );
  less(
    [
      "rftoolsutility:crafter1",
      "rftoolsbase:crafting_card",
      "rftoolsbase:crafting_card",
    ],
    "rftoolsutility:crafter2"
  );
  less(
    [
      "rftoolsutility:crafter2",
      "rftoolsbase:crafting_card",
      "rftoolsbase:crafting_card",
    ],
    "rftoolsutility:crafter3"
  );
  less(
    [
      "rftoolsbase:machine_frame",
      "rftoolsbase:dimensionalshard",
      "bluepower:lumar_red",
      "bluepower:lumar_green",
      "bluepower:lumar_blue",
    ],
    "rftoolsbase:machine_infuser"
  );
  less(
    ["rftoolsbase:machine_frame", "rftoolsbase:infused_enderpearl"],
    "rftoolsutility:dialing_device"
  );

  less(
    ["minecraft:bone_meal", "bluepower:lumar_white", "bluepower:lumar_white"],
    "kubejs:floreal_bone_meal"
  );

  event
    .shapeless("3x reactive:acid_bottle", [
      "kubejs:acid_bucket",
      "reactive:quartz_bottle",
      "reactive:quartz_bottle",
      "reactive:quartz_bottle",
    ])
    .replaceIngredient({ item: "kubejs:acid_bucket" }, "minecraft:bucket");

  event.shapeless(
    Item.of(
      "supplementaries:urn",
      '{BlockStateTag:{treasure:"true"},display:{Lore:[\'{"text":"contain one of $urn_loot"}\']}}'
    ),
    ["supplementaries:urn"]
  );

  less(
    ["#ae2:quartz_wrench", "luggage:luggage", "ae2:certus_quartz_crystal"],
    "ae2:network_tool"
  );

  /**
   *
   * @param {item|object} nugget when object can replace ingot
   * @param {item} ingot
   */
  function nine_to_one(nugget, ingot) {
    if (typeof ingot == "undefined") {
      less(["9x " + nugget[0]], nugget[1]);
      less([nugget[1]], "9x " + nugget[0]);
    } else {
      less(["9x " + nugget], ingot);
      less([ingot], "9x " + nugget);
    }
  }

  less("nuclearcraft:magnesium_ingot", "nuclearcraft:magnesium_block");
  less("nuclearcraft:boron_ingot", "nuclearcraft:boron_block");
  nine_to_one("nuclearcraft:lithium_ingot", "nuclearcraft:lithium_block");
  nine_to_one("nuclearcraft:thorium_ingot", "nuclearcraft:thorium_block");
  nine_to_one([
    "thoriumreactors:molybdenum_nugget",
    "thoriumreactors:molybdenum_ingot",
  ]);
  nine_to_one(["thoriumreactors:niob_nugget", "thoriumreactors:niob_ingot"]);
  nine_to_one([
    "thoriumreactors:titanium_nugget",
    "thoriumreactors:titanium_ingot",
  ]);
  nine_to_one([
    "thoriumreactors:chromium_nugget",
    "thoriumreactors:chromium_ingot",
  ]);
  nine_to_one(["thermal:nickel_nugget", "thermal:nickel_ingot"]);
  nine_to_one([
    "thoriumreactors:molybdenum_ingot",
    "thoriumreactors:molybdenum_block",
  ]);
  nine_to_one(["thoriumreactors:niob_ingot", "thoriumreactors:niob_block"]);
  nine_to_one(["thermal:nickel_ingot", "thoriumreactors:nickel_block"]);
  nine_to_one(["thermal:netherite_nugget", "minecraft:netherite_ingot"]);
  nine_to_one("inventorypets:nugget_coal", "minecraft:coal");
  less(
    [
      "rftoolsbase:crafting_card",
      "bluepower:motor",
      "cyclic:carbon_paper",
      "integrateddynamics:variable",
    ],
    "16x ae2:basic_card"
  );
  less(
    [
      "rftoolsbase:crafting_card",
      "bluepower:motor",
      "cyclic:carbon_paper",
      "pneumaticcraft:module_expansion_card",
    ],
    "16x ae2:advanced_card"
  );
  nine_to_one([
    "thoriumreactors:blasted_iron_nugget",
    "thoriumreactors:blasted_iron_ingot",
  ]);

  less(["luggage:ender_luggage", "minecraft:bundle"], "cyclic:ender_bag");

  nine_to_one(["create:andesite_alloy", "create:andesite_alloy_block"]);
  nine_to_one(["create:brass_nugget", "create:brass_ingot"]);
  nine_to_one(["create:brass_ingot", "create:brass_block"]);
  nine_to_one(["create:zinc_nugget", "create:zinc_ingot"]);
  nine_to_one(["create:zinc_ingot", "create:zinc_block"]);

  global.recipes.vanilla_rocks.forEach((item) => {
    global.recipes.variants.forEach((type) => {
      if (type.endsWith("_slab")) {
        if (type.replace("#TYPE#", item).endsWith("brick_slab"))
          less(
            [type.replace("#TYPE#", item)],
            type
              .replace("#TYPE#", item)
              .replace("_slab", "s")
              .replace("2x ", "")
          );
        else
          less(
            [type.replace("#TYPE#", item)],
            type.replace("#TYPE#", item).replace("_slab", "").replace("2x ", "")
          );
      }
    });
  });

  global.recipes.create_rocks.forEach((item) => {
    global.recipes.variants.forEach((type) => {
      if (type.endsWith("_slab")) {
        if (type.replace("#TYPE#", item).endsWith("brick_slab"))
          less(
            [type.replace("#TYPE#", item)],
            type
              .replace("#TYPE#", item)
              .replace("_slab", "s")
              .replace("2x ", "")
          );
        else
          less(
            [type.replace("#TYPE#", item)],
            type.replace("#TYPE#", item).replace("_slab", "").replace("2x ", "")
          );
      }
    });
  });

  less(["#ironberry:te_filter", "create:andesite_alloy"], "4x create:filter");
  less(
    ["#ironberry:te_filter", "create:brass_ingot"],
    "4x create:attribute_filter"
  );
  less(["minecraft:paper", "create:filter"], "create:clipboard");
  less(
    ["create:rose_quartz_block", "minecraft:redstone"],
    "create:rose_quartz_lamp"
  );

  global.recipes.woods.forEach((wood) => {
    less(
      ["minecraft:glass", "minecraft:" + wood + "_planks"],
      "2x create:" + wood + "_window"
    );
  });

  less(
    ["minecraft:glass", "create:andesite_alloy"],
    "create:ornate_iron_window"
  );

  less(
    ["essentials:multi_piston", "create:andesite_casing"],
    "create:mechanical_piston"
  );

  less(
    ["essentials:multi_piston_sticky", "create:andesite_casing"],
    "create:sticky_mechanical_piston"
  );

  less(
    [
      "create:electron_tube",
      "create:sticky_mechanical_piston",
      "create:andesite_casing",
    ],
    "create:mechanical_bearing"
  );

  less(
    ["create:mechanical_piston", "#ironberry:sticky"],
    "create:sticky_mechanical_piston"
  );

  less(
    [
      "create:precision_mechanism",
      "create:sticky_mechanical_piston",
      "create:brass_casing",
    ],
    "create:clockwork_bearing"
  );

  less(
    ["create:shaft", "#minecraft:planks", "minecraft:redstone"],
    "4x create:gantry_shaft"
  );

  less(
    [
      "#quark:wooden_vertical_slabs",
      "bluepower:lumar_black",
      "bluepower:lumar_black",
    ],
    "supplementaries:blackboard"
  );

  less(
    ["supplementaries:blackboard", "create:cogwheel"],
    "create:display_board"
  );

  less(
    [
      "create:brass_casing",
      "minecraft:sculk_sensor",
      "create:precision_mechanism",
    ],
    "create:display_link"
  );

  less(
    [
      "create:metal_girder",
      "minecraft:item_frame",
      "supplementaries:timber_frame",
    ],
    "create:placard"
  );

  less(
    ["create:metal_girder", "supplementaries:timber_frame"],
    "4x create:metal_bracket"
  );

  less(
    ["minecraft:oak_planks", "supplementaries:timber_frame"],
    "4x create:wooden_bracket"
  );

  less(
    [
      "create:depot",
      "create:precision_mechanism",
      "create:cogwheel",
      "minecraft:redstone",
    ],
    "create:weighted_ejector"
  );

  less(
    [
      "supplementaries:pulley_block",
      "create:andesite_casing",
      "create:belt_connector",
    ],
    "create:rope_pulley"
  );

  less(
    [
      "create:rope_pulley",
      "create:railway_casing",
      "create:belt_connector",
      "create:precision_mechanism",
    ],
    "create:elevator_pulley"
  );

  less(
    [
      "create:adjustable_chain_gearshift",
      "create:clutch",
      "create:gearshift",
      "create:brass_casing",
      "create:precision_mechanism",
    ],
    "create:sequenced_gearshift"
  );

  less(
    [
      "create:electron_tube",
      "create:sequenced_gearshift",
      "create:precision_mechanism",
      "create:cogwheel",
    ],
    "create:mechanical_arm"
  );

  less(["4x farmersdelight:wheat_dough"], "createaddition:cake_base");

  less(
    [
      "bluepower:engine",
      "create:brass_casing",
      "create:shaft",
      "create:copper_casing",
    ],
    "createaddition:electric_motor"
  );

  less(["bluepower:silicon_wafer"], "4x logicchips:chip");

  less(["logicchips:chip", "minecraft:redstone_torch"], "logicchips:not_gate");

  less(
    ["logicchips:not_gate", "minecraft:redstone_torch"],
    "logicchips:or_gate"
  );

  less(
    ["logicchips:or_gate", "minecraft:redstone_torch"],
    "logicchips:nor_gate"
  );

  less(
    [
      "minecraft:redstone_torch",
      "logicchips:nor_gate",
      "minecraft:redstone_torch",
    ],
    "logicchips:and_gate"
  );

  less(
    ["minecraft:redstone_torch", "logicchips:and_gate"],
    "logicchips:nand_gate"
  );

  less(
    [
      "logicchips:or_gate",
      "logicchips:and_gate",
      "logicchips:and_gate",
      "logicchips:not_gate",
      "logicchips:not_gate",
    ],
    "logicchips:xor_gate"
  );

  less(
    ["logicchips:xor_gate", "minecraft:redstone_torch"],
    "logicchips:xnor_gate"
  );

  let gates = [
    "logicchips:or_gate",
    "logicchips:nor_gate",
    "logicchips:and_gate",
    "logicchips:nand_gate",
    "logicchips:xor_gate",
    "logicchips:xnor_gate",
  ];

  gates.forEach((lg) => {
    less([lg, "logicchips:chip", "minecraft:repeater"], lg + "_3");
  });

  less(
    ["logicchips:or_gate_3", "minecraft:redstone_torch"],
    "logicchips:nor_gate_3"
  );

  less(
    [
      "minecraft:redstone_torch",
      "logicchips:nor_gate_3",
      "minecraft:redstone_torch",
    ],
    "logicchips:and_gate_3"
  );

  less(
    ["minecraft:redstone_torch", "logicchips:and_gate_3"],
    "logicchips:nand_gate_3"
  );

  less(
    [
      "logicchips:or_gate_3",
      "logicchips:and_gate_3",
      "logicchips:and_gate_3",
      "logicchips:not_gate",
      "logicchips:not_gate",
    ],
    "logicchips:xor_gate_3"
  );

  less(
    ["logicchips:xor_gate_3", "minecraft:redstone_torch"],
    "logicchips:xnor_gate_3"
  );

  nine_to_one("thermal:tin_ingot", "thermal:tin_block");
  nine_to_one("mekanism:ingot_uranium", "mekanism:block_uranium");

  less(
    [
      "kubejs:tiny_platinum_dust",
      "kubejs:tiny_platinum_dust",
      "kubejs:tiny_platinum_dust",
      "kubejs:tiny_platinum_dust",
    ],
    "ten3:tin_dust"
  );

  less(
    ["ars_nouveau:enchanters_eye"],
    Item.of(
      "ars_nouveau:enchanters_eye",
      '{"ars_nouveau:caster":{current_slot:0,flavor:"",hidden_recipe:"",is_hidden:0b,spell_count:1,spells:{spell0:{name:"",recipe:{part0:"ars_nouveau:glyph_touch",part1:"ars_nouveau:glyph_interact",size:2},sound:{pitch:1.0f,soundTag:{id:"ars_nouveau:fire_family"},volume:1.0f},spellColor:{b:180,g:25,r:255,type:"ars_nouveau:constant"}}}}}'
    )
  );

  event
    .shapeless("4x kubejs:redstone_circuit", [
      "homespun:redstone_acid",
      "pneumaticcraft:printed_circuit_board",
      "pneumaticcraft:printed_circuit_board",
      "pneumaticcraft:printed_circuit_board",
      "pneumaticcraft:printed_circuit_board",
    ])
    .replaceIngredient("homespun:redstone_acid", "minecraft:glass_bottle");

  function blockAndCo(block, ingot, nugget) {
    nine_to_one(ingot, block);
    nine_to_one(nugget, ingot);
  }

  blockAndCo(
    "thermal:invar_block",
    "thermal:invar_ingot",
    "thermal:invar_nugget"
  );

  nine_to_one("kubejs:manganese_nugget", "nuclearcraft:manganese_ingot");

  blockAndCo(
    "thermal:constantan_block",
    "thermal:constantan_ingot",
    "thermal:constantan_nugget"
  );

  less(
    [
      "ae2:inscriber",
      "ae2:advanced_card",
      "ae2:advanced_card",
      "pneumaticcraft:module_expansion_card",
    ],
    "ae2things:advanced_inscriber"
  );

  function makeDisk(items, output) {
    items.unshift("#ironberry:infinity_cells");
    event.shapeless(
      Item.of(
        "expatternprovider:infinity_cell",
        '{record:{"#c":"ae2:i",id:"' + output + '"}}'
      ),
      items
    );
  }

  event
    .shapeless(
      Item.of(
        "expatternprovider:infinity_cell",
        '{record:{"#c":"ae2:f",id:"pneumaticcraft:ethanol"}}'
      ),
      [
        "#ironberry:infinity_cells",
        Item.of(
          "pneumaticcraft:huge_tank",
          '{BlockEntityTag:{SavedTanks:{Tank:{Amount:512000,FluidName:"pneumaticcraft:ethanol"}}}}'
        ).strongNBT(),
      ]
    )
    .replaceIngredient("pneumaticcraft:huge_tank", "pneumaticcraft:huge_tank");

  event
    .shapeless(
      Item.of(
        "expatternprovider:infinity_cell",
        '{record:{"#c":"ae2:f",id:"pneumaticcraft:biodiesel"}}'
      ),
      [
        "#ironberry:infinity_cells",
        Item.of(
          "pneumaticcraft:huge_tank",
          '{BlockEntityTag:{SavedTanks:{Tank:{Amount:512000,FluidName:"pneumaticcraft:biodiesel"}}}}'
        ).strongNBT(),
      ]
    )
    .replaceIngredient("pneumaticcraft:huge_tank", "pneumaticcraft:huge_tank");

  event.shapeless(
    Item.of(
      "expatternprovider:infinity_cell",
      '{record:{"#c":"ae2:f",id:"minecraft:water"}}'
    ),
    ["#ironberry:infinity_cells", "thoriumreactors:water_source_block"]
  );

  let bs = [
    "minecraft:cobblestone",
    "minecraft:gravel",
    "minecraft:dirt",
    "minecraft:sand",
    "minecraft:stone",
  ];
  let cbs = [
    "compressium:cobblestone_6",
    "compressium:gravel_6",
    "compressium:dirt_6",
    "compressium:sand_6",
    "compressium:stone_6",
  ];

  cbs.forEach((element, index) => {
    makeDisk([element], bs[index]);
  });

  blockAndCo(
    "thermal:enderium_block",
    "thermal:enderium_ingot",
    "thermal:enderium_nugget"
  );

  less(["thoriumreactors:enriched_uranium"], "16x kubejs:mini_pellet");

  blockAndCo("ten3:tin_block", "ten3:tin_ingot", "ten3:tin_nugget");
  blockAndCo(
    "ten3:powered_tin_block",
    "ten3:powered_tin_ingot",
    "ten3:powered_tin_nugget"
  );

  less(
    [
      "ae2:engineering_processor",
      "cyclic:battery",
      "cyclic:battery",
      "cyclic:battery",
      "cyclic:battery",
    ],
    "ae2:energy_cell"
  );

  less(
    [
      "ae2:interface",
      "integratedtunnels:part_interface_filter_energy",
      "integratedtunnels:part_interface_filter_item",
      "integratedtunnels:part_interface_filter_fluid",
      "rftoolsbase:filter_module",
    ],
    "ae2:storage_bus"
  );

  less(
    [
      "ae2:interface",
      "integratedtunnels:part_importer_energy",
      "integratedtunnels:part_importer_item",
      "integratedtunnels:part_importer_fluid",
      "ten3:powered_tin_ingot",
    ],
    "ae2:import_bus"
  );
  less(
    [
      "ae2:interface",
      "integratedtunnels:part_exporter_energy",
      "integratedtunnels:part_exporter_item",
      "integratedtunnels:part_exporter_fluid",
      "ten3:powered_tin_ingot",
    ],
    "ae2:export_bus"
  );

  less(
    [
      "ae2:interface",
      "ae2:fluix_pearl",
      "ae2:engineering_processor",
      "ae2:sky_dust",
      "engineersdecor:small_block_breaker",
      "bluepower:block_breaker",
      "create:mechanical_drill",
    ],
    "ae2:annihilation_plane"
  );

  less(
    [
      "ae2:interface",
      "ae2:fluix_pearl",
      "ae2:engineering_processor",
      "ae2:sky_dust",
      "engineersdecor:factory_placer",
      "create:deployer",
      "bluepower:deployer",
    ],
    "ae2:formation_plane"
  );

  less(
    [
      "kubejs:base_module",
      "ae2:speed_card",
      "ae2:speed_card",
      "ae2:equal_distribution_card",
    ],
    "expatternprovider:io_bus_upgrade"
  );

  less(
    ["expatternprovider:io_bus_upgrade", "ae2:export_bus"],
    "expatternprovider:ex_export_bus_part"
  );
  less(
    ["expatternprovider:io_bus_upgrade", "ae2:import_bus"],
    "expatternprovider:ex_import_bus_part"
  );

  less(
    [
      "kubejs:base_module",
      "pneumaticcraft:module_expansion_card",
      "ae2:capacity_card",
      "ae2:speed_card",
    ],
    "expatternprovider:interface_upgrade"
  );

  less(
    ["expatternprovider:pattern_provider_upgrade"],
    "expatternprovider:interface_upgrade"
  );
  less(
    ["expatternprovider:interface_upgrade"],
    "expatternprovider:pattern_provider_upgrade"
  );

  less(
    ["sophisticatedstorage:packing_tape", "ae2:fluix_crystal"],
    "expatternprovider:me_packing_tape"
  );

  less(
    ["pneumaticcraft:small_tank", "kubejs:redstone_circuit"],
    "kubejs:base_tank"
  );

  let tanks = [
    "mekanism:basic_chemical_tank",
    "mekanism:advanced_chemical_tank",
    "mekanism:elite_chemical_tank",
    "mekanism:ultimate_chemical_tank",
  ];
  let circ = [
    "mekanism:basic_control_circuit",
    "mekanism:advanced_control_circuit",
    "mekanism:elite_control_circuit",
    "mekanism:ultimate_control_circuit",
  ];

  circ.forEach((element, index) => {
    less(["kubejs:base_tank", element], tanks[index]);
  });

  less(
    [
      "thermal:machine_frame",
      "pneumaticcraft:small_tank",
      "ars_nouveau:repository",
      "kubejs:base_tank",
    ],
    "ae2:drive"
  );
  less(
    [
      "kubejs:base_module",
      "pneumaticcraft:small_tank",
      "ars_nouveau:repository",
      "kubejs:base_tank",
    ],
    "expatternprovider:drive_upgrade"
  );

  less(
    ["ae2:drive", "expatternprovider:drive_upgrade"],
    "expatternprovider:ex_drive"
  );

  let cpu = [
    "ae2:1k_crafting_storage",
    "ae2:4k_crafting_storage",
    "ae2:16k_crafting_storage",
    "ae2:64k_crafting_storage",
    "ae2:256k_crafting_storage",
  ];

  let store = [
    "ae2:cell_component_1k",
    "ae2:cell_component_4k",
    "ae2:cell_component_16k",
    "ae2:cell_component_64k",
    "ae2:cell_component_256k",
  ];

  store.forEach((element, index) => {
    less(["ae2:crafting_unit", element], cpu[index]);
  });

  less(
    ["kubejs:redstone_circuit", "ae2:basic_card", "ae2:redstone_card"],
    "ae2:biometric_card"
  );
  less(
    ["kubejs:redstone_circuit", "ae2:basic_card", "ae2:capacity_card"],
    "ae2:memory_card"
  );

  less(
    ["ae2:wireless_receiver", "ae2:charged_certus_quartz_crystal"],
    "expatternprovider:wireless_tool"
  );

  less(["ae2:chest", "ae2:io_port"], "ae2:security_station");

  less(
    ["ae2:wireless_terminal", "ae2:semi_dark_monitor"],
    "ae2wtlib:wireless_universal_terminal"
  );

  less(
    ["ae2:molecular_assembler", "ae2:crafting_terminal", "ae2:crafting_unit"],
    "merequester:requester"
  );

  less(
    ["simplemagnets:basicmagnet", "ae2:advanced_card"],
    "ae2wtlib:magnet_card"
  );

  less(
    ["ae2:basic_card", "ae2:fluix_pearl", "ae2:advanced_card"],
    "ae2wtlib:quantum_bridge_card"
  );

  less(
    ["ae2:basic_card", "thermal:ender_pearl_dust", "ae2:sky_dust"],
    "ae2:wireless_booster"
  );

  less(["ten3:chlorium_ingot", "ae2:blank_pattern"], "ae2:view_cell");

  let itemcell = [
    "ae2:item_storage_cell_1k",
    "ae2:item_storage_cell_4k",
    "ae2:item_storage_cell_16k",
    "ae2:item_storage_cell_64k",
    "ae2:item_storage_cell_256k",
  ];
  let fluidcell = [
    "ae2:fluid_storage_cell_1k",
    "ae2:fluid_storage_cell_4k",
    "ae2:fluid_storage_cell_16k",
    "ae2:fluid_storage_cell_64k",
    "ae2:fluid_storage_cell_256k",
  ];
  let gascell = [
    "appmek:chemical_storage_cell_1k",
    "appmek:chemical_storage_cell_4k",
    "appmek:chemical_storage_cell_16k",
    "appmek:chemical_storage_cell_64k",
    "appmek:chemical_storage_cell_256k",
  ];
  let manacell = [
    "arseng:source_storage_cell_1k",
    "arseng:source_storage_cell_4k",
    "arseng:source_storage_cell_16k",
    "arseng:source_storage_cell_64k",
    "arseng:source_storage_cell_256k",
  ];
  let deepcell = [
    "ae2things:disk_drive_1k",
    "ae2things:disk_drive_4k",
    "ae2things:disk_drive_16k",
    "ae2things:disk_drive_64k",
    "ae2things:disk_drive_256k",
  ];

  store.forEach((element, index) => {
    less(["ae2:item_cell_housing", element], itemcell[index]);
    less(["ae2things:disk_housing", element], deepcell[index]);
    less(["arseng:source_cell_housing", element], manacell[index]);
    less(["appmek:chemical_cell_housing", element], gascell[index]);
    less(["ae2:fluid_cell_housing", element], fluidcell[index]);
  });

  less(
    ["ae2:pattern_provider", "expatternprovider:pattern_provider_upgrade"],
    "expatternprovider:ex_pattern_provider"
  );
  less(
    ["ae2:interface", "expatternprovider:interface_upgrade"],
    "expatternprovider:ex_interface"
  );


less(['9x bluepower:tungsten_ingot' ],'bluepower:tungsten_block')

});
