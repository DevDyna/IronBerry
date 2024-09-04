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
    crystallize('kubejs:azure_glass',250,'ten3:azure_glass')

    crystallize("kubejs:diamond",250,'minecraft:diamond')
    crystallize("nuclearcraft:gold",250,'minecraft:gold_ingot')
    crystallize("kubejs:liquid_silicon",100,'nuclearcraft:silicon_gem')

    crystallize('thermal:ender',25,'minecraft:ender_pearl')

    crystallize('minecraft:water',10,'homespun:salt')

})