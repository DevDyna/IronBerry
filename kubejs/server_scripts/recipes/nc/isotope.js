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
      separator('minecraft:dirt',10,['minecraft:clay_ball','farmersdelight:rich_soil'],[3,5])
})
