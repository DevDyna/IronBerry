ServerEvents.recipes(event => {

  function electro(input,count,out_fluid,out_amount){
    data.recipes.refinery.push([input,count,out_fluid,out_amount])
    let output = []
    out_fluid.forEach((element, index) => {
      output.push(FluidAndCount(element, out_amount[index]))
    });
  event.custom({
    "type": "nuclearcraft:electrolyzer",
    "inputFluids": [
      {
        "amount": count,
        "fluid": input
      }
    ],
    "outputFluids": output,
    "powerModifier": (global.nc.energy),
    "radiation": (global.nc.rad),
    "timeModifier": (global.nc.speed)
  })
}


electro('minecraft:water',10,['nuclearcraft:oxygen','nuclearcraft:hydrogen'],[5,5])
electro('kubejs:osmium_enriched',10,['nuclearcraft:aqua_regia_acid','nuclearcraft:hydrochloric_acid'],[5,5])
electro('nuclearcraft:aqua_regia_acid',10,['nuclearcraft:nitrogen','minecraft:water'],[7,3])
electro('nuclearcraft:hydrochloric_acid',10,['nuclearcraft:hydrogen','nuclearcraft:chlorine'],[5,5])

})