ServerEvents.recipes(event => {

  /**
   * 
   * @param {'press'|'inscribe'} type_mode press dont use item
   * @param {item[]} input middle top bottom
   * @param {item} output 
   */
function inscribe(type_mode,input,output){

  switch(input.length){
    case 1:
      event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "item": input[0]
          }
        },
        "mode": type_mode,
        "result": {
          "item": output
        }
      }).id(RegX(type_mode + "_" + input + "_" + output))
      break
    case 2:
      event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "item": input[0]
          },
          "top": {
            "item": input[1]
          }
        },
        "mode": type_mode,
        "result": {
          "item": output
        }
      }).id(RegX(type_mode + "_" + input + "_" + output))
      break
    case 3:
      event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "bottom": {
            "item": input[2]
          },
          "middle": {
            "item": input[0]
          },
          "top": {
            "item": input[1]
          }
        },
        "mode": type_mode,
        "result": {
          "item": output
        }
      }).id(RegX(type_mode + "_" + input + "_" + output))
      break
      default:
        throw "ERROR INSCRIBER RECIPES"
  }
}

inscribe('press',['ae2:certus_quartz_crystal'],'ae2:certus_quartz_dust')
inscribe('press',['minecraft:quartz'],'thermal:quartz_dust')
inscribe('press',['nuclearcraft:empty_frame','nuclearcraft:steel_frame',  'nuclearcraft:chassis'],'kubejs:incompleted_machine_frame')
inscribe('press',['kubejs:incompleted_machine_frame','ae2:inscriber',  'laboratoryblocks:laboratory_block'],'thermal:machine_frame')



})
