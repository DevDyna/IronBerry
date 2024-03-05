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
  manu('nuclearcraft:carobbiite_gem','nuclearcraft:carobbiite_dust',1)

let keyname= ['rhodochrosite','boron_arsenide','villiaumite','carobbiite','boron_nitride','fluorite']
keyname.forEach(name=>{
  manu('nuclearcraft:'+name+'_gem','nuclearcraft:'+name+'_dust',1)
})

  
  
  manu('nuclearcraft:manganese_ingot','nuclearcraft:manganese_dust',1)
  
  
  

})