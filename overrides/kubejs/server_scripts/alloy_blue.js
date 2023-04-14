ServerEvents.recipes(event => {
//alloy_smelting bluepower
//
event.custom({
  "type": "bluepower:alloy_smelting",
  "ingredients": [
    {
      "item": "minecraft:coal",
      "count": 2
    },
    {
      "item": "minecraft:raw_iron",
	  "count": 4
    }
  ],
  "result": {
    "item": "minecraft:iron_ingot",
	"count": 1
  }
})
//
//
event.custom({
  "type": "bluepower:alloy_smelting",
  "ingredients": [
    {
      "item": "bluepower:teslatite_dust",
      "count": 4
    },
    {
      "item": "minecraft:iron_ingot",
	  "count": 2
    }
  ],
  "result": {
    "item": "bluepower:blue_alloy_ingot",
	"count": 1
  }
})
//
//
})