import { slideInFromLeft } from './slide_in/slideInFromLeft';
import { slideInFromRight } from './slide_in/slideInFromRight';

const initial = { x: 0, y: 0, skewX: '0deg', opacity: 1 };
export class MyVariants {
  static SlideInFromLeft = {
    initial: slideInFromLeft,
    animate: initial,
  };

  static SlideInFromRight = {
    initial: slideInFromRight,
    animate: initial,
  };
}
