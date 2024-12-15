StartupEvents.registry("item", (event) => {
  event.create("scaffoldingdelta").texture("ironberry:item/sd");

  event.create("vanillaexpansion").texture("ironberry:item/ve");

  ////staff only
  event
    .create("wip")
    .texture("cofh_core:gui/icons/icon_cancel")
    .displayName("WorkInProgress");

  event
    .create("rose")
    .texture("ironberry:item/rose")
    //.displayName("Rose")
    .glow(true);

  //event.create("lore").texture("ironberry:item/lore").displayName("The LORE");

  event.create("raw_plastic").texture("ironberry:item/raw_plastic");
  //.displayName("Raw Plastic");

  //gems
  event.create("alpha").texture("ironberry:item/gems/alpha");
  //.displayName("Alpha");

  event.create("beta").texture("ironberry:item/gems/beta"); //.displayName("Beta");

  event.create("aquamarine").texture("ironberry:item/gems/aquamarine");
  //.displayName("Aquamarine");

  event.create("jade").texture("ironberry:item/gems/jade"); //.displayName("Jade");

  event.create("iolite").texture("ironberry:item/gems/iolite");
  //.displayName("Iolite");

  event.create("topaz").texture("ironberry:item/gems/topaz");
  //.displayName("Topaz");

  //grave guardian spawn
  event
    .create("grave_spawn")
    .texture("ironberry:item/grave_spawn_egg")
    .displayName("Grave Guardian Spawn Egg")
    .glow(true);

  event
    .create("scroll")
    .texture("ironberry:item/scroll")
    .displayName("Null Scroll");

  event
    .create("omni")
    .texture("ironberry:item/omni")
    .displayName("OmniTablet")
    .glow(true);

  event
    .create("redstone_circuit")
    .modelJson({
      parent: "minecraft:item/generated",
      textures: {
        layer0: "pneumaticcraft:item/printed_circuit_board",
        layer1: "ironberry:item/fancy_torches",
      },
    })
    .displayName("Redstonic PCB");

  event.create("iron_rod").texture("ironberry:item/iron_rod");
  //.displayName("Iron Rod");

  event.create("soul").texture("ironberry:item/soul").displayName("Soul jar");

  event.create("ice_shard").texture("ironberry:item/ice_shard");
  //.displayName("Ice Shard");

  event
    .create("ore_bone_meal")
    .texture("ironberry:item/ore_bone_meal")
    .displayName("§eMineral Fertilizer");

  event
    .create("rich_bone_meal")
    .texture("ironberry:item/rich_bone_meal")
    .displayName("§aRich Fertilizer");

  //temporarly added , maybe on a future will removed if added https://github.com/capnkirok/Inventory-Pets/issues/555
  event
    .create("illuminati")
    .texture("inventorypets:item/illuminati_new")
    .displayName("§dIlluminati Yota")
    .glow(true);

  event
    .create("pre_compressed")
    .texture("ironberry:item/pre_compressed")
    .displayName("Precompressed Iron Ingot");

  event
    .create("scroll_safety")
    .texture("ironberry:item/scroll_a")
    .displayName("Scroll of Safety")
    .glow(true);

  event
    .create("scroll_discontinuity")
    .texture("ironberry:item/scroll_b")
    .displayName("Scroll of Discontinuity")
    .glow(true);

  event.create("raw_iron_nugget").texture("ironberry:item/raw_iron_nugget");
  //.displayName("Raw Iron Nugget");

  event.create("raw_gold_nugget").texture("ironberry:item/raw_gold_nugget");
  //.displayName("Raw Gold Nugget");

  event.create("raw_copper_nugget").texture("ironberry:item/raw_copper_nugget");
  //.displayName("Raw Copper Nugget");

  event
    .create("processor")
    .texture("ironberry:item/processor")
    .displayName("Menril MicroProcessor Chip");

  event
    .create("ritual_tablet")
    .texture("ironberry:item/ritual_tablet")
    .displayName(" Empty Ritual Tablet");

  event.create("boss_trophy").texture("ironberry:item/boss_trophy");
  //.displayName("Boss Trophy");

  event.create("miniboss_trophy").texture("ironberry:item/miniboss_trophy");
  //.displayName("MiniBoss Trophy");

  event
    .create("speed_base")
    .texture("ironberry:item/speed_base")
    .displayName("Speed Upgrade Base");

  event
    .create("quantity_base")
    .texture("ironberry:item/quantity_base")
    .displayName("Quantity Upgrade Base");

  event
    .create("silicon_plated")
    .texture("ironberry:item/silicon_plate")
    .displayName("Siliconed Plastic Plate");

  event.create("patina").texture("ironberry:item/patina"); //.displayName("Patina");

  event
    .create("assembly_plate")
    .texture("ironberry:item/assembly_plate")
    .displayName("Programmable Printed Plate");

  event.create("printed_plate").texture("ironberry:item/printed_plate");
  //.displayName("Printed Plate");

  event
    .create("crook", "hoe")
    .parentModel("ironberry:item/crook")
    .unstackable()
    .texture("ironberry:item/crook")
    .displayName("Wooden Crook")
    .tier("iron")
    .tag("forge:shears")
    .maxDamage(2048);

  event
    .create("paxel", "paxel")
    .parentModel("ironberry:item/paxel")
    .unstackable()
    .texture("ironberry:item/paxel")
    .displayName("Pick-axe")
    .tier("iron")
    .maxDamage(16384)
    .tag("bookshelf:pickaxes")
    .tag("forge:tools/axes")
    .tag("forge:tools/pickaxes")
    .tag("forge:pickaxes");

  event
    .create("hammer", "pickaxe")
    .parentModel("quark:item/hammer")
    .unstackable()
    .texture("quark:item/hammer")
    .displayName("Heavy Hammer")
    .tier("iron")
    .maxDamage(2048);

  event
    .create("solidified_resin")
    .texture("ironberry:item/solidified_resin")
    .displayName("Solidified Refined Resin");

  event.create("plastic_mixture").texture("ironberry:item/plastic_mixture");
  //.displayName("Plastic Mixture");

  event.create("explosion").texture("pneumaticcraft:gui/jei/explosion");

  event
    .create("upgrade_template")
    .texture("ironberry:item/upgrade_template")
    .displayName("Upgrade Base");

  event
    .create("uranium")
    .texture("ironberry:item/uranium")
    .displayName("Radioactive Uranium");

  event
    .create("thorium")
    .texture("ironberry:item/thorium")
    .displayName("Radioactive Thorium");

  event.create("base_augment").texture("ironberry:item/base_augment");
  //.displayName("Base Augment");

  event.create("base_module").texture("ironberry:item/base_module");
  //.displayName("Base Module");

  event
    .create("floreal_bone_meal")
    .texture("ironberry:item/floreal_bone_meal")
    .displayName("§dFloreal Fertilizer");

  event
    .create("lupenio")
    .texture("ironberry:item/lupenio")
    .displayName("§aLupenio")
    .color(0, 0x1271ff);

  event
    .create("crystaltine")
    .texture("ironberry:item/crystaltine")
    //.displayName("Crystaltine")
    .glow(true);

  event
    .create("cell_base")
    .texture("expatternprovider:item/infinity_cell")
    .displayName("Infinity Cell Holder");

  event
    .create("arsenic_lupenio")
    .texture("ironberry:item/lupenio")
    .color(0, 0x12ffa9)
    //.displayName("Arsenic Lupenio")
    .glow(true);

  // event.create('garbage')
  // .texture('ironberry:item/garbage')
  // .displayName('Garbage')

  let types = ["cables", "cards", "misc", "ports", "access"];
  types.forEach((type) => {
    event
      .create("sack_" + type)
      .modelJson({
        parent: "supplementaries:block/sack_closed",
      })
      .displayName("Sack of " + type);
  });

  event
    .create("tiny_platinum_dust")
    .texture("ironberry:item/tiny_platinum_dust");
  //.displayName("Tiny pile of Platinum");

  event
    .create("pure_gem")
    .texture("ironberry:item/lupenio")
    .displayName("§bPure Gem");

  event.create("holder").texture("ironberry:item/holder");

  event
    .create("net")
    .parentModel("ironberry:item/net")
    .unstackable()
    .texture("ironberry:item/net")
    .displayName("Bee Net");

  event
    .create("manganese_nugget")
    .texture("thermal:item/invar_nugget")
    .color(0, 0xa1ace2);

  event
    .create("mini_pellet")
    .texture("ironberry:item/mini_pellet")
    .displayName("Mini Fuel Pellet");

  event
    .create("base_tank")
    .modelJson({
      parent: "mekanism:block/chemical_tank/base",
      textures: { valve: "ironberry:item/valve" },
    })
    .displayName("Chemical Tank");

  event.create("glicetanole").texture("ironberry:item/glicetanole");

  event
    .create("tungsten_plate")
    .texture("ironberry:item/tungsten_plate")
    .displayName("Tungsten Carbide plate");

  event
    .create("lucky")
    .displayName("§1Lucky Augment")
    .modelJson({
      parent: "minecraft:item/handheld",
      textures: {
        layer0: "thermal:item/augments/creative_augment_base",
        layer1: "thermal:item/gold_coin_4",
      },
    }); //give @p kubejs:lucky{AugmentData:{MachineSec:0.75,MachineEnergy:1.5}}

  event
    .create("sonic")
    .displayName("§aSonic Augment")
    .modelJson({
      parent: "minecraft:item/handheld",
      textures: {
        layer0: "thermal:item/augments/creative_augment_base",
        layer1: "minecraft:mob_effect/speed",
      },
    }); ///give @p kubejs:sonic{AugmentData:{MachineEnergy:10,MachinePower:49}}

  event
    .create("powah")
    .displayName("§cOver-Powah Augment")
    .modelJson({
      parent: "minecraft:item/handheld",
      textures: {
        layer0: "thermal:item/augments/creative_augment_base",
        layer1: "ironberry:item/energy_augment",
      },
    }); //give @p kubejs:powah{AugmentData:{RFMax:1250,RFXfer:32000}}

  event
    .create("scale")
    .displayName("§eE-scale-tor Augment")
    .modelJson({
      parent: "minecraft:item/handheld",
      textures: {
        layer0: "thermal:item/augments/creative_augment_base",
        layer1: "thermaloot:item/shell",
        layer2: "thermaloot:item/cell",
      },
    }); //give @p kubejs:scale{AugmentData:{BaseMod:32,MachineEnergy:1.5}}

  event.create("augment_base").texture("thermal:item/augments/augment_base");

  event
    .create("creative_augment_base")
    .texture("thermal:item/augments/creative_augment_base");

  event
    .create("stone_plate")
    .texture("ironberry:item/stone_plate")
    .displayName("Stele of my patience")
    .tooltip("Dedicated at all §acomplelty broken mods");

  event.create("crude_invar").texture("mekanism:item/ingot").color(0, 0x91afae);

  event
    .create("crude_bronze")
    .texture("mekanism:item/ingot")
    .color(0, 0xffe394);

  event
    .create("crude_black_iron")
    .texture("mekanism:item/ingot")
    .color(0, 0x4e4e4e);

  event
    .create("ironberry_final_cake")
    .texture("ironberry:item/cake/done")
    .food((f) => {
      f.alwaysEdible();
      f.hunger(90);
      f.saturation(90);
    });
  event
    .create("ironberry_final_cake_base")
    .texture("ironberry:item/cake/base")
    .food((f) => {
      f.effect("minecraft:hunger", 40, 2, 0.8);
    });
  event
    .create("magical_cherry")
    .texture("ironberry:item/cake/cherry")
    .glow(true)
    .food((f) => {
      f.alwaysEdible();
      f.hunger(1);
      f.saturation(1);
      f.effect("minecraft:speed", 120, 1, 1);
      f.effect("minecraft:glowing", 120, 1, 1);
      f.effect("ars_nouveau:blasting", 20, 2, 0.2);
    });

  event.create("biofuel").texture("thermal:item/biomass");

  event
    .create("meltio_clump")
    .texture("mekanism:item/clump")
    .color(0, 0xd5a535);
  event
    .create("ainiotzio_crystal")
    .texture("mekanism:item/crystal")
    .color(0, 0x4b514e);
  event
    .create("densio_clump")
    .texture("mekanism:item/clump")
    .color(0, 0x2328bd);
  event
    .create("prosperitio_crystal")
    .texture("mekanism:item/crystal")
    .color(0, 0xd1d1d1);

  let casts = ["blank", "clump", "crystal", "dust", "gem", "shard"];

  casts.forEach((e) => {
    event
      .create(e + "_cast")
      .texture("ironberry:item/press/" + e)
      .tag("thermal:crafting/casts");
  });

  let colors = [0x989f85, 0x9fd9eb, 0x1d2421, 0x868782, 0x3bb23b, 0xefabf6];
  let ingots = ["tin", "osmium", "thorium", "boron", "uranium", "magnesium"];

  ingots.forEach((e, i) => {
    event
      .create(e + "_shard")
      .texture("mekanism:item/shard")
      .color(0, colors[i]);
  });

  event.create("quartz_mixture").texture("ironberry:item/quartz_mixture");

  event
    .create("purple_alloy_nugget")
    .texture("thermal:item/invar_nugget")
    .color(0, 0xbe5fee);

  event
    .create("red_alloy_nugget")
    .texture("thermal:item/invar_nugget")
    .color(0, 0xf0394c);

  event
    .create("blue_alloy_nugget")
    .texture("thermal:item/invar_nugget")
    .color(0, 0x739bf9);

  //base bee
  event.create("bee").parentModel("ironberry:item/bee/drone");

  // let bee_name = [
  //   "common",       //base
  //   "variant",      //base
  //   "cultivated",   //common + flower + variant
  //   "rebel",        //common + flower + variant
  //   "pale",         //cultivated + berries + common
  //   "reddish",      //cultivated + berries + common
  //   "oscure",       //cultivated + berries + common
  // ];
  // "glowing",      //cultivated + glow + common
  // "sarcastic",    //cultivated + iron + common
  // "sweet",        //cultivated + sweet + common
  // "lucent",       //cultivated + berries + common
  // "pure",         //cultivated + berries + common

  let copy_bee_name = global.bee.name;

  // [eyes,body]
  let bee_colors = [
    [0x7cc9d1, 0xffec69],
    [0x83c6de, 0xbfff69],
    [0xf22749, 0x6996ff],
    [0x8c69ff, 0xff69e7],
    [0xde4a80, 0xbfbbca],
    [0xebeb42, 0xeb8642],
    [0xe5e0d6, 0x616155],
  ];

  let bee_registred = [];

  copy_bee_name.forEach((name, name_i) => {
    event
      .create(name + "_beewax")
      .texture("ironberry:item/bee/beewax")
      .color(0, bee_colors[name_i][1]);
    event
      .create(name + "_droplet")
      .texture("ironberry:item/bee/droplet")
      .color(0, bee_colors[name_i][1])
      .color(0, bee_colors[name_i][0]);

    event
      .create("bee_" + name + "_drone")
      .color(0, bee_colors[name_i][0])
      .color(1, bee_colors[name_i][1])
      .texture("layer0", "ironberry:item/bee/eyes/full")
      .texture("layer1", "ironberry:item/bee/head/full")
      .tag("ironberry:bees")
      .tag("ironberry:bee/" + name)
      .displayName(Nominator(name) + " " + Nominator("drone"));

    event
      .create("bee_" + name + "_queen")
      .color(0, bee_colors[name_i][0])
      .color(1, bee_colors[name_i][1])
      .texture("layer0", "ironberry:item/bee/eyes/full")
      .texture("layer1", "ironberry:item/bee/head/full")
      .texture("layer2", "ironberry:item/bee/crown")
      .tag("ironberry:bees")
      .tag("ironberry:bee/queen")
      .tag("ironberry:bee/" + name)
      .displayName(Nominator(name) + " " + Nominator("queen"));

    event
      .create("bee_unknown_" + name)
      .color(0, bee_colors[name_i][0])
      .color(1, bee_colors[name_i][1])
      //.color(2, 0xc51527)
      .texture("layer0", "ironberry:item/bee/eyes/full")
      .texture("layer1", "ironberry:item/bee/head/full")
      .texture("layer2", "ironberry:item/bee/unknown/blue")
      .tag("ironberry:bees")
      .tag("ironberry:bee/unknown")
      .displayName(Nominator("unknown") + " " + Nominator(name));

    global.bee.name.forEach((subname, sub_i) => {
      if (
        bee_registred.indexOf(name + "_" + subname) == -1 &&
        bee_registred.indexOf(subname + "_" + name) == -1 &&
        subname != name
      ) {
        bee_registred.push(name + "_" + subname);

        event
          .create("bee_" + name + "_" + subname + "_unknown")
          .color(0, bee_colors[name_i][0])
          .color(1, bee_colors[name_i][1])
          .color(2, bee_colors[sub_i][0])
          .color(3, bee_colors[sub_i][1])
          //.color(4, 0x0076ff)
          .texture("layer0", "ironberry:item/bee/eyes/right")
          .texture("layer1", "ironberry:item/bee/head/right")
          .texture("layer2", "ironberry:item/bee/eyes/left")
          .texture("layer3", "ironberry:item/bee/head/left")
          .texture("layer4", "ironberry:item/bee/unknown/red")
          .displayName("Mixed Unknown Bee")
          .tag("ironberry:bees")
          .tag("ironberry:bee/mixed")
          .tag("ironberry:bee/mixed/" + name)
          .tag("ironberry:bee/mixed/" + name + "/" + subname)
          .tooltip(Nominator(name) + " + " + Nominator(subname));
      }
    });
  });

  function Nominator(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
});
