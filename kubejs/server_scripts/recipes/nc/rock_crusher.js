ServerEvents.recipes(event => {

function crusher(item_in,icount,item_out,ocount){
  let result = []
  item_out.forEach((element, index) => {
    result.push(ItemAndCount(element, ocount[index]))
  });
  let input = []
  input.push(ItemAndCount(item_in, icount))
	event.custom({
  "type": "nuclearcraft:rock_crusher",
  "input": input,
  "output": result,
  "powerModifier": (global.nc.energy),
  "radiation": (global.nc.rad),
  "timeModifier": (global.nc.speed)
}).id(RegX(input_item + '_' + item_out, '_'))
}

crusher('quark:sturdy_stone',1,['tombstone:white_marble', 'tombstone:dark_marble'],[1,1])
//crusher('minecraft:deepslate',1,['kubejs:lupenio','minecraft:diamond','minecraft:emerald'],[1,1,1])

})