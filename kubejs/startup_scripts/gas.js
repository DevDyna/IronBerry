const $EventBuses = Java.loadClass('dev.architectury.platform.forge.EventBuses')
const $GasDeferredRegister = Java.loadClass('mekanism.common.registration.impl.GasDeferredRegister')

const GASES = new $GasDeferredRegister('kubejs')

GASES.register('methane', 0xA020F0)

GASES.register('dustite', 0xA9A9A8)
GASES.register('clumperio', 0x86E4AB)
GASES.register('clay', 0xC3C3C3)
GASES.register('tesla', 0x3A8BE8)
GASES.register('red', 0xD40F0F)
GASES.register('glow', 0xF3FF4F)
GASES.register('nucleonium', 0x8D7131)

//GASES.register($EventBuses.getModEventBus('kubejs').get())

/*
const $attribute = Java.loadClass('mekanism.api.chemical.gas.attribute.GasAttributes')
const $float = Java.loadClass('mekanism.api.math.FloatingLong')
const $Fuel = $attribute.Fuel
const $sup = Java.loadClass('java.util.function.IntSupplier')
const $color = Java.loadClass('mekanism.client.SpecialColors')
const $value = $float.create(100.0)
const $screen = Java.loadClass('mekanism.client.gui.element.text.GuiTextField')
*/
//const $realcolor = Java.loadClass('mekanism.common.lib.Color')
//const $intsup = $screen.GuiTextField.DARK_SCREEN_COLOR /* = $realcolor.argb(100).darken(0.4).argb(); */
/*
const $intsup = () => 256

GASES.register('prophane', 0xA020F0, new $Fuel($intsup,$value))
*/
GASES.register($EventBuses.getModEventBus('kubejs').get())


