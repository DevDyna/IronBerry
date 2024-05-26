/**
 *
 * @param {fluid} fluid
 * @param {int} amount
 * @param {item[]|itemtag[]} catalyst max 2
 * @param {int} cat_count
 * @param {item} output
 * @param {int} out_count
 */
server.thermal.crystallizer = (
  fluid,
  amount,
  catalyst,
  cat_count,
  output,
  out_count
) => {
  let list = []
  list.push(FluidAndCount(fluid, amount))
  catalyst.forEach((element,index)=>{
    list.push(ItemOrTagAndCount(element, cat_count[index]))
  })
  
  ServerEvents.recipes((event) => {
    event.custom({
      type: "thermal:crystallizer",
      ingredients: list,
      result: [ItemAndCount(output, out_count)],
      "experience": global.te.experience,
      "energy": global.te.energy,
      "energy_mod": global.te.modifier
    });
  });
};
