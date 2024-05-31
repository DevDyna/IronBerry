/**
 *
 * @param {string} type
 * @param {rgb} color #012345
 * @param {int} logican 1-drone 2-queen 3-comb 4-clump 5-crystal 6-dirty_dust 7-dust 8-ingot 9-nugget A-shard B-crushed C-drip D-pebble E-tiny_dirty_dust F-tiny_dust G-beewax
 */
function beeker(type, color, logican) {
  StartupEvents.registry("item", (event) => {
    let boolist = logican
      .toString()
      .split("")
      .map((char) => char === "1");

    //if (boolist[0]) {
      event
        .create(type + "_bee_egg")
        .texture("ironberry:item/base/egg")
        .displayName(type.charAt(0).toUpperCase() + type.slice(1) + "Bee Egg")
        .color(0, color);
    //}
    if (boolist[0]) {
      event
        .create(type + "_drone")
        .parentModel("ironberry:item/bee/drone")
        .displayName(
          type.charAt(0).toUpperCase() + type.slice(1) + " Bee drone"
        )
        .color(0, color);
    }
    if (boolist[1]) {
      event
        .create(type + "_queen")
        .parentModel("ironberry:item/bee/queen")
        .displayName(
          type.charAt(0).toUpperCase() + type.slice(1) + " Bee queen"
        )
        .color(0, color);
    }
    if (boolist[2]) {
      event
        .create(type + "_comb")
        .texture("ironberry:item/base/comb")
        .displayName(type.charAt(0).toUpperCase() + type.slice(1) + " Comb")
        .color(0, color);
    }
    if (boolist[3]) {
      event
        .create(type + "_clump")
        .texture("mekanism:item/clump")
        .color(0, color)
        .displayName(type.charAt(0).toUpperCase() + type.slice(1) + " Clump");
    }
    if (boolist[4]) {
      event
        .create(type + "_crystal")
        .modelJson({
          parent: "item/generated",
          textures: {
            layer0: "mekanism:item/crystal",
            layer1: "mekanism:item/crystal_overlay",
          },
        })
        .color(0, color)
        .displayName(type.charAt(0).toUpperCase() + type.slice(1) + " Crystal");
    }
    if (boolist[5]) {
      event
        .create(type + "_dirty_dust")
        .texture("mekanism:item/dirty_dust")
        .color(0, color)
        .displayName(
          type.charAt(0).toUpperCase() + type.slice(1) + " Dirty Dust"
        );
    }
    if (boolist[6]) {
      event
        .create(type + "_dust")
        .texture("mekanism:item/dust")
        .color(0, color)
        .displayName(type.charAt(0).toUpperCase() + type.slice(1) + " Dust");
    }
    if (boolist[7]) {
      event
        .create(type + "_ingot")
        .texture("mekanism:item/ingot")
        .color(0, color)
        .displayName(type.charAt(0).toUpperCase() + type.slice(1) + " Ingot");
    }
    if (boolist[8]) {
      event
        .create(type + "_nugget")
        .texture("mekanism:item/nugget")
        .color(0, color)
        .displayName(type.charAt(0).toUpperCase() + type.slice(1) + " Nugget");
    }
    if (boolist[9]) {
      event
        .create(type + "_shard")
        .texture("mekanism:item/shard")
        .color(0, color)
        .displayName(type.charAt(0).toUpperCase() + type.slice(1) + " Shard");
    }
    if (boolist[10]) {
      event
        .create(type + "crushed_")
        .texture("ironberry:item/base/crushed")
        .color(0, color)
        .displayName(type.charAt(0).toUpperCase() + type.slice(1) + " Crushed");
    }
    if (boolist[11]) {
      event
        .create(type + "_drip")
        .texture("ironberry:item/base/drip")
        .color(0, color)
        .displayName(type.charAt(0).toUpperCase() + type.slice(1) + " Drip");
    }
    if (boolist[12]) {
      event
        .create(type + "_pebble")
        .texture("ironberry:item/base/pebble")
        .color(0, color)
        .displayName(type.charAt(0).toUpperCase() + type.slice(1) + " Pebble");
    }
    if (boolist[13]) {
      event
        .create(type + "_tiny_dirty_dust")
        .texture("ironberry:item/base/tiny_dirty_dust")
        .color(0, color)
        .displayName(
          type.charAt(0).toUpperCase() + type.slice(1) + " Tiny Dirty Dust"
        );
    }
    if (boolist[14]) {
      event
        .create(type + "_tiny_dust")
        .texture("ironberry:item/base/tiny_dust")
        .color(0, color)
        .displayName(
          type.charAt(0).toUpperCase() + type.slice(1) + " Tiny Dust"
        );
    }
    if (boolist[15]) {
      event
        .create(type + "_beewax")
        .texture("ironberry:item/base/beewax")
        .color(0, color)
        .displayName(type.charAt(0).toUpperCase() + type.slice(1) + " Beewax");
    }
  });
}
beeker("standard", "#FED668", 1111111111111111);
beeker("demo", '#2DEE67', 1101010101010111);
