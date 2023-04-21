ServerEvents.recipes(event => {
////evaporation
//
//
event.custom({
  "type": "homespun:evaporating",
  "output_item": {
    "item": "homespun:tiny_iron_dust",
	"count": 7
  },
  "fluid_stack": {
    "fluid": "homespun:ironberry_juice",
    "amount": 1000
  },
  "time": 100
})
//
event.custom({
  "type": "homespun:evaporating",
  "output_item": {
    "item": "minecraft:coal",
	"count": 1
  },
  "fluid_stack": {
    "fluid": "thermal:crude_oil",
    "amount": 1000
  },
  "time": 100
})
})