ServerEvents.recipes(event => {
    //pnc fuels
    event.custom({
        "type": "pneumaticcraft:fuel_quality",
        "air_per_bucket": 1000,
        "burn_rate": 1.0,
        "fluid": {
            "type": "pneumaticcraft:fluid",
            "amount": 1000,
            "fluid": "systeams:steam"
        }
    })
    //
    //
    //


})
