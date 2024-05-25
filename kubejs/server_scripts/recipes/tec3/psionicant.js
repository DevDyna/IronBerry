ServerEvents.recipes(event => {
    

    event.custom({
      "type": "ten3:psionicant",
      "inputs": [
        {
          "form": "item",
          "type": "tag",
          "key": "forge:stone",
          "count": 1
        },
        {
          "form": "item",
          "type": "tag",
          "key": "forge:dyes/black",
          "count": 1
        }
      ],
      "outputs": [
        {
          "form": "item",
          "key": "minecraft:obsidian",
          "count": 1
        }
      ],
      "time": 200
    })
})