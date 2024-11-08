const $EventBuses = Java.loadClass(
  "dev.architectury.platform.forge.EventBuses"
);
const $GasDeferredRegister = Java.loadClass(
  "mekanism.common.registration.impl.GasDeferredRegister"
);

const GASES = new $GasDeferredRegister("kubejs");

GASES.register("methane", 0x7d7d07);
GASES.register("dustite", 0xa9a9a8);
GASES.register("clumperio", 0xf065f0);
GASES.register("quartz", 0xc3c3c3);
GASES.register("tesla", 0x3a8be8);
GASES.register("red", 0xd40f0f);
GASES.register("glow", 0xf3ff4f);
GASES.register("nucleonium", 0x8d7131);
GASES.register("superio", 0xdabf55);
GASES.register("micio", 0x69f5bd);
GASES.register("zicio", 0xa5dec3);
GASES.register("radio_uranium", 0x127a2a);
GASES.register("radio_thorium", 0x145235);
GASES.register("fuel_mixture", 0x045c3c);

const $GasAttributes = Java.loadClass(
  "mekanism.api.chemical.gas.attribute.GasAttributes"
);
const $Fuel = $GasAttributes.Fuel;
const $FloatingLong = Java.loadClass("mekanism.api.math.FloatingLong");
GASES.register(
  "pyrotheum",
  0xf9e742,
  new $Fuel(
    () => 5,
    () => $FloatingLong.create(100000)
  )
);
GASES.register(
  "exosteam",
  0xb2b2b2,
  new $Fuel(
    () => 4800,
    () => $FloatingLong.create(200000)
  )
);

GASES.register($EventBuses.getModEventBus("kubejs").get());
