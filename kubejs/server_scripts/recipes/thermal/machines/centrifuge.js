/**
 *
 * @param {item|itemtag} input
 * @param {int} in_count
 * @param {item[]|itemtag} output max 4
 * @param {int} out_count
 * @param {fluid} fluid
 * @param {int} amount
 */
global.server.thermal.centrifuge = (input, in_count, output, out_count,fluid,amount) => {
  ServerEvents.recipes((event) => {
    let list = [];
    output.forEach((element,index) => {
      list.push(ItemOrTagAndCount(element, out_count[index]));
    });
    list.push(FluidAndCount(fluid,amount))
    event.custom({
      type: "thermal:centrifuge",
      ingredient: ItemOrTagAndCount(input, in_count),
      result: list,
      "experience": global.te.experience,
      "energy": global.te.energy,
      "energy_mod": global.te.modifier
    });
  });
};
