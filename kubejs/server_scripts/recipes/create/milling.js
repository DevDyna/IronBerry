ServerEvents.recipes((event) => {
event.custom({
    "type": "create:milling",
    "ingredients": [
      {
        "item": "minecraft:allium"
      }
    ],
    "processingTime": 50,
    "results": [
      {
        "count": 2,
        "item": "minecraft:magenta_dye"
      },
      {
        "chance": 0.1,
        "count": 2,
        "item": "minecraft:purple_dye"
      },
      {
        "chance": 0.1,
        "item": "minecraft:pink_dye"
      }
    ]
  })




})