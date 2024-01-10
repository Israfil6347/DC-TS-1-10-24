import { bounce } from './bounce';
import { damping } from './damping';
import { delay } from './delay';
import { duration } from './duration';
import { ease } from './ease';
import { mass } from './mass';
import { repeat } from './repeat';
import { spring } from './spring';
import { staggerChildren } from './staggerChildren';
import { stiffness } from './stiffness';
import { tween } from './tween';
import { velocity } from './velocity';

export class MyTransition {
  static Bounce = bounce;
  static Damping = damping;
  static Delay = delay;
  static Duration = duration;
  static Ease = ease;
  static Mass = mass;
  static Repeat = repeat;
  static Spring = spring;
  static StaggerChildren = staggerChildren;
  static Stiffness = stiffness;
  static Tween = tween;
  static Velocity = velocity;
}
