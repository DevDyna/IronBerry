ServerEvents.recipes(event => {

    function extractor(input,output,amount,fluid){
        event.custom({
          "type": "nuclearcraft:extractor",
          "input": [
            {
              "item": input
            }
          ],
          "output": [
            {
              "item": output
            }
          ],
          "outputFluids": [
            {
              "amount": amount,
              "fluid": fluid
            }
          ],
          "powerModifier": 1.0,
          "radiation": 1.0,
          "timeModifier": 1.0
        }).id(RegX(input + '_' +output+ '_' + fluid, '_'))
    }


    extractor('ae2:charged_certus_quartz_crystal','ae2:certus_quartz_crystal','kubejs:red_power',144)


})