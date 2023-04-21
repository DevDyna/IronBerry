ServerEvents.recipes(event => {
//pedestals
event.custom({
  "type": "pedestals:cobblegen",
  "blockBelow": {
    "item": "bluepower:alloyfurnace"
  },
  "result": {
    "item": "minecraft:dirt"
  }
})
//
//
event.custom({
  "type": "pedestals:cobblegen",
  "blockBelow": {
    "item": "minecraft:dripstone_block"
  },
  "result": {
    "item": "minecraft:sand"
  }
})
//
//
})