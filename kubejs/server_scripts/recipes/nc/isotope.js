ServerEvents.recipes(event => {

  function separator(input,inputcount,outlist,countlist){
    let result = []
    outlist.forEach((element, index) => {
      result.push(ItemOrTagAndCount(element, countlist[index]))
    });

    event.custom({
        "type": "nuclearcraft:isotope_separator",
        "input": ItemOrTagAndCount(input, inputcount),
        "output": result,
        "powerModifier": global.nc.energy,
        "radiation": global.nc.rad,
        "timeModifier": global.nc.speed
      }).id(RegX(input + '_' + outlist, '_'))}
      separator('minecraft:dirt',16,['minecraft:clay_ball','kubejs:rich_bone_meal'],[1,4])
      separator('compressium:cobblestone_6',1,['supplementaries:urn'],[1])
})
