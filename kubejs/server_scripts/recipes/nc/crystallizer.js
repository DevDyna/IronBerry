ServerEvents.recipes(event => {
    function crystallize(fluid,amount,item){
        event.custom({
  "type": "nuclearcraft:crystallizer",
  "inputFluids": [
    {
      "amount": amount,
      "fluid": fluid
    }
  ],
  "output": [
    {
      "item": item
    }
  ],
  "powerModifier": (global.nc.energy),
  "radiation": (global.nc.rad),
  "timeModifier": (global.nc.speed)
  }).id(RegX(fluid + '_' + item, '_'))
    }


    crystallize('kubejs:sodium_hydroxide',144,'nuclearcraft:sodium_hydroxide_dust')
    crystallize("kubejs:certus",144,'ae2:certus_quartz_crystal')

})