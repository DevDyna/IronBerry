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
        "amount": 800,
        "fluid": "kubejs:boron"
      },
      {
        "amount": 50,
        "fluid": "kubejs:graphite"
      },
      {
        "amount": 50,
        "fluid": "kubejs:thorium"
      },
      {
        "amount": 10,
        "fluid": "kubejs:shibuichi"
      },
      {
        "amount": 10,
        "fluid": "kubejs:magnesium"
      },
      {
        "amount": 10,
        "fluid": "kubejs:uranium"
      }
    ],
    "powerModifier": 1.0,
    "radiation": 0.0,
    "timeModifier": 1.0
  })




})