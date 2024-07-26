// ServerEvents.highPriorityData((event) => {
//   function addItem(name) {
//     return {
//       type: "minecraft:item",
//       name: name,
//       weight: 10,
//     };
//   }

//   let dlist = [[], [], []];
//   global.fishing.forEach((el, index) => {
//     el.forEach((item) => {
//       dlist[index].push(addItem(item));
//     });
//   });
//   let extra = [
//     {
//       type: "minecraft:item",
//       functions: [
//         {
//           function: "minecraft:enchant_with_levels",
//           levels: 30.0,
//           treasure: true,
//         },
//       ],
//       name: "minecraft:book",
//       weight: 1,
//     },
//     {
//       type: "minecraft:item",
//       functions: [
//         {
//           function: "minecraft:set_potion",
//           id: "minecraft:water",
//         },
//       ],
//       name: "minecraft:potion",
//       weight: 1,
//     },
//     {
//       type: "minecraft:item",
//       functions: [
//         {
//           add: false,
//           damage: {
//             type: "minecraft:uniform",
//             max: 0.9,
//             min: 0.0,
//           },
//           function: "minecraft:set_damage",
//         },
//       ],
//       name: "minecraft:fishing_rod",
//       weight: 1,
//     },
//     {
//       type: "minecraft:item",
//       functions: [
//         {
//           add: false,
//           damage: {
//             type: "minecraft:uniform",
//             max: 0.9,
//             min: 0.0,
//           },
//           function: "minecraft:set_damage",
//         },
//       ],
//       name: "minecraft:leather_boots",
//       weight: 1,
//     },
//   ];

//   extra.forEach((ex) => {
//     dlist[2].push(ex);
//   });

//   event.addJson("minecraft:gameplay/fishing/fish", {
//     type: "minecraft:fishing",
//     pools: [
//       {
//         bonus_rolls: 0.0,
//         entries: dlist[0],
//         rolls: {
//           min: 1,
//           max: 6,
//         },
//       },
//     ],
//   });

//   event.addJson("minecraft:gameplay/fishing/junk", {
//     type: "minecraft:fishing",
//     pools: [
//       {
//         bonus_rolls: 0.0,
//         entries: dlist[1],
//         rolls: {
//           min: 1,
//           max: 4,
//         },
//       },
//     ],
//   });

//   event.addJson("minecraft:gameplay/fishing/treasure", {
//     type: "minecraft:fishing",
//     pools: [
//       {
//         bonus_rolls: 0.0,
//         entries: dlist[2],
//         rolls: {
//           min: 1,
//           max: 2,
//         },
//       },
//     ],
//   });

//   event.addJson("minecraft:gameplay/fishing", {
//     type: "minecraft:fishing",
//     pools: [
//       {
//         bonus_rolls: 0.0,
//         entries: [
//           {
//             type: "minecraft:loot_table",
//             name: "minecraft:gameplay/fishing/junk",
//             weight: 10,
//           },
//           {
//             type: "minecraft:loot_table",
//             name: "minecraft:gameplay/fishing/treasure",
//             weight: 10,
//           },
//           {
//             type: "minecraft:loot_table",
//             name: "minecraft:gameplay/fishing/fish",
//             weight: 10,
//           },
//         ],
//         rolls: 1.0,
//       },
//     ],
//   });
// });
