const $EventBuses = Java.loadClass('dev.architectury.platform.forge.EventBuses')
const $GasDeferredRegister = Java.loadClass('mekanism.common.registration.impl.GasDeferredRegister')

const GASES = new $GasDeferredRegister('kubejs')

GASES.register('methane', 0xA020F0)

const $attribute = Java.loadClass('mekanism.api.chemical.gas.attribute.GasAttributes')
const $float = Java.loadClass('mekanism.api.math.FloatingLong')
const $Fuel = $attribute.Fuel
const $sup = Java.loadClass('java.util.function.IntSupplier')
const $color = Java.loadClass('mekanism.client.SpecialColors')
const $value = $float.create(100.0)
const $screen = Java.loadClass('mekanism.client.gui.element.text.GuiTextField')

//const $realcolor = Java.loadClass('mekanism.common.lib.Color')
//const $intsup = $screen.GuiTextField.DARK_SCREEN_COLOR /* = $realcolor.argb(100).darken(0.4).argb(); */

//GASES.register('prophane', 0xA020F0, new $Fuel(256,$value))

GASES.register($EventBuses.getModEventBus('kubejs').get())

