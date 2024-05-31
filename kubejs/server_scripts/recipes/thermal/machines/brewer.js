/**
 *
 * @param {fluid} input
 * @param {int} amount_in
 * @param {item} catalyst
 * @param {fluid} output
 * @param {int} amount_out
 */
function TEbrewer(input, amount_in, catalyst, output, amount_out) {
  ServerEvents.recipes((event) => {
    event.custom({
      type: "thermal:brewer",
      ingredients: [FluidAndCount(input, amount_in), ItemOrTag(catalyst)],
      result: [FluidAndCount(output, amount_out)],
      experience: global.te.experience,
      energy: global.te.energy,
      energy_mod: global.te.modifier,
    });
  });
}
