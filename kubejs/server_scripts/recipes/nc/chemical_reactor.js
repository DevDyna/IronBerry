//priority 1
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

smart_reaction(['kubejs:quartz_arsenic','nuclearcraft:oxygen'],['kubejs:quartz_oxide'])
smart_reaction(['kubejs:quartz_oxide','nuclearcraft:aqua_regia_acid'],['kubejs:quartz_regia'])
smart_reaction(['kubejs:quartz_regia','nuclearcraft:nitric_acid'],['kubejs:quartz_nitric'])
smart_reaction(['nuclearcraft:chlorine','nuclearcraft:nitrogen'],['nuclearcraft:nitric_acid'])

smart_reaction(['kubejs:radio_uranium','kubejs:radio_thorium'],['kubejs:fuel_mixture'])

smart_reaction(['thoriumreactors:steam','mekanism:steam'],['kubejs:exosteam'])


reaction(["minecraft:milk",'nuclearcraft:milk_chocolate'],[250,144],["create:chocolate","nuclearcraft:unsweetened_chocolate"],[288,144])
reaction(['kubejs:crude_plastic','nuclearcraft:nitrogen'],[10,9],['pneumaticcraft:plastic'],[1000])

reaction(['nuclearcraft:boron_arsenide','biomancy:acid'],[250,50],['nuclearcraft:boron_slurry'],[250])

reaction(['pneumaticcraft:etching_acid','nuclearcraft:boron_slurry'],[250,250],['biomancy:acid','nuclearcraft:boron_slurry'],[750,250])
})