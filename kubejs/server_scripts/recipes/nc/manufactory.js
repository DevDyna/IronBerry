ServerEvents.recipes(event => {

    function manu(input,out,count){
    event.custom({
    "type": "nuclearcraft:manufactory",
    "input": [
      {
        "item": input
      }
    ],
    "output": [
      {
        "count": count,
        "item": out
      }
    ],
    "powerModifier": (global.nc.energy),
    "radiation": (global.nc.rad),
    "timeModifier": (global.nc.speed)
  })
}
    manu('minecraft:cocoa_beans','nuclearcraft:cocoa_solids',2)
    manu('minecraft:obsidian','mekanism:dust_obsidian',2)

})