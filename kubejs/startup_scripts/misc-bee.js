StartupEvents.registry("item", (event) => {
  function beeker(type, color, comb) {
    event
      .create(type + "_bee_egg")
      .texture("ironberry:item/base/egg")
      .displayName(type.charAt(0).toUpperCase() + type.slice(1) + "Bee Egg")
      .color(1, color);

    event
      .create(type + "_drone")
      .parentModel("ironberry:item/bee/drone")
      .displayName(type.charAt(0).toUpperCase() + type.slice(1) + " Bee drone")
      .color(1, color);

    event
      .create(type + "_queen")
      .parentModel("ironberry:item/bee/queen")
      .displayName(type.charAt(0).toUpperCase() + type.slice(1) + " Bee queen")
      .color(1, color);

    if (comb) {
      event
        .create(type + "_comb")
        .texture("ironberry:item/base/comb")
        .displayName(type.charAt(0).toUpperCase() + type.slice(1) + " Comb")
        .color(1, color);
    }
  }
  beeker("standard", "#fed668", true);
  beeker("demo", "#2DEE67", true);

  // event.create('_clump').texture('mekanism:item/clump')
  // event.create('_crystal').texture('mekanism:item/crystal').texture('mekanism:item/crystal_overlay')
  // event.create('_dirty_dust').texture('mekanism:item/dirty_dust')
  // event.create('_dust').texture('mekanism:item/dust')
  // event.create('_ingot').texture('mekanism:item/ingot')
  // event.create('_nugget').texture('mekanism:item/nugget')
  // event.create('_shard').texture('mekanism:item/shard')
  // event.create('crushed_').texture('ironberry:item/base/crushed')
  // event.create('_drip').texture('ironberry:item/base/drip')
  // event.create('_pebble').texture('ironberry:item/base/pebble')
  // event.create('_tiny_dirty_dust').texture('ironberry:item/base/tiny_dirty_dust')
  // event.create('_tiny_dust').texture('ironberry:item/base/tiny_dust')
  // event.create('_beewax').texture('ironberry:item/base/beewax')
});

//global.server.thermal.pulverizer("minecraft:stone", "minecraft:dirt", 2);
//global.server.ten3