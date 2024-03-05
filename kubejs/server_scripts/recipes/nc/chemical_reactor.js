ServerEvents.recipes(event => {

function reaction(in_fluid,in_amount,out_fluid,out_amount){
  let input = []
  in_fluid.forEach((element, index) => {
    input.push(FluidAndCount(element, in_amount[index]))
  });
  let output = []
  out_fluid.forEach((element, index) => {
    output.push(FluidAndCount(element, out_amount[index]))
  });
event.custom({
    "type": "nuclearcraft:chemical_reactor",
    "inputFluids": input,
    "outputFluids": output,
    "powerModifier": (global.nc.energy),
    "radiation": (global.nc.rad),
    "timeModifier": (global.nc.speed)
  })
}

reaction(["nuclearcraft:sugar","thermal:syrup"],[144,250],["minecraft:milk"],[1000])
reaction(["minecraft:milk",'nuclearcraft:chocolate_liquor'],[250,576],["minecraft:water","nuclearcraft:unsweetened_chocolate"],[125,144])
reaction(["minecraft:milk",'nuclearcraft:sugar'],[250,144],["nuclearcraft:marshmallow","thermal:syrup"],[288,144])
reaction(["minecraft:milk",'nuclearcraft:unsweetened_chocolate'],[125,288],["nuclearcraft:milk_chocolate","nuclearcraft:dark_chocolate"],[144,144])
reaction(["kubejs:coal",'pneumaticcraft:etching_acid'],[500,400],["kubejs:graphite"],[288])
reaction(['kubejs:fluoronitride','pneumaticcraft:etching_acid'],[144,1600],['kubejs:sodium_hydroxide'],[288])

function smart_reaction(in_fluid,out_fluid){
  reaction(in_fluid,[144,144],out_fluid,[144])
}

smart_reaction(['kubejs:carobbiite','kubejs:boron_nitride'],['kubejs:caro_nitride'])
smart_reaction(['kubejs:fluorite','kubejs:villiaumite'],['kubejs:fluorumite'])
smart_reaction(['kubejs:caro_nitride','kubejs:fluorumite'],['kubejs:fluoronitride'])














})