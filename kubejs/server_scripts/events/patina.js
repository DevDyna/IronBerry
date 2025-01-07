//############################### patina ##########################//
BlockEvents.rightClicked((event) => {
    [
      "minecraft:oxidized_copper",
      "minecraft:oxidized_cut_copper",
      "minecraft:oxidized_cut_copper_stairs",
      "minecraft:oxidized_cut_copper_slab",
      "quark:oxidized_cut_copper_vertical_slab",
      "minecraft:weathered_copper",
      "minecraft:weathered_cut_copper",
      "minecraft:weathered_cut_copper_stairs",
      "minecraft:weathered_cut_copper_slab",
      "quark:weathered_cut_copper_vertical_slab",
      "minecraft:exposed_copper",
      "minecraft:exposed_cut_copper",
      "minecraft:exposed_cut_copper_stairs",
      "minecraft:exposed_cut_copper_slab",
      "quark:exposed_cut_copper_vertical_slab",
    ].forEach((b) => {
      if (event.block.id == b && event.item.hasTag("forge:tools/axes")) {
        event.block.popItem(Item.of("kubejs:patina", rnd(1, 4)));
      }
    });
  });