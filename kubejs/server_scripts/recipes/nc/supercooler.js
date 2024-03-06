ServerEvents.recipes(event => {
    function supercooler(input,in_count,output,out_count){
        event.custom({
          "type": "nuclearcraft:supercooler",
          "inputFluids": [
            {
              "amount": in_count,
              "fluid": input
            }
          ],
          "outputFluids": [
            {
              "amount": out_count,
              "fluid": output
            }
          ],
          "powerModifier": global.nc.power,
          "radiation": global.nc.rad,
          "timeModifier": global.nc.speed
        })
    }

    supercooler('kubejs:quartz_nitric',144,'kubejs:quartz_heated',144)




})