ServerEvents.recipes(event => {

    function enrich(item,fluid,amount,output,count){
    event.custom({
    "type": "nuclearcraft:fluid_enricher",
    "input": [
      {
        "item": item
      }
    ],
    "inputFluids": [
      {
        "amount": amount,
        "fluid": fluid
      }
    ],
    "outputFluids": [
      {
        "amount": count,
        "fluid": output
      }
    ],
    "powerModifier": global.nc.power,
    "radiation": global.nc.rad,
    "timeModifier": global.nc.speed
  })
}

enrich('mekanism:ingot_osmium','pneumaticcraft:etching_acid',1000,'kubejs:osmium_enriched',125)

})