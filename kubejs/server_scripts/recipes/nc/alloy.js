ServerEvents.recipes(event => {

    function alloy(item_a,count1,item_b,count2,output,outcount){
        event.custom({
            "type": "nuclearcraft:alloy_smelter",
            "input": [
              {
                "item": item_a,
                "count": count1
              },
              {
                "item": item_b,
                "count": count2
              }
            ],
            "output": [
              {
                "count": outcount,
                "item": output
              }
            ],
            "powerModifier": 1.0,
            "radiation": 0.0,
            "timeModifier": 1.0
          })
    }

    alloy('thermal:bitumen',1,'twilightforest:ironwood_ingot',1,'mekanism:ingot_steel',2)
    alloy('thermal:bitumen_block',1,'twilightforest:ironwood_block',1,'mekanism:block_steel',2)
 



})