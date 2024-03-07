ServerEvents.recipes(event => {

  
event.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "item": 'ae2:certus_quartz_crystal'
    }
  },
  "mode": "press",//"inscribe",
  "result": {
    "item": 'ae2:certus_quartz_dust'
  }
})



event.custom({
  "type": "ae2:inscriber",
  "ingredients": {
    "middle": {
      "item": 'minecraft:quartz'
    }
  },
  "mode": "press",//"inscribe",
  "result": {
    "item": 'thermal:quartz_dust'
  }
})

})
