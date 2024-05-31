/**
 *
 * @param {item|itemtag} input
 * @param {int} in_count
 * @param {item|itemtag} die
 * @param {item} output
 * @param {int} out_count
 * @param {fluid} fluid
 * @param {int} amount
 */
function TEpress(input, in_count, die, output, out_count, fluid, amount) {
  ServerEvents.recipes((event) => {
    event.custom({
      type: "thermal:press",
      ingredients: [ItemOrTagAndCount(input, in_count), ItemOrTag(die)],
      result: [ItemAndCount(output, out_count), FluidAndCount(fluid, amount)],
      experience: global.te.experience,
      energy: global.te.energy,
      energy_mod: global.te.modifier,
    });
  });
}
