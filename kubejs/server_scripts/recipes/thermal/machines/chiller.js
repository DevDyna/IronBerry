/**
 *
 * @param {fluid} fluid
 * @param {int} amount
 * @param {item|itemtag} output
 * @param {int} count
 */
server.thermal.chiller = (fluid, amount, output, count) => {
  ServerEvents.recipes((event) => {
    event.custom({
      type: "thermal:chiller",
      ingredient: FluidAndCount(fluid, amount),
      result: [ItemOrTagAndCount(output, count)],
      "experience": global.te.experience,
      "energy": global.te.energy,
      "energy_mod": global.te.modifier
    });
  });
};
