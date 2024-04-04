ServerEvents.recipes((event) => {

event.custom({
    "type": "create:milling",
    "ingredients": [
      {
        "item": 'minecraft:wheat'
      }
    ],
    "processingTime": 100,
    "results": [
      {
        "count": 2,
        "item": 'create:wheat_flour'
      },
      {
        "chance": 0.5,
        "count": 1,
        "item": 'create:wheat_flour'
      },
      {
        "chance": 0.25,
        "item": 'create:wheat_flour'
      }
    ]
  })




})