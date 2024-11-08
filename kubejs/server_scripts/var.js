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
        },
        sculk : [],
        flowers:[]
    },

    item: {
        tablet: [],
        music_discs:[]
    },
    recipes:{
        induction:[]
    }

}

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