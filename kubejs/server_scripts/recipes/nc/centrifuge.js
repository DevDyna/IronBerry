ServerEvents.recipes(event => {

  event.custom({
    "type": "nuclearcraft:centrifuge",
    "inputFluids": [
      {
        "amount": 100,
        "fluid": "kubejs:superio"
      }
    ],
    "outputFluids": [
      {
        "amount": 25,
        "fluid": "kubejs:thorium"
      },
      {
        "amount": 25,
        "fluid": "kubejs:uranium"
      },
      {
        "amount": 15,
        "fluid": "kubejs:osmium"
      },
      {
        "amount": 15,
        "fluid": "kubejs:boron"
      },
      {
        "amount": 10,
        "fluid": "kubejs:magnesium"
      },
      {
        "amount": 10,
        "fluid": "kubejs:tin"
      }
    ],
    "powerModifier": (global.nc.energy),
    "radiation": (global.nc.rad),
    "timeModifier": (global.nc.speed)
  })

  


})