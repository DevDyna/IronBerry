/**
 *
 * @param {item|itemtag} sapling
 * @param {item[]|itemtag[]} result
 * @param {float[]} result_chance 1.0 => 100%
 */
global.server.thermal.insolator = (sapling, result, result_chance) => {
  ServerEvents.recipes((event) => {
    let list = [];
    result.forEach((element, index) => {
      list.push(ItemAndChance(element, result_chance[index]));
    });
    event.custom({
      type: "thermal:insolator",
      ingredient: ItemOrTag(sapling),
      result: list,
      experience: global.te.experience,
      energy: global.te.energy,
      energy_mod: global.te.modifier,
      water_mod: 0.1,
    });
  });
};
