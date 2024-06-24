ServerEvents.recipes((event) => {
  function forging(cost, inputs, counts, output, count) {
    let ing = [];
    inputs.forEach((element, index) => {
      ing.push(ItemOrTagAndCount(element, counts[index]));
    });

    event.custom({
      type: "biomancy:bio_forging",
      bio_forge_tab: "biomancy:blocks",
      ingredients: ing,
      nutrientsCost: cost,
      result: ItemAndCount(output, count),
    });
  }

  forging(
    1,
    ["minecraft:bone", "minecraft:porkchop"],
    [1, 2],
    "farmersdelight:ham",
    1
  );
  forging(
    1,
    ["biomancy:mob_claw", "biomancy:bone_fragments"],
    [1, 16],
    "biomancy:mob_fang",
    1
  );
  forging(
    1,
    [
      "biomancy:living_flesh",
      'biomancy:malignant_flesh',
      "biomancy:bone_fragments",
      "bluepower:infused_teslatite_dust",
      "biomancy:elastic_fibers",
    ],
    [1, 2, 5, 8, 4],
    "biomancy:decomposer",
    1
  );
});
