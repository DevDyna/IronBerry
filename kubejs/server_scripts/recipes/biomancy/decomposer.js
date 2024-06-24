ServerEvents.recipes((event) => {
  /**
   *
   * @param {number} cost
   * @param {number} processingTime
   * @param {item} input
   * @param {item[]} outputs
   * @param {number[]} counts 0-1 => min 0 max 1 | 10 => const 10
   */
  function decomposer(cost, processingTime, input, outputs, counts) {
    let item = [];
    outputs.forEach((element, index) => {
      item.push({
        countRange: CountRangeOrUniform(counts[index]),
        item: element,
      });
    });

    event.custom({
      type: "biomancy:decomposing",
      ingredient: {
        item: input,
      },
      nutrientsCost: cost,
      processingTime: processingTime,
      results: item,
    });
  }

  decomposer(1, 9, "homespun:redstone_acid", [
    "minecraft:glass_bottle",
    "biomancy:mineral_fragment",
    "biomancy:bio_lumens",
    "biomancy:volatile_gland",
    "biomancy:toxin_gland",
    "biomancy:mob_gland",
  ],
[1,0-1,0-1,0-4,0-4,0-4]);

decomposer(20,20,'minecraft:bone_block', ['biomancy:mob_marrow', 'biomancy:withered_mob_marrow'],[0-27,0-3])


});
