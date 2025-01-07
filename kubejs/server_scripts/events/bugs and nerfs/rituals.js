//############################### Rituals remover ##########################//
const FakePlayer = Java.loadClass("net.minecraftforge.common.util.FakePlayer");
//const BluePlayer = Java.loadClass('com.bluepowermod.tile.tier1.TileDeployer')   TO FIX
BlockEvents.rightClicked("ars_nouveau:ritual_brazier", (event) => {
  const { server, item, player, block, entity } = event;
  if (entity instanceof FakePlayer) {
    block.createExplosion().explode();
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