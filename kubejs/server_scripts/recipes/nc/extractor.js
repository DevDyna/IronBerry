ServerEvents.recipes(event => {

    function extractor(input,output,out_count,fluid,amount){
      data.recipes.pyrolizer.push([input,output,out_count,fluid,amount])
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
          "powerModifier": (global.nc.energy),
          "radiation": (global.nc.rad),
          "timeModifier": (global.nc.speed)
        }).id(RegX(input + '_' +output+ '_' + fluid, '_'))
    }

    extractor('nuclearcraft:boron_arsenide_dust','nuclearcraft:boron_dust',2,'nuclearcraft:arsenic',144)
    extractor('ae2:charged_certus_quartz_crystal','ae2:certus_quartz_crystal',2,'kubejs:red_power',144)
    extractor('kubejs:thorium','thoriumreactors:thorium',2,'pneumaticcraft:etching_acid',144)
    extractor('kubejs:uranium','thoriumreactors:raw_uranium',2,'pneumaticcraft:etching_acid',144)

    extractor('kubejs:rich_bone_meal', 'thermal:phytogro',1,'pneumaticcraft:etching_acid',750)

    extractor('nuclearcraft:boron_nitride_dust','nuclearcraft:boron_dust',2,'nuclearcraft:nitrogen',144)

})