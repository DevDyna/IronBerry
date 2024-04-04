ServerEvents.recipes((event) => {

event.custom({
    "type": "create:crushing",
    "ingredients": [
      {
        "item": 'minecraft:wheat'
      }
    ],
    "processingTime": 10,
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