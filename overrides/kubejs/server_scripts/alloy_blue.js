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
event.custom({
  "type": "bluepower:alloy_smelting",
  "ingredients": [
    {
      "item": "bluepower:brass_ingot",
      "count": 4
    },
    {
      "item": "bluepower:purple_alloy_ingot",
	  "count": 1
    }
  ],
  "result": {
    "item": "pneumaticcraft:ingot_iron_compressed",
	"count": 1
  }
})
//
//
event.custom({
  "type": "bluepower:alloy_smelting",
  "ingredients": [
    {
      "item": "bluepower:blue_doped_wafer",
      "count": 1
    },
    {
      "item": "bluepower:red_doped_wafer",
	  "count": 1
    }
  ],
  "result": {
    "item": "prettypipes:blank_module",
	"count": 64
  }
})
//
//
event.custom({
  "type": "bluepower:alloy_smelting",
  "ingredients": [
    {
      "item": "minecraft:crafting_table",
      "count": 1
    },
    {
      "item": "bluepower:auto_project_table",
	  "count": 1
    },
    {
      "item": "kubejs:blank",
	  "count": 1
    }
  ],
  "result": {
    "item": "prettypipes:crafting_terminal",
	"count": 1
  }
})
//
//
})