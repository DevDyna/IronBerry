StartupEvents.postInit((event) => {
  let $MysteriousItemConversionCategory = Java.loadClass(
    "com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory"
  );
  let $ConversionRecipe = Java.loadClass(
    "com.simibubi.create.compat.jei.ConversionRecipe"
  );

  /**
   *
   * @param {item|item[]} input
   * @param {item[]} output optional
   */
  function myst(input, output) {
    output.forEach((element) => {
      $MysteriousItemConversionCategory.RECIPES.add(
        $ConversionRecipe.create(input, element)
      );
    });
  }

  myst(global.fish_food, global.fishing);
  //myst(global.fish_food[1], global.fishing[0]);

  // myst(global.fish_food[2], global.fishing[1]);
  // myst(global.fish_food[3], global.fishing[2]);

  myst(global.fish_food, [
    "minecraft:leather_boots",
    "minecraft:fishing_rod",
    "minecraft:enchanted_book",
  ]);

  myst("kubejs:ore_bone_meal", [
    "minecraft:deepslate_gold_ore",
    "minecraft:deepslate_emerald_ore",
    "minecraft:deepslate_copper_ore",
    "minecraft:deepslate_iron_ore",
    "minecraft:deepslate_coal_ore",
    "minecraft:deepslate_redstone_ore",
  ]);
  myst("kubejs:rich_bone_meal", [
    "farmersdelight:wild_potatoes",
    "farmersdelight:wild_beetroots",
    "farmersdelight:brown_mushroom_colony",
    "farmersdelight:red_mushroom_colony",
    "supplementaries:wild_flax",
    "farmersdelight:wild_carrots",
    "farmersdelight:wild_tomatoes",
    "farmersdelight:wild_onions",
    "farmersdelight:wild_cabbages",
  ]);
  myst("kubejs:floreal_bone_meal", [
    "minecraft:blue_orchid",
    "minecraft:poppy",
    "minecraft:azure_bluet",
    "minecraft:orange_tulip",
    "minecraft:red_tulip",
    "minecraft:pink_tulip",
    "minecraft:lily_of_the_valley",
    "minecraft:cornflower",
    "minecraft:white_tulip",
    "minecraft:oxeye_daisy",
    "minecraft:allium",
    "minecraft:dandelion",
  ]);
  myst("rootsclassic:grower_standing_stone", ["minecraft:lily_pad"]);
  myst("minecraft:red_sand", [
    "minecraft:nautilus_shell",
    "minecraft:lily_pad",
    "minecraft:gold_nugget",
  ]);
  myst("supplementaries:ash", ["minecraft:gold_nugget"]);
  myst("tombstone:bag_of_seeds", [
    "thermal:tomato_seeds",
    "thermal:onion_seeds",
    "farmersdelight:cabbage_seeds",
    "minecraft:pumpkin_seeds",
    "minecraft:melon_seeds",
    "thermal:coffee_seeds",
    "thermal:tea_seeds",
    "supplementaries:flax_seeds",
    "thermal:rice_seeds",
    "thermal:barley_seeds",
    "thermal:corn_seeds",
    "minecraft:beetroot_seeds",
    "minecraft:cocoa_beans",
    "thermal:eggplant_seeds",
    "thermal:peanut_seeds",
    "thermal:hops_seeds",
    "farmersdelight:rice",
    "thermal:frost_melon_seeds",
    "thermal:green_bean_seeds",
    "thermal:bell_pepper_seeds",
    "thermal:sadiroot_seeds",
    "minecraft:wheat_seeds",
    "thermal:radish_seeds",
    "twilightforest:magic_beans",
    "ars_nouveau:magebloom_crop",
    "thermal:strawberry_seeds",
    "farmersdelight:tomato_seeds",
    "thermal:flax_seeds",
    "thermal:spinach_seeds",
  ]);
  myst("kubejs:instability", ["minecraft:obsidian"]);
  myst("supplementaries:urn", ["supplementaries:bomb_blue"]);
  myst(
    Item.of(
      "minecraft:bundle",
      '{Items:[{Count:1b,id:"integrateddynamics:crystalized_chorus_chunk"}]}'
    ),
    ["integrateddynamics:crystalized_chorus_chunk"]
  );
  myst(
    Item.of(
      "minecraft:bundle",
      '{Items:[{Count:1b,id:"integrateddynamics:crystalized_menril_chunk"}]}'
    ),
    ["integrateddynamics:crystalized_menril_chunk"]
  );
  myst("kubejs:illuminati", [
    Item.of(
      "tiab:time_in_a_bottle",
      '{display:{Name:\'{"text":"Extra time","color":"green","bold":true,"italic":false}\'}}'
    ),
  ]);
  myst("kubejs:soul", ["tombstone:soul_receptacle"]);
  myst("minecraft:cauldron", ["reactive:crucible"]);
  myst("thoriumreactors:molten_salt_bucket", [
    "thoriumreactors:heated_molten_salt_bucket",
  ]);
  myst("thoriumreactors:heated_molten_salt_bucket", [
    "thoriumreactors:steam_bucket",
    "thoriumreactors:depleted_molten_salt_bucket",
  ]);
  myst("exoticbirds:nest", ["exoticbirds:mystery_egg"]);
  myst("exoticbirds:mystery_egg", ["exoticbirds:phoenix_egg"]);
  myst("ten3:machine_matter_condenser", ["ten3:liquid_bizarrerie_bucket"]);
  myst("cyclic:peat_unbaked", ["cyclic:peat_baked"]);
  myst("ten3:machine_enchantment_flusher", ["ten3:liquid_xp_bucket"]);
  myst("thoriumreactors:enriched_uranium", [
    "thoriumreactors:depleted_uranium",
  ]);

  myst("biomancy:primordial_cradle", [
    "biomancy:primal_permeable_membrane",
    "biomancy:malignant_flesh_stairs",
    "biomancy:malignant_flesh_wall",
    "biomancy:malignant_flesh_slab",
    "biomancy:malignant_flesh",
    "biomancy:primal_orifice",
    "minecraft:bone_block",
    "biomancy:malignant_flesh_veins",
    "biomancy:primordial_hungry_flesh_blob_spawn_egg",
    "biomancy:primordial_flesh_blob_spawn_egg",
    "biomancy:hungry_flesh_blob_spawn_egg",
    "biomancy:flesh_blob_spawn_egg",
  ]);
  myst("biomancy:primal_orifice", ["biomancy:acid_bucket"]);

  myst("minecraft:sculk_catalyst", [
    "minecraft:sculk_vein",
    "minecraft:sculk",
    "minecraft:sculk_sensor",
    "minecraft:sculk_shrieker",
  ]);

  myst(
    ["extremecobblegenerator:generator", "cobblefordays:tier_3"],
    ["minecraft:cobblestone"]
  );

  myst(["minecraft:grass","minecraft:tall_grass"], ["farmersdelight:straw"]);
});
