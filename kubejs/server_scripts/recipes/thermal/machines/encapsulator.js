/**
 *
 * @param {item|itemtag} input
 * @param {int} in_count
 * @param {fluid} fluid
 * @param {int} amount
 * @param {item} output
 * @param {int} out_count
 */
server.thermal.encapsulator = (
  input,
  in_count,
  fluid,
  amount,
  output,
  out_count
) => {
  ServerEvents.recipes((event) => {
    event.custom({
      type: "thermal:bottler",
      ingredients: [
        ItemOrTagAndCount(input, in_count),
        FluidAndCount(fluid, amount),
      ],
      result: [ItemAndCount(output, out_count)],
      "experience": global.te.experience,
      "energy": global.te.energy,
      "energy_mod": global.te.modifier
    });
  });
};
