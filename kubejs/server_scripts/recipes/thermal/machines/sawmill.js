/**
 *
 * @param {item|itemtag} input
 * @param {item[]|itemtag[]} output max 4
 * @param {float} chance
 */
server.thermal.sawmill = (input, output, chance) => {
  ServerEvents.recipes((event) => {
    let list = [];
    output.forEach((element, index) => {
      list.push(ItemAndChance(element, chance[index]));
    });

    event.custom({
      type: "thermal:sawmill",
      ingredient: ItemOrTag(input),
      result: list,
      experience: global.te.experience,
      energy: global.te.energy,
      energy_mod: global.te.modifier,
    });
  });
};
