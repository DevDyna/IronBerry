/**
 *
 * @param {item|itemtag} input
 * @param {fluid} fluid
 * @param {int} amount
 */
function TEmagma(input, fluid, amount) {
  ServerEvents.recipes((event) => {
    event.custom({
      type: "thermal:crucible",
      ingredient: ItemOrTag(input),
      result: FluidAndCount(fluid, amount),
      experience: global.te.experience,
      energy: global.te.energy,
      energy_mod: global.te.modifier,
    });
  });
}
