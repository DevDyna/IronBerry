const $EventBuses = Java.loadClass('dev.architectury.platform.forge.EventBuses')
const $GasDeferredRegister = Java.loadClass('mekanism.common.registration.impl.GasDeferredRegister')

const GASES = new $GasDeferredRegister('kubejs')

//GASES.register('methane', 0xA020F0)

const $attribute = Java.loadClass('mekanism.api.chemical.gas.attribute.GasAttributes')
const $Fuel = $attribute.Fuel

GASES.register('prophane', 0xA020F0, new $Fuel(40.0,169.45F))

GASES.register($EventBuses.getModEventBus('kubejs').get())

