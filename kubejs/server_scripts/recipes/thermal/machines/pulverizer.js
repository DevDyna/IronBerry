/**
 *
 * @param {item|itemtag} input
 * @param {item} output max 4
 * @param {int} count
 */
global.server.thermal.pulverizer = (input, output, count) => {
  ServerEvents.recipes((event) => {
    event.custom({
      type: "thermal:pulverizer",
      ingredient: ItemOrTag(input),
      result: ItemAndCount(output, count),
      experience: global.te.experience,
      energy: global.te.energy,
      energy_mod: global.te.modifier,
    });
  });
};
