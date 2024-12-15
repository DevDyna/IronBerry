ServerEvents.highPriorityData((event) => {
  /**
   *
   * @param {Item[]} items
   */
  function rechiseled(name,items) {
    let entries = [];
    items.forEach((e) => {
      entries.push({
        item: e,
      });
    });

    event.addJson("ironberry:chiseling_recipes/"+name,{
      type: "rechiseled:chiseling",
      entries: entries,
      overwrite: false,
    });
  }

  rechiseled('sourcestone',[
    "ars_nouveau:sourcestone",
    "ars_nouveau:smooth_sourcestone_mosaic",
    "ars_nouveau:gilded_sourcestone_basketweave",
    "ars_nouveau:sourcestone_mosaic",
    "ars_nouveau:sourcestone_basketweave",
    "ars_nouveau:smooth_gilded_sourcestone_basketweave",
    "ars_nouveau:smooth_sourcestone_basketweave",
    "ars_nouveau:smooth_gilded_sourcestone_large_bricks",
    "ars_nouveau:smooth_gilded_sourcestone_mosaic",
    "ars_nouveau:smooth_sourcestone_large_bricks",
    "ars_nouveau:smooth_sourcestone",
    "ars_nouveau:smooth_sourcestone_small_bricks",
    "ars_nouveau:sourcestone_small_bricks",
    "ars_nouveau:gilded_sourcestone_small_bricks",
    "ars_nouveau:sourcestone_large_bricks",
    "ars_nouveau:smooth_gilded_sourcestone_alternating",
    "ars_nouveau:gilded_sourcestone_mosaic",
    "ars_nouveau:smooth_gilded_sourcestone_small_bricks",
    "ars_nouveau:smooth_sourcestone_alternating",
    "ars_nouveau:sourcestone_alternating",
    "ars_nouveau:gilded_sourcestone_large_bricks",
    "ars_nouveau:gilded_sourcestone_alternating",
  ]);
});
