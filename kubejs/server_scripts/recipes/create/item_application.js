ServerEvents.recipes((event) => {
 /**
  * 
  * @param {block} block block to click
  * @param {item} item item to click
  * @param {block} result block to place
  */
  function monoitem(block,item,result){
event.custom({
  "type": "create:item_application",
  "ingredients": [
    {
      "item": block
    },
    {
      "item": item
    }
  ],
  "results": [
    {
      "item": result
    }
  ]
})
}

function plus_put(block,item,output){
  item.forEach((element,index) => {
    monoitem(block,element,output[index])
  });
}

plus_put('kubejs:blank', ['create:andesite_alloy', 'minecraft:copper_ingot', 'create:brass_ingot', 'kubejs:pre_compressed'],['create:andesite_casing', 'create:copper_casing', 'create:brass_casing', 'create:railway_casing'])

monoitem('create:andesite_casing','create:shaft','create:andesite_encased_shaft')

monoitem('create:andesite_encased_shaft','create:andesite_alloy','create:encased_chain_drive')

})