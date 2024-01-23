ServerEvents.recipes(event => {

    function EnApp(core, input, output, source, nbt) {
    let ingredients = []
    for (let i = 0; i < input.length; i++) {
		ingredients.push(ItemOrTag(input[i]))
    }
	let item_core = []
	item_core.push(ItemOrTag(core))
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": nbt,
        "output": {
            "item": output
        },
        "pedestalItems": ingredients,
        "reagent": item_core,
        "sourceCost": source
    })
}

//EnApp(input-itemstack,input-itemstack[],output-itemstack,source-integer,nbtflag-boolean)


EnApp('minecraft:lectern',['kubejs:scroll_discontinuity','minecraft:bookshelf','minecraft:bookshelf','minecraft:bookshelf','minecraft:bookshelf'],'ars_nouveau:storage_lectern',1000,false)
EnApp('minecraft:glass_bottle',['reactive:stardust','reactive:stardust','reactive:stardust','reactive:stardust'],'ars_nouveau:jar_of_light',1000,false)
EnApp('minecraft:glass_bottle',['cyclic:trash','ars_nouveau:deny_scroll','ars_nouveau:allow_scroll'],'ars_nouveau:void_jar',1000,false)
EnApp('ars_nouveau:warp_scroll',['ars_nouveau:sourcestone','ars_nouveau:sourcestone','ars_nouveau:sourcestone','ars_nouveau:sourcestone','ars_nouveau:sourcestone','ars_nouveau:sourcestone','ars_nouveau:sourcestone','ars_nouveau:sourcestone'],'ars_nouveau:stable_warp_scroll',0,true)
EnApp('ars_nouveau:source_gem_block',['minecraft:observer','minecraft:gold_nugget','minecraft:gold_nugget'],'ars_nouveau:scryers_oculus',0,false)
EnApp('ars_nouveau:potion_flask',['minecraft:potion','minecraft:potion','minecraft:potion','minecraft:potion'],'ars_nouveau:potion_flask_extend_time',1000,true)
EnApp('ars_nouveau:potion_flask',['minecraft:honey_bottle','minecraft:honey_bottle','minecraft:honey_bottle','minecraft:honey_bottle'],'ars_nouveau:potion_flask_amplify',1000,true)
EnApp('alchemygadgetry:potion_flask',['ars_nouveau:source_gem_block','minecraft:gold_block'],'ars_nouveau:potion_flask',0,false)
EnApp('ars_nouveau:splash_flask_cannon',['reactive:stardust','minecraft:feather','reactive:stardust'],'ars_nouveau:lingering_flask_cannon',1000,false)

EnApp('ars_nouveau:mundane_belt',['tombstone:lollipop','tombstone:lollipop','tombstone:lollipop','tombstone:lollipop','tombstone:lollipop','tombstone:lollipop','tombstone:lollipop','tombstone:lollipop'],'ars_nouveau:belt_of_unstable_gifts',0,false)
EnApp('ars_nouveau:mundane_belt',['ars_nouveau:end_fiber','ars_nouveau:blaze_fiber','ars_nouveau:end_fiber','ars_nouveau:blaze_fiber','ars_nouveau:end_fiber','ars_nouveau:blaze_fiber','ars_nouveau:end_fiber','ars_nouveau:blaze_fiber'],'ars_nouveau:belt_of_levitation',0,false)
EnApp('ars_nouveau:blank_glyph',['ars_nouveau:wixie_shards', 'ars_nouveau:wilden_horn', 'ars_nouveau:experience_gem', 'ars_nouveau:wilden_wing', 'ars_nouveau:greater_experience_gem', 'ars_nouveau:drygmy_shard', 'ars_nouveau:whirlisprig_shards', 'ars_nouveau:wilden_spike'],'ars_nouveau:drygmy_charm',0,false)

EnApp('alchemygadgetry:potion_flask',['ars_nouveau:source_jar'],'ars_nouveau:potion_jar',0,false)

EnApp('ars_nouveau:ritual_brazier',['ars_nouveau:relay','ars_nouveau:relay','ars_nouveau:relay','ars_nouveau:relay'],'ars_nouveau:brazier_relay',0,false)

EnApp('ars_nouveau:relay_splitter',['ars_nouveau:relay','ars_nouveau:relay','ars_nouveau:relay','ars_nouveau:relay','ars_nouveau:relay','ars_nouveau:relay','ars_nouveau:relay','ars_nouveau:relay'],'ars_nouveau:relay_warp',0,false)
EnApp('ars_nouveau:relay',['ars_nouveau:relay_collector','ars_nouveau:relay_deposit'],'ars_nouveau:relay_splitter',1000,false)
EnApp('ars_nouveau:potion_diffuser',['alchemygadgetry:potion_flask','ars_nouveau:potion_jar','ars_nouveau:source_jar','ars_nouveau:potion_jar'],'ars_nouveau:potion_melder',0,false)

EnApp('ars_nouveau:blank_parchment',['tombstone:strange_scroll','tombstone:strange_scroll','tombstone:strange_scroll','tombstone:strange_scroll'],'ars_nouveau:blank_glyph',0,false)



EnApp('ars_nouveau:source_gem_block',['ars_nouveau:arcane_pedestal','ars_nouveau:arcane_pedestal','ars_nouveau:arcane_pedestal','ars_nouveau:arcane_pedestal'],'ars_nouveau:ritual_brazier',0,false)

EnApp('jetboots:armor_core',['#minecraft:wool','#minecraft:wool','#minecraft:wool','#minecraft:wool'],'jetboots:shock_absorber_upgrade',1000,false)
EnApp('ars_nouveau:mundane_belt',['ars_nouveau:belt_of_unstable_gifts','ars_nouveau:belt_of_levitation'],'ars_nouveau:jump_ring',1000,false)
EnApp('minecraft:gold_block',['minecraft:coal','minecraft:coal','minecraft:coal','minecraft:coal','minecraft:coal','minecraft:coal','minecraft:coal','minecraft:coal'],'jetboots:armor_core',1000,false)
EnApp('restrictions:glassboots',['ars_nouveau:jump_ring','ars_nouveau:jump_ring','jetboots:armor_core','jetboots:armor_core'],'jetboots:rocket_boots',1000,false)

EnApp('minecraft:golden_apple',['quark:golden_apple_crate', 'quark:golden_apple_crate', 'quark:golden_apple_crate', 'quark:golden_apple_crate', 'quark:golden_apple_crate', 'quark:golden_apple_crate', 'quark:golden_apple_crate', 'quark:golden_apple_crate'],'minecraft:enchanted_golden_apple',10000,false)










})
