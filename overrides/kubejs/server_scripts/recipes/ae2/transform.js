ServerEvents.recipes(event => {

event.custom({
  "type": "ae2:transform",
  "circumstance": {
    "type": "explosion"
  },
  "ingredients": [
    {
      "item": "minecraft:poppy"
    },
    {
      "item": "tombstone:grave_dust"
    }
  ],
  "result": {
    "count": 1,
    "item": "kubejs:rose"
  }
})


event.custom({
  "type": "ae2:transform",
  "circumstance": {
    "type": "explosion"
  },
  "ingredients": [
    {
      "item": "minecraft:cactus"
    },
    {
      "item": "thermal:amaranth_seeds"
    }
  ],
  "result": {
    "count": 1,
    "item": "minecraft:dead_bush"
  }
})

})