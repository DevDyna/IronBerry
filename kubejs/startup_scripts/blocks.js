StartupEvents.registry("block", (event) => {
  //blank block
  event
    .create("blank")
    .soundType("chain")
    .hardness(1.0)
    .displayName("Plated Casing")
    .textureAll("prettypipes:block/item_terminal_top");

  event
    .create("casing")
    .soundType("chain")
    .hardness(1.1)
    .displayName("Rustic Core")
    .model("ironberry:block/rustic");

  event
    .create("machine")
    .soundType("chain")
    .hardness(0.95)
    .displayName("Dark Casing")
    .textureAll("integrateddynamics:block/mechanical_squeezer_y");

  event
    .create("ancient_cobblestone")
    .soundType("stone")
    .hardness(1.0)
    .displayName("Ancient Cobblestone")
    .textureAll("ironberry:block/ancient_cobblestone");

  event
    .create("instability")
    .soundType("honey_block")
    .hardness(0.0)
    .displayName("🔥Instability🔥")
    .model("ironberry:block/instability")
    .noDrops();

  event
    .create("goth_machine_frame")
    .soundType("chain")
    .hardness(1.25)
    .displayName("Goth Machine Frame")
    .model("ironberry:block/deep_machine_frame");

  event
    .create("incompleted_machine_frame")
    .renderType("cutout")
    .defaultCutout()
    .soundType("chain")
    .hardness(0.75)
    .displayName("Machine Frame Mold")
    .model("ironberry:block/te_machine_frame");

  event
    .create("tungsten_carbide_block")
    .color(0, 0x5e5e5e)
    .model("ironberry:block/tinted")
    .defaultCutout()
    .item((item) => {
      item.color(0, 0x5e5e5e);
      item.parentModel("ironberry:block/tinted");
    });

  event.create("machine_base").soundType("chain").hardness(0.75).modelJson = {
    parent: "block/cube",
    textures: {
      particle: "thermal:block/machines/machine_side",
      down: "thermal:block/machines/machine_bottom",
      up: "thermal:block/machines/machine_top",
      north: "thermal:block/machines/machine_side",
      east: "thermal:block/machines/machine_side",
      south: "thermal:block/machines/machine_side",
      west: "thermal:block/machines/machine_side",
    },
  };

  let devices = [
    "smelter",
    "furnace",
    "bottler",
    "brewer",
    "centrifuge",
    "chiller",
    "crafter",
    "crucible",
    "crystallizer",
    "insolator",
    "press",
    "pulverizer",
    "pyrolyzer",
    "refinery",
    "sawmill",
  ];

  let side = [true, false];

  let TEmodel = (isTop, machine) => {
    return {
      parent: "block/block",
      textures: {
        side: "thermal:block/machines/machine_" + machine,
        down: !isTop
          ? "thermal:block/machines/machine_top"
          : "thermal:block/machines/machine_bottom",
        top: isTop
          ? "thermal:block/machines/machine_top"
          : "thermal:block/machines/machine_bottom",
        particle: "thermal:block/machines/machine_" + machine,
      },
      elements: [
        {
          from: [0, isTop ? 8 : 0, 0],
          to: [16, isTop ? 16 : 8, 16],
          faces: {
            north: {
              uv: isTop ? [0, 0, 16, 8] : [0, 8, 16, 16],
              texture: "#side",
            },
            east: {
              uv: isTop ? [0, 0, 16, 8] : [0, 8, 16, 16],
              texture: "#side",
            },
            south: {
              uv: isTop ? [0, 0, 16, 8] : [0, 8, 16, 16],
              texture: "#side",
            },
            west: {
              uv: isTop ? [0, 0, 16, 8] : [0, 8, 16, 16],
              texture: "#side",
            },
            up: { uv: [0, 0, 16, 16], texture: "#top" },
            down: { uv: [0, 0, 16, 16], texture: "#down" },
          },
        },
      ],
    };
  };

  side.forEach((sd) => {
    event
      .create("machine_frame_" + (sd ? "top" : "down"))
      .defaultCutout()
      .box(0, sd ? 8 : 0, 0, 16, sd ? 16 : 8, 16)
      .item((i) => {
        i.tooltip("§7Machine frame");
      })
      .soundType("chain")
      .hardness(0.75).modelJson = TEmodel(sd, "side");
  });

  devices.forEach((dec) => {
    side.forEach((sd) => {
      event
        .create(dec + "_machine_" + (sd ? "top" : "down"))
        .defaultCutout()
        .box(0, sd ? 8 : 0, 0, 16, sd ? 16 : 8, 16)
        .item((i) => {
          i.tooltip("§7" + dec.charAt(0).toUpperCase() + dec.slice(1));
        })
        .soundType("chain")
        .hardness(0.75)
        .displayName("Machine Part").modelJson = TEmodel(sd, dec);
    });
  });
});
