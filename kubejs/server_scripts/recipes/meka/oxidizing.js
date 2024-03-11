ServerEvents.recipes(event => {


  function oxidizer(item,gas,amount){
    event.custom({
  "type": "mekanism:oxidizing",
  "input": {
    "ingredient": {
      "item": item
    }
  },
  "output": {
    "amount": amount,
    "gas": gas
  }
})
}

oxidizer('cyclic:peat_fuel_enriched',"kubejs:methane",100)
oxidizer('kubejs:uranium',"kubejs:radio_uranium",144)
oxidizer('kubejs:thorium',"kubejs:radio_thorium",144)

})
