ServerEvents.recipes(event => {


event.custom({
    "type": "nuclearcraft:chemical_reactor",
    "inputFluids": [
      {
        "amount": 144,
        "fluid": "nuclearcraft:sugar"
      },
      {
        "amount": 250,
        "fluid": "thermal:syrup"
      }
    ],
    "outputFluids": [
      {
        "amount": 1000,
        "fluid": "minecraft:milk"
      }
    ],
    "powerModifier": (global.nc.energy),
    "radiation": (global.nc.rad),
    "timeModifier": (global.nc.speed)
  })

  event.custom({
    "type": "nuclearcraft:chemical_reactor",
    "inputFluids": [
      {
        "amount": 250,
        "fluid": "minecraft:milk"
      },
      {
        "amount": 576,
        "fluid": 'nuclearcraft:chocolate_liquor'
      }
    ],
    "outputFluids": [
      {
        "amount": 125,
        "fluid": "minecraft:water"
      },      {
        "amount": 144,
        "fluid": "nuclearcraft:unsweetened_chocolate"
      }
    ],
    "powerModifier": (global.nc.energy),
    "radiation": (global.nc.rad),
    "timeModifier": (global.nc.speed)
  })



  event.custom({
    "type": "nuclearcraft:chemical_reactor",
    "inputFluids": [
      {
        "amount": 250,
        "fluid": "minecraft:milk"
      },
      {
        "amount": 144,
        "fluid": 'nuclearcraft:sugar'
      }
    ],
    "outputFluids": [
      {
        "amount": 288,
        "fluid": "nuclearcraft:marshmallow"
      },      {
        "amount": 144,
        "fluid": "thermal:syrup"
      }
    ],
    "powerModifier": (global.nc.energy),
    "radiation": (global.nc.rad),
    "timeModifier": (global.nc.speed)
  })

  event.custom({
    "type": "nuclearcraft:chemical_reactor",
    "inputFluids": [
      {
        "amount": 125,
        "fluid": "minecraft:milk"
      },
      {
        "amount": 288,
        "fluid": 'nuclearcraft:unsweetened_chocolate'
      }
    ],
    "outputFluids": [
      {
        "amount": 144,
        "fluid": "nuclearcraft:milk_chocolate"
      },      {
        "amount": 144,
        "fluid": "nuclearcraft:dark_chocolate"
      }
    ],
    "powerModifier": (global.nc.energy),
    "radiation": (global.nc.rad),
    "timeModifier": (global.nc.speed)
  })




  event.custom({
    "type": "nuclearcraft:chemical_reactor",
    "inputFluids": [
      {
        "amount": 500,
        "fluid": "kubejs:coal"
      },
      {
        "amount": 400,
        "fluid": 'pneumaticcraft:etching_acid'
      }
    ],
    "outputFluids": [
      {
        "amount": 288,
        "fluid": "kubejs:graphite"
      }
    ],
    "powerModifier": (global.nc.energy),
    "radiation": (global.nc.rad),
    "timeModifier": (global.nc.speed)
  })










})