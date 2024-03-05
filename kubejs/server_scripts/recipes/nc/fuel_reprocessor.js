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

})