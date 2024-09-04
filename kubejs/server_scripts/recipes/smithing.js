ServerEvents.recipes((event) => {
  function smith(inputs, outputs) {
    inputs.forEach((element, index) => {
      event.smithing(outputs[index], element[0],element[1]);
    });
  }
  smith(
    [
      ["pipez:basic_upgrade", "minecraft:gold_ingot"],
      ["pipez:improved_upgrade", "minecraft:diamond"],
      ["pipez:advanced_upgrade", "minecraft:netherite_ingot"],
      ["pipez:ultimate_upgrade", "nuclearcraft:plate_extreme"],
    ],
    [
      "pipez:improved_upgrade",
      "pipez:advanced_upgrade",
      "pipez:ultimate_upgrade",
      "pipez:infinity_upgrade",
    ]
  );
});
