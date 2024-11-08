ServerEvents.highPriorityData((event) => {
  [
    "blaze_gate",
    "blaze_gate_large",
    "blaze_gate_small",
    "creeper_gate",
    "creeper_gate_large",
    "creeper_gate_small",
    "enderman_gate",
    "enderman_gate_large",
    "enderman_gate_small",
    "ghast_gate",
    "ghast_gate_large",
    "ghast_gate_small",
    "magma_cube_gate",
    "magma_cube_gate_large",
    "magma_cube_gate_small",
    "shulker_gate",
    "shulker_gate_large",
    "shulker_gate_small",
    "skeleton_gate",
    "skeleton_gate_large",
    "skeleton_gate_small",
    "slime_gate",
    "slime_gate_large",
    "slime_gate_small",
    "spider_gate",
    "spider_gate_large",
    "spider_gate_small",
    "witch_gate",
    "witch_gate_large",
    "witch_gate_small",
    "zombie_gate",
    "zombie_gate_large",
    "zombie_gate_small",
  ].forEach((data) => {
    event.addJson(`gateways:gateways/${data}`, {});
  });

  //made for Ironberry Modpack
  event.addJson(`gateways:gateways/battle_gate_large`, {
    size: "large",
    color: "#A830EE",
    waves: [
      {
        entities: [
          {
            entity: "twilightforest:redcap",
          },
          {
            entity: "twilightforest:redcap",
          },
          {
            entity: "twilightforest:redcap",
          },
          {
            entity: "twilightforest:redcap",
          },
          {
            entity: "twilightforest:redcap_sapper",
          },
          {
            entity: "twilightforest:redcap_sapper",
          },
          {
            entity: "twilightforest:redcap_sapper",
          },
          {
            entity: "twilightforest:redcap_sapper",
          },
          {
            entity: "twilightforest:carminite_broodling",
            nbt: {},
          },
          {
            entity: "twilightforest:carminite_broodling",
            nbt: {},
          },
          {
            entity: "twilightforest:carminite_broodling",
            nbt: {},
          },
          {
            entity: "twilightforest:carminite_broodling",
            nbt: {},
          },
          {
            entity: "twilightforest:carminite_broodling",
            nbt: {},
          },
          {
            entity: "twilightforest:king_spider",
            nbt: {},
          },
          {
            entity: "twilightforest:skeleton_druid",
            nbt: {
              HandItems: [
                {
                  id: "minecraft:golden_hoe",
                  Count: 1,
                },
                {},
              ],
              ArmorItems: [
                {},
                {},
                {},
                {
                  id: "twilightforest:steeleaf_helmet",
                  Count: 1,
                },
              ],
            },
          },
          {
            entity: "twilightforest:skeleton_druid",
            nbt: {
              HandItems: [
                {
                  id: "minecraft:golden_hoe",
                  Count: 1,
                },
                {},
              ],
              ArmorItems: [
                {},
                {},
                {},
                {
                  id: "twilightforest:steeleaf_helmet",
                  Count: 1,
                },
              ],
            },
          },
          {
            entity: "twilightforest:skeleton_druid",
            nbt: {
              HandItems: [
                {
                  id: "minecraft:golden_hoe",
                  Count: 1,
                },
                {},
              ],
              ArmorItems: [
                {},
                {},
                {},
                {
                  id: "twilightforest:steeleaf_helmet",
                  Count: 1,
                },
              ],
            },
          },
          {
            entity: "twilightforest:skeleton_druid",
            nbt: {
              HandItems: [
                {
                  id: "minecraft:golden_hoe",
                  Count: 1,
                },
                {},
              ],
              ArmorItems: [
                {},
                {},
                {},
                {
                  id: "twilightforest:steeleaf_helmet",
                  Count: 1,
                },
              ],
            },
          },
          {
            entity: "twilightforest:swarm_spider",
            nbt: {},
          },
          {
            entity: "twilightforest:swarm_spider",
            nbt: {},
          },
          {
            entity: "twilightforest:swarm_spider",
            nbt: {},
          },
          {
            entity: "twilightforest:swarm_spider",
            nbt: {},
          },
          {
            entity: "twilightforest:swarm_spider",
            nbt: {},
          },
          {
            entity: "twilightforest:swarm_spider",
            nbt: {},
          },
          {
            entity: "twilightforest:kobold",
          },
        ],
        rewards: [
          {
            type: "loot_table",
            loot_table: "ironberry:gateway/battle_loot",
            rolls: 1,
            desc: "Loot Battle",
          },
        ],
        max_wave_time: 3600,
        setup_time: 150,
      },
      {
        entities: [
          {
            entity: "twilightforest:death_tome",
          },
          {
            entity: "twilightforest:death_tome",
          },
          {
            entity: "twilightforest:death_tome",
          },
          {
            entity: "twilightforest:death_tome",
          },
          {
            entity: "twilightforest:wraith",
          },
          {
            entity: "twilightforest:wraith",
          },
          {
            entity: "twilightforest:lower_goblin_knight",
          },
          {
            entity: "twilightforest:lower_goblin_knight",
          },
          {
            entity: "twilightforest:minoshroom",
          },
          {
            entity: "twilightforest:minotaur",
          },
          {
            entity: "quark:foxhound",
          },
        ],
        rewards: [
          {
            type: "loot_table",
            loot_table: "ironberry:gateway/battle_loot",
            rolls: 4,
            desc: "Loot Battle",
          },
        ],
        max_wave_time: 7200,
        setup_time: 150,
      },
      {
        entities: [
          {
            entity: "quark:forgotten",
          },
          {
            entity: "ars_nouveau:wilden_stalker",
          },
          {
            entity: "ars_nouveau:wilden_guardian",
          },
          {
            entity: "ars_nouveau:wilden_hunter",
          },
          {
            entity: "quark:wraith",
          },
          {
            entity: "twilightforest:unstable_ice_core",
          },
          {
            entity: "twilightforest:ice_crystal",
          },
          {
            entity: "twilightforest:stable_ice_core",
          },
          {
            entity: "twilightforest:snow_guardian",
          },
          {
            entity: "twilightforest:knight_phantom",
          },
          {
            entity: "twilightforest:knight_phantom",
          },
          {
            entity: "twilightforest:knight_phantom",
          },
          {
            entity: "twilightforest:knight_phantom",
          },
          {
            entity: "twilightforest:knight_phantom",
          },
          {
            entity: "twilightforest:knight_phantom",
          },
        ],
        rewards: [
          {
            type: "loot_table",
            loot_table: "ironberry:gateway/battle_loot",
            rolls: 8,
            desc: "Loot Battle",
          },
        ],
        max_wave_time: 14400,
        setup_time: 150,
      },
      {
        entities: [
          {
            entity: "twilightforest:winter_wolf",
          },
          {
            entity: "twilightforest:winter_wolf",
          },
          {
            entity: "twilightforest:winter_wolf",
          },
          {
            entity: "twilightforest:winter_wolf",
          },
          {
            entity: "twilightforest:carminite_golem",
          },
          {
            entity: "twilightforest:carminite_golem",
          },
          {
            entity: "twilightforest:carminite_golem",
          },
          {
            entity: "twilightforest:lich",
          },
          {
            entity: "thermal:basalz",
          },
          {
            entity: "thermal:basalz",
          },
          {
            entity: "thermal:basalz",
          },
          {
            entity: "thermal:blitz",
          },
          {
            entity: "thermal:blitz",
          },
          {
            entity: "thermal:blitz",
          },
          {
            entity: "minecraft:blaze",
          },
          {
            entity: "minecraft:blaze",
          },
          {
            entity: "minecraft:blaze",
          },
          {
            entity: "thermal:blizz",
          },
          {
            entity: "thermal:blizz",
          },
          {
            entity: "thermal:blizz",
          },
        ],
        rewards: [
          {
            type: "loot_table",
            loot_table: "ironberry:gateway/battle_loot",
            rolls: 16,
            desc: "Loot Battle",
          },
        ],
        max_wave_time: 14400,
        setup_time: 150,
      },
    ],
    rewards: [
      {
        type: "loot_table",
        loot_table: "ironberry:gateway/battle_loot",
        rolls: 24,
        desc: "Loot Battle",
      },
    ],
    completion_xp: 4000,
    spawn_range: 10,
  });
});
