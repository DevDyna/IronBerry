ServerEvents.recipes(event => {
	
	event.custom({
    "type": "ae2:entropy",
    "input": {
      "block": {
        "id": "minecraft:snow_block"
      }
    },
    "mode": "cool",
    "output": {
      "block": {
        "id": "minecraft:ice"
      }
    }
  })
  
	event.custom({
    "type": "ae2:entropy",
    "input": {
      "fluid": {
        "id": "minecraft:flowing_water"
      }
    },
    "mode": "cool",
    "output": {
      "drops": [{
        "item": "minecraft:snowball"
      }]
    }
  })

  event.custom({
    "type": "ae2:entropy",
    "input": {
      "fluid": {
        "id": "minecraft:water"
      }
    },
    "mode": "cool",
    "output": {
      "drops": [{
        "item": "minecraft:snowball"
      }]
    }
  })

  event.custom({
    "type": "ae2:entropy",
    "input": {
      "block": {
        "id": "minecraft:snow"
      }
    },
    "mode": "cool",
    "output": {
      "drops": [{
        "item": "kubejs:ice_shard"
      }]
    }
  })

})