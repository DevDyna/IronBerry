/**
 *
 * @param {item|itemtag} input
 * @param {item[]} output optional max 4
 * @param {int[]} chance
 * @param {fluid[]} fluid optional
 * @param {int[]} amount
 */
global.server.thermal.pyrolizer = (input, output, chance, fluid, amount) => {
  ServerEvents.recipes((event) => {
    let result = [];
    if (typeof output != undefined) {
      output.forEach((element, index) => {
        result.push(ItemAndChance(element, chance[index]));
      });
    }

    if (typeof fluid != undefined) {
        result.push(FluidAndCount(fluid, amount));
    }

    event.custom({
      type: "thermal:pyrolyzer",
      ingredient: ItemOrTag(input),
      result: result,
      experience: global.te.experience,
      energy: global.te.energy,
      energy_mod: global.te.modifier,
    });
  });
};
