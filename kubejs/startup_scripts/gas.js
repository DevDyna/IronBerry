const $EventBuses = Java.loadClass('dev.architectury.platform.forge.EventBuses')
const $GasDeferredRegister = Java.loadClass('mekanism.common.registration.impl.GasDeferredRegister')

const GASES = new $GasDeferredRegister('kubejs')

GASES.register('methane', 0x7D7D07)
GASES.register('dustite', 0xA9A9A8)
GASES.register('clumperio', 0xF065F0)
GASES.register('quartz', 0xC3C3C3)
GASES.register('tesla', 0x3A8BE8)
GASES.register('red', 0xD40F0F)
GASES.register('glow', 0xF3FF4F)
GASES.register('nucleonium', 0x8D7131)
GASES.register('superio', 0xDABF55)
GASES.register('micio', 0x69F5BD)
GASES.register('zicio', 0xA5DEC3)
GASES.register('radio_uranium', 0x127A2A)
GASES.register('radio_thorium', 0x145235)
GASES.register('fuel_mixture', 0x045C3C)


const $GasAttributes = Java.loadClass('mekanism.api.chemical.gas.attribute.GasAttributes')
const $Fuel = $GasAttributes.Fuel
const $FloatingLong = Java.loadClass('mekanism.api.math.FloatingLong')              
GASES.register('pyrotheum', 0xF9E742, new $Fuel(() => 5, () => $FloatingLong.create(100000)))
GASES.register('exosteam', 0xB2B2B2, new $Fuel(() => 4800, () => $FloatingLong.create(5000000)))

GASES.register($EventBuses.getModEventBus('kubejs').get())


