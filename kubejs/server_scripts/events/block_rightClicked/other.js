//############################### PHOENIX EGG DUPE ##########################//
BlockEvents.rightClicked("exoticbirds:phoenix_egg", (event) => {
  if (
    event.item === "tiab:time_in_a_bottle" &&
    event.player.isCrouching()
  ) {
    event.cancel();
    setCancellationResult(true);
  }
});
//############################### SOUL FILLER ##########################//
BlockEvents.rightClicked((event) => {
  if (
    Feach(event.block, data.block.tombstone) &&
    event.player.mainHandItem.id === "kubejs:soul"
  ) {
    event.player.swing();

    let $facing = event.block.properties.get("facing");
    let $is_engraved = event.block.properties.get("is_engraved");
    let $model_texture = event.block.properties.get("model_texture");
    let $waterlogged = event.block.properties.get("waterlogged");
    let $soul_type = "";

    if (event.block.properties.get("soul_type") === "weak") {
      $soul_type = "none";
    }

    if (event.block.properties.get("soul_type") === "strong") {
      $soul_type = "weak";
    }

    if ($soul_type != "") {
      event.block.set(event.block.id, {
        soul_type: $soul_type,
        waterlogged: $waterlogged,
        facing: $facing,
        is_engraved: $is_engraved,
        model_texture: $model_texture,
      });
      Utils.server.runCommandSilent(
        `/particle minecraft:witch ${event.block.x} ${event.block.y + 1} ${
          event.block.z
        } 0 0 0 0.5 100`
      );
      let inv = event.player.inventory;
      if (!event.player.isCreative()) {
        inv.extractItem(inv.find("kubejs:soul"), 1, false);
      }
      event.player.give("tombstone:soul_receptacle");
    }
  }
});

//############################### disabled strippers ##########################//
BlockEvents.rightClicked("integrateddynamics:menril_wood", (event) => {
  if (event.item.hasTag("forge:tools/axes")) {
    event.cancel();
    setCancellationResult(true);
  }
});
//############################### pedestal break shortcut ##########################//
BlockEvents.rightClicked("pedestals:block_pedestal", (event) => {
  if (event.item.hasTag("forge:tools/pickaxes")) {
    if (event.item.getMaxDamage() == event.item.getDamageValue()) {
      event.player.inventory.extractItem(
        event.player.inventory.find(event.item.id),
        1,
        false
      );
    } else {
      event.item.setDamageValue(event.item.getDamageValue() + 1);
    }
    Utils.server.runCommandSilent(
      `/setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:air destroy`
    );
  }
});
//############################### patina ##########################//
BlockEvents.rightClicked((event) => {
  [
    "minecraft:oxidized_copper",
    "minecraft:oxidized_cut_copper",
    "minecraft:oxidized_cut_copper_stairs",
    "minecraft:oxidized_cut_copper_slab",
    "quark:oxidized_cut_copper_vertical_slab",
    "minecraft:weathered_copper",
    "minecraft:weathered_cut_copper",
    "minecraft:weathered_cut_copper_stairs",
    "minecraft:weathered_cut_copper_slab",
    "quark:weathered_cut_copper_vertical_slab",
    "minecraft:exposed_copper",
    "minecraft:exposed_cut_copper",
    "minecraft:exposed_cut_copper_stairs",
    "minecraft:exposed_cut_copper_slab",
    "quark:exposed_cut_copper_vertical_slab",
  ].forEach((b) => {
    if (event.block.id == b && event.item.hasTag("forge:tools/axes")) {
      let compost = event.block.createEntity("item");
      compost.y += 0.5;
      compost.x += 0.5;
      compost.z += 0.5;
      compost.item = Item.of("kubejs:patina");
      compost.item.count = rnd(1, 4);
      compost.spawn();
    }
  });
});
//############################### GRAVE GUARDIAN ##########################//
BlockEvents.rightClicked((event) => {
  let item = event.getItem();
  let inv = event.player.inventory;

  if (inv.count(item) && event.player.mainHandItem == "kubejs:grave_spawn") {
    event.player.swing();

    if (!event.block.hasTag("ironberry:egg_blacklist")) {
      let compost = event.level.createEntity("tombstone:grave_guardian");
      compost.y = event.block.y + 1;
      compost.x = event.block.x + 0.5;
      compost.z = event.block.z + 0.5;
      compost.mergeNbt({});
      compost.spawn();
    }

    if (!event.player.isCreative()) {
      inv.extractItem(inv.find("kubejs:grave_spawn"), 1, false);
    }
  }
});
//############################### BEE SPAWN ##########################//
BlockEvents.rightClicked((event) => {
  let item = event.getItem();
  let inv = event.player.inventory;

  if (inv.count(item) && event.player.mainHandItem == "kubejs:standard_drone") {
    event.player.swing();

    if (!event.block.hasTag("ironberry:egg_blacklist")) {
      let compost = event.level.createEntity("minecraft:bee");
      compost.y = event.block.y + 1;
      compost.x = event.block.x + 0.5;
      compost.z = event.block.z + 0.5;
      compost.mergeNbt({});
      compost.spawn();
    }

    if (!event.player.isCreative()) {
      inv.extractItem(inv.find("kubejs:standard_drone"), 1, false);
    }
  }
});

//############################### CREATE OVERRIDE ##########################//
BlockEvents.rightClicked((event) => {
  if (event.item == "create:andesite_casing" && event.block == "create:shaft") {
    event.item.count--;
  }
});

BlockEvents.rightClicked((event) => {
  if (
    event.item == "create:wrench" &&
    event.player.isCrouching() &&
    event.block == "create:andesite_encased_shaft"
  ) {
    event.player.give("create:andesite_casing");
  }
});
//############################### Rituals remover ##########################//
const FakePlayer = Java.loadClass("net.minecraftforge.common.util.FakePlayer")
//const BluePlayer = Java.loadClass('com.bluepowermod.tile.tier1.TileDeployer')
BlockEvents.rightClicked("ars_nouveau:ritual_brazier", (event) => {
  const { server, item ,player, block, entity} = event;
  if(entity instanceof FakePlayer) {
    block.createExplosion().explode()
  }

  if (
    item.id == "ars_nouveau:ritual_binding" ||
    item.id == "ars_nouveau:ritual_wilden_summon"
  ) {
    server.runCommandSilent(
      "/title " +
        player.name.string +
        ' actionbar {"color":"red","text":"This ritual was disabled"}'
    );
    event.cancel();
  }
});