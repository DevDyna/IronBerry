ServerEvents.highPriorityData(event => {

    ['biodiesel','cofh_creosote','cofh_refined_fuel','cofh_tree_oil','hydrogen','ethylene','crude_oil','diesel','ethanol','gasoline','kerosene','lpg'].forEach(data => {
        event.addJson(`pneumaticcraft:recipes/pneumaticcraft_fuels/${data}`, {})
    })


        event.addJson(`pneumaticcraft:recipes/pneumaticcraft_fuels/water`, {
  "type": "pneumaticcraft:fuel_quality",
  "air_per_bucket": 1000,
  "burn_rate": 1.0,
  "fluid": {
    "type": "pneumaticcraft:fluid",
    "amount": 1000,
    "tag": "ironberry:chad_water"
  }
})

})
