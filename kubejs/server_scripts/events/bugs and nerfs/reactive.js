//############################### REACTIVE CRUCIBLE FIXER ##########################//
BlockEvents.rightClicked("reactive:crucible", (event) => {
    const { server, item, player } = event;
    let blacklist = [
      "cyclic:tank",
      "pneumaticcraft:huge_tank",
      "pneumaticcraft:large_tank",
      "pneumaticcraft:medium_tank",
      "pneumaticcraft:small_tank",
    ];
    if (blacklist.indexOf(item) != -1) {
      server.runCommandSilent(
        "/title " +
          player.name.string +
          ' actionbar {"color":"red","text":"This action was disabled"}'
      );
      event.cancel();
    }
  });