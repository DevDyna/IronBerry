ServerEvents.recipes((event) => {
  /**
   *
   * @param {item} input
   * @param {item} output
   * @param {int} count
   * @param {int} source
   * @param {item[]} itemlist
   */
  function imbue(input, output, count, source, itemlist) {
    let list = [];

    itemlist.forEach((element) => {
      list.push({ item: ItemOrTag(element) });
    });

    event.custom({
      type: "ars_nouveau:imbuement",
      count: count,
      input: ItemOrTag(input),
      output: output,
      pedestalItems: list,
      source: source,
    });
  }

  imbue("#ironberry:source_gems", "ars_nouveau:source_gem", 1, 2000, [
    "bluepower:amethyst_block",
    "bluepower:green_sapphire_block",
    "bluepower:ruby_block",
    "bluepower:sapphire_block",
  ]);

  imbue('#forge:stone', "ars_nouveau:sourcestone", 1, 10000, [
    "ars_nouveau:smooth_gilded_sourcestone_mosaic",
    "ars_nouveau:smooth_gilded_sourcestone_small_bricks",
    "ars_nouveau:gilded_sourcestone_large_bricks",
    "ars_nouveau:smooth_gilded_sourcestone_alternating",
  ]);

  imbue('#forge:stone', "ars_nouveau:sourcestone", 8, 2500, [
    '#ironberry:source_gens',
    '#ironberry:source_gens',
    'ars_nouveau:source_jar', 'ars_nouveau:relay_collector', 'ars_nouveau:relay_deposit', 'ars_nouveau:imbuement_chamber',
  ]);

  imbue('#forge:stone', "ars_nouveau:sourcestone", 16, 0, ['ae2:charged_staff', 'ae2:entropy_manipulator', 'kubejs:grave_spawn', 'ars_nouveau:drygmy_charm', 'ars_nouveau:starbuncle_charm', 'ars_nouveau:bookwyrm_charm', 'kubejs:omni', 'tombstone:voodoo_poppet', 'kubejs:illuminati']);
  
});
