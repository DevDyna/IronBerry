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
easywood('minecraft','acacia',"thermal:resin",1000)
easywood('minecraft','oak','thermal:sap',1000)
easywood('minecraft','jungle','thermal:latex',1000)
easywood('thermal','rubberwood','thermal:latex',1000)

//demo//
easywood('minecraft','dark_oak','pneumaticcraft:oil',1000)
easywood('minecraft','spruce','pneumaticcraft:biodiesel',1000)
easywood('minecraft','birch','pneumaticcraft:ethanol',1000)




	
})








