/**
 *
 * @param {fluid} input
 * @param {int} amount
 * @param {item} item_out
 * @param {float} chance
 * @param {fluid[]} out_fluids max 2
 * @param {int[]} out_amounts max 2
 */
function TErefinery(input, amount, item_out, chance, out_fluids, out_amounts) {
  ServerEvents.recipes((event) => {
    let list = [];
    if (typeof item_out != undefined) {
      list.push(ItemAndChance(item_out, chance));
    }
    if (typeof out_fluids != undefined) {
      out_fluids.forEach((element, index) => {
        list.push(FluidAndCount(element, out_amounts[index]));
      });
    }
    event.custom({
      type: "thermal:refinery",
      ingredient: FluidAndCount(input, amount),
      result: list,
      experience: global.te.experience,
      energy: global.te.energy,
      energy_mod: global.te.modifier,
    });
  });
}
