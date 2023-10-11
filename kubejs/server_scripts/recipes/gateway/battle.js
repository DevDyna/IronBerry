ServerEvents.recipes(event => {
    event.custom({
  "type": "gateways:gate_recipe",
  "group": "gateways",
  "pattern": [
    "###",
    "#A#",
    "###"
  ],
  "key": {
    "#": {
      "item": "minecraft:blaze_rod"
    },
	"A": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "gateways:gate_pearl"
  },
  "gateway": "gateways:blaze_gate"
})

})