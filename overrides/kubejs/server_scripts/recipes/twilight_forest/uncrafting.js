ServerEvents.recipes(event => {




function voodEasy(input,output,pattern){
let recipe = ["   "," V ","   "]
	switch(pattern){
		case 1:
		recipe[0] = "A  "
		break
		case 2:
		recipe[0] = " A "
		break
		case 3:
		recipe[0] = "  A"
		break
		case 4:
		recipe[1] = "AV "
		break
		case 5:
		recipe[1] = " VA"
		break
		case 6:
		recipe[2] = "A  "
		break
		case 7:
		recipe[2] = " A "
		break
		case 8:
		recipe[2] = "  A"
		break
		//error section
		default:
		console.log("#ERROR# pattern on function 'voodEasy' invalid index : ${pattern}")
	}
	
	event.custom({
  "type": "twilightforest:uncrafting",
  "cost":0,
  "count": 1,
  "ingredient": {
    "item": input
  },
  "key": {
    "A": {
      "item": output
    },"V":{
		"item": 'tombstone:voodoo_poppet'
	}
  },
  "pattern": recipe
})
}

voodEasy('quark:bottled_cloud','alchemygadgetry:iron_supplements',1)
voodEasy('reactive:light_bottle','alchemygadgetry:eye_drops',2)
voodEasy('reactive:mind_bottle','alchemygadgetry:elixir',3)
voodEasy('reactive:body_bottle','alchemygadgetry:tonic',4)
voodEasy('reactive:verdant_bottle','alchemygadgetry:vitamins',5)
voodEasy('homespun:redstone_acid','alchemygadgetry:black_tea',6)
voodEasy('minecraft:honey_bottle','alchemygadgetry:antidote',7)
voodEasy('reactive:acid_bottle','alchemygadgetry:salve',8)

})