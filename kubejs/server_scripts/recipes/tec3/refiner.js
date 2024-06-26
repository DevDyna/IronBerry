ServerEvents.recipes(event => {
    
event.custom({
  "type": "ten3:refiner",
  "inputs": [
    {
      "form": "item",
      "type": "static",
      "key": "minecraft:slime_ball"
    },
    {
      "form": "fluid",
      "type": "static",
      "key": "minecraft:lava",
      "amount": 50
    }
  ],
  "outputs": [
    {
      "form": "item",
      "key": "minecraft:magma_cream",
      "count": 1
    },
    {
      "form": "fluid",
      "key": "minecraft:water",
      "amount": 50
    }
  ],
  "time": 200
})

})