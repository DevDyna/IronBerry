//priority 99999
const data = {

    block: {
        tombstone: [],
        leaves: [],
        crops: [],
        wild_crops: [],
        soils: [],
        deepslate_ores: {
            name: [],
            chance: []
        }
    },

    item: {
        tablet: []
    }

}

/* 
data.entity.banned = [
    'minecraft:zombie',
    'minecraft:creeper',
    'minecraft:skeleton',
    'minecraft:spider',
    'minecraft:enderman',
    'minecraft:witch',
    'minecraft:drowned',
    'minecraft:phantom',
    'minecraft:slime',
    'minecraft:husk',
    'minecraft:pillager',
    'minecraft:endermite',
    'minecraft:zombie_villager',
    'minecraft:stray',
    'minecraft:cat',
    'minecraft:cow',
    'minecraft:sheep',
    'minecraft:horse',
    'minecraft:pig',
    'minecraft:axolotl',
    'minecraft:cod',
    'minecraft:salmon',
    'minecraft:dolphin',
    'minecraft:donkey',
    'minecraft:frog',
    'minecraft:fox',
    'minecraft:glow_squid',
    'minecraft:goat',
    'minecraft:llama',
    'minecraft:mooshroom',
    'minecraft:ocelot',
    'minecraft:parrot',
    'minecraft:panda',
    'minecraft:pufferfish',
    'minecraft:tropical_fish',
    'minecraft:rabbit',
    'minecraft:squid',
    'minecraft:turtle',
    'minecraft:wolf',
    'minecraft:chicken',
    'minecraft:wandering_trader',
    'minecraft:trader_llama',
	'supplementaries:red_merchant',
] */

data.block.deepslate_ores.name = [
    'minecraft:deepslate_coal_ore',
    'minecraft:deepslate_iron_ore',
    'minecraft:deepslate_redstone_ore',
    'minecraft:deepslate_copper_ore',
    'minecraft:deepslate_gold_ore',
    'minecraft:deepslate_emerald_ore',
]

data.block.deepslate_ores.chance = [
    32,
    16,
    8,
    24,
    16,
    1,
]

data.block.soils = [
    'essentials:fertile_soil_berry',
    'essentials:fertile_soil_red_mushroom',
    'essentials:fertile_soil_netherwart',
    'essentials:fertile_soil_beetroot',
    'essentials:fertile_soil_spruce',
    'essentials:fertile_soil_brown_mushroom',
    'essentials:fertile_soil_potato',
    'essentials:fertile_soil_oak',
    'essentials:fertile_soil_wheat',
    'essentials:fertile_soil_birch',
    'essentials:fertile_soil_acacia',
    'essentials:fertile_soil_jungle',
    'essentials:fertile_soil_dark_oak',
    'essentials:fertile_soil_carrot']
