/**
 *
 * @param {item|itemtag} input
 * @param {item} output max 4
 * @param {float} chance
 */
function TEpulverizer(input, output, chance) {
  ServerEvents.recipes((event) => {
    event.custom({
      type: "thermal:pulverizer",
      ingredient: ItemOrTag(input),
      result: ItemAndChance(output, chance),
      experience: global.te.experience,
      energy: global.te.energy,
      energy_mod: global.te.modifier,
    });
  });
}
