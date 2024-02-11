ServerEvents.recipes(event => {

  event.custom({
    "type": "nuclearcraft:centrifuge",
    "inputFluids": [
      {
        "amount": 1000,
        "fluid": "kubejs:superio"
      }
    ],
    "outputFluids": [
      {
        "amount": 200,
        "fluid": "kubejs:graphite"
      },
      {
        "amount": 200,
        "fluid": "kubejs:boron"
      },
      {
        "amount": 150,
        "fluid": "kubejs:thorium"
      },
      {
        "amount": 150,
        "fluid": "kubejs:tin"
      },
      {
        "amount": 150,
        "fluid": "kubejs:magnesium"
      },
      {
        "amount": 150,
        "fluid": "kubejs:uranium"
      }
    ],
    "powerModifier": 1.0,
    "radiation": 0.0,
    "timeModifier": 1.0
  })




})