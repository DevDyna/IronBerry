ServerEvents.recipes(event => {

    event.custom({
  "type": "mekanism:oxidizing",
  "input": {
    "ingredient": {
      "item": 'cyclic:peat_fuel_enriched'
    }
  },
  "output": {
    "amount": 100,
    "gas": "kubejs:methane"
  }
})

})
