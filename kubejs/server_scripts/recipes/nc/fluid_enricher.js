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

enrich('kubejs:crystaltine','kubejs:quartz',10,'kubejs:quartz_cristaltine',10)
enrich('nuclearcraft:boron_arsenide_dust','kubejs:quartz_cristaltine',10,'kubejs:quartz_arsenic',144)

enrich('bluepower:indigo_dye','kubejs:glass',100,'kubejs:azure_glass',100)
})