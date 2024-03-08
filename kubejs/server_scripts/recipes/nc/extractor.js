ServerEvents.recipes(event => {

    function extractor(input,output,amount,fluid,out_count){
        event.custom({
          "type": "nuclearcraft:extractor",
          "input": [
            {
              "item": input
            }
          ],
          "output": [
            {
              "item": output,
              "count":out_count
            }
          ],
          "outputFluids": [
            {
              "amount": amount,
              "fluid": fluid
            }
          ],
          powerModifier: global.nc.energy,
          radiation: global.nc.rad,
          timeModifier: global.nc.speed
        }).id(RegX(input + '_' +output+ '_' + fluid, '_'))
    }


    extractor('ae2:charged_certus_quartz_crystal','ae2:certus_quartz_crystal',144,'kubejs:red_power',2)


})