ServerEvents.recipes((event) => {
event.custom({
  "type": "create:crushing",
  "ingredients": [
    {
      "tag": "forge:ores/aluminum"
    }
  ],
  "processingTime": 400,
  "results": [
    {
      "item": "create:crushed_raw_aluminum"
    },
    {
      "chance": 0.75,
      "item": "create:crushed_raw_aluminum"
    },
    {
      "chance": 0.75,
      "item": "create:experience_nugget"
    }
  ]
})




})