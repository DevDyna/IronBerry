ServerEvents.recipes((event) => {
  /**
   * 
   * @param {item[]|itemtag[]} inputs 
   * @param {int[]} counts 
   * @param {int} nutrient 
   * @param {int} time 
   * @param {item|itemtag} reactant 
   * @param {int} reac_count 
   * @param {item} output 
   * @param {int} count 
   */
  function lab(
    inputs,
    counts,
    nutrient,
    time,
    reactant,
    reac_count,
    output,
    count
  ) {
    let ing = [];
    inputs.forEach((element, index) => {
      ing.push(ItemOrTagAndCount(element, counts[index]));
    });
    event.custom({
      type: "biomancy:bio_brewing",
      ingredients: ing,
      nutrientsCost: nutrient,
      processingTime: time,
      reactant: ItemOrTagAndCount(reactant, reac_count),
      result: ItemAndCount(output, count),
    });
  }

  lab(['biomancy:fertilizer','biomancy:creator_mix','biomancy:enlargement_serum'],[1,1,1],100,4,'biomancy:unstable_compound',1,'kubejs:glicetanole',1)

});
