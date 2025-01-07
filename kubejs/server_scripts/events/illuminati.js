//############################### ILLUMINATI! ##########################//
ItemEvents.rightClicked("kubejs:illuminati", (event) => {
    try {
      if (
        event.player.inventory.getItem(
          event.player.inventory.find("tiab:time_in_a_bottle")
        ) == "tiab:time_in_a_bottle"
      ) {
        event.player.swing();
        if (!event.player.isCreative())
          event.player.addItemCooldown(event.item, 200);
        let random = 0;
        if (rnd(0, 10) == 0) {
          random = rnd(12000, 48000);
  
          let min = Math.floor(Math.floor(random / 20) / 60);
          let sec = Math.floor(
            Math.floor(random / 20) - Math.floor(random / 60 / 20) * 60
          );
          if (sec <= 9) {
            sec = "0" + sec;
          }
          let star = String.fromCharCode(9733);
          event.player.notify(
            Notification.make((e) => {
              e.text = [
                Text.of(star).gold(),
                " Added " + min + ":" + sec + "! ",
                Text.of(star).gold(),
              ];
              e.outlineColor = "#016055";
              e.backgroundColor = "#40E862";
              e.borderColor = "#267623";
            })
          );
  
          Utils.server.runCommandSilent(
            `/execute at ${event.player.uuid} run playsound inventorypets:illuminati_confirmed block @p ~ ~ ~`
          );
        }
        if (random == 0) {
          Utils.server.runCommandSilent(
            `/execute at ${event.player.uuid} run playsound inventorypets:illuminati block @p ~ ~ ~`
          );
        }
  
        event.player.inventory.getItem(
          event.player.inventory.find("tiab:time_in_a_bottle")
        ).nbt.storedTime += random;
        event.player.inventory.getItem(
          event.player.inventory.find("tiab:time_in_a_bottle")
        ).nbt.totalAccumulatedTime += random;
      }
    } catch (e) {
      event.player.swing();
      if (!event.player.isCreative())
        event.player.addItemCooldown(event.item, 140);
      event.player.notify(
        Notification.make((e) => {
          e.text = [Text.of("Missing")];
          e.icon = "ironberry:textures/item/tiab.png"; //item texture fix
          e.outlineColor = "#0009FF";
          e.backgroundColor = "#03CDFF";
          e.borderColor = "#039BFF";
        })
      );
    }
  });