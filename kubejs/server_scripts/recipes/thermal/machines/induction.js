/**
 * 
 * @param {item[]|itemtag[]} items max 3
 * @param {int[]} in_count 
 * @param {item|itemtag} output max 4
 * @param {int} out_count 
 */
server.thermal.induction = (items,in_count,output,out_count) => {
ServerEvents.recipes(event=>{
let input = []
items.forEach((element,index) => {
  input.push(ItemOrTagAndCount(element,in_count[index]))
});
    event.custom({
      "type": "thermal:smelter",
      "ingredient": input,
      "result": ItemAndCount(output,out_count),
      "experience": global.te.experience,
      "energy": global.te.energy,
      "energy_mod": global.te.modifier
    })
})}