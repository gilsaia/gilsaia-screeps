import { creepControlInterval } from './config';
import { autoPlan } from './module/autoPlan';
import { creepControl } from './module/creepControl';
import mount from './mount';
import { creepSetup, structureSetup } from './init';

/**
 * AI Start
 */
mount();
export function loop(): void {
  // mount();
  autoPlan();
  creepSetup();
  creepControl(creepControlInterval);
  structureSetup();
}
