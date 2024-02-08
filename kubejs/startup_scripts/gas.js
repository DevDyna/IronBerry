const $EventBuses = Java.loadClass('dev.architectury.platform.forge.EventBuses')
const $GasDeferredRegister = Java.loadClass('mekanism.common.registration.impl.GasDeferredRegister')

const GASES = new $GasDeferredRegister('kubejs')

GASES.register('methane', 0xA020F0)

GASES.register('dustite', 0xA020F0)
GASES.register('clumperio', 0xA020F0)
GASES.register('clay', 0xA020F0)
GASES.register('tesla', 0xA020F0)
GASES.register('red', 0xA020F0)
GASES.register('glow', 0xA020F0)
GASES.register('nucleonium', 0xA020F0)



/* 
const $attribute = Java.loadClass('mekanism.api.chemical.gas.attribute.GasAttributes')
const $float = Java.loadClass('mekanism.api.math.FloatingLong')
const $Fuel = $attribute.Fuel

const $value = $float.create(100.0)
 */
/* function supplier(value) {
    // Return a function that acts as a boolean supplier
    return function() {
        return value;
    };
} */
/* 
Java.loadClass('java.util.function.IntSupplier')

  const sup = new IntSupplier

	function sup = () -> 256;


GASES.register('prophane', 0xA020F0, new $Fuel(sup,$value))
 */
GASES.register($EventBuses.getModEventBus('kubejs').get())

