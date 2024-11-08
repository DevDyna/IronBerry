ServerEvents.recipes(event => {
//------------------------------------------------------------//	
	function tree(log,leaves,fluid,amount){
event.custom({
  "type": "thermal:tree_extractor",
  "trunk": log,
  "leaves": leaves,
  "result": {
    "fluid": fluid,
    "amount": amount
  }
})
}
//------------------------------------------------------------//
function easywood(mod,woodtype,fluid,amount){
tree(mod+':'+woodtype+'_log',mod+':'+woodtype+'_leaves',fluid,amount)	
}
//------------------------------------------------------------//
easywood('minecraft','acacia',"thermal:resin",100)
easywood('minecraft','oak','thermal:sap',100)
easywood('minecraft','jungle','thermal:latex',100)
easywood('thermal','rubberwood','thermal:latex',100)

//demo//
easywood('minecraft','dark_oak','pneumaticcraft:oil',100)
easywood('minecraft','spruce','pneumaticcraft:biodiesel',100)
easywood('minecraft','birch','pneumaticcraft:ethanol',100)




	
})








