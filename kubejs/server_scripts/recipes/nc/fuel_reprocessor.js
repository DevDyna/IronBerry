ServerEvents.recipes(event => {

function reprocessor(item_in,icount,item_out,ocount){
  let result = []
  item_out.forEach((element, index) => {
    result.push(ItemAndCount(element, ocount[index]))
  });
  let input = []
  input.push(ItemAndCount(item_in, icount))
	event.custom({
  "type": "nuclearcraft:fuel_reprocessor",
  "input": input,
  "output": result,
  "powerModifier": (global.nc.energy),
  "radiation": (global.nc.rad),
  "timeModifier": (global.nc.speed)
}).id(RegX(item_in + '_' + item_out, '_'))
}

reprocessor('kubejs:lupenio',1,['nuclearcraft:boron_arsenide_gem', 'nuclearcraft:rhodochrosite_gem', 'nuclearcraft:fluorite_gem', 'nuclearcraft:villiaumite_gem', 'nuclearcraft:boron_nitride_gem', 'nuclearcraft:carobbiite_gem'],[1,1,1,1,1,1])
reprocessor('thoriumreactors:manganese_ingot',1,['thoriumreactors:uran_three_chloride', 'thoriumreactors:sodium', 'thoriumreactors:potassium'],[1,1,1])

// function smart_reprocessor(input,num,output){
//   let count = []
//   output.forEach(item=>{
//     count.push(1)
//   })
//   reprocessor(input,num,output,count)
// }


reprocessor('kubejs:uranium',1, ['thoriumreactors:niob_nugget', 'thoriumreactors:molybdenum_nugget'],[28,8])
reprocessor('kubejs:thorium',1, ['thoriumreactors:chromium_nugget', 'thoriumreactors:titanium_nugget'],[10,26])


reprocessor('compressium:cobblestone_6',1,['supplementaries:urn','compressium:cobblestone_4','compressium:cobblestone_3','compressium:cobblestone_2'],[3,1,4,1]) //phi grech
})