import { bounce } from './bounce';
import { fadeIn } from './fadeIn';
import { fadeOut } from './fadeOut';
import { pulse } from './pulse';
import { rotateInFromBottom } from './rotate_in/rotateInFromBottom';
import { rotateInFromLeft } from './rotate_in/rotateInFromLeft';
import { rotateInFromRight } from './rotate_in/rotateInFromRight';
import { rotateInFromTop } from './rotate_in/rotateInFromTop';
import { rotateOutFromBottom } from './rotate_out/rotateOutFromBottom';
import { rotateOutFromLeft } from './rotate_out/rotateOutFromLeft';
import { rotateOutFromRight } from './rotate_out/rotateOutFromRight';
import { rotateOutFromTop } from './rotate_out/rotateOutFromTop';
import { slideInFromBottom } from './slide_in/slideInFromBottom';
import { slideInFromLeft } from './slide_in/slideInFromLeft';
import { slideInFromRight } from './slide_in/slideInFromRight';
import { slideInFromTop } from './slide_in/slideInFromTop';
import { slideOutToBottom } from './slide_out/slideOutToBottom';
import { slideOutToLeft } from './slide_out/slideOutToLeft';
import { slideOutToRight } from './slide_out/slideOutToRight';
import { slideOutToTop } from './slide_out/slideOutToTop';

export class MyAnimate {
  static RotateInFromBottom = rotateInFromBottom;
  static RotateInFromTop = rotateInFromTop;
  static RotateInFromLeft = rotateInFromLeft;
  static RotateInFromRight = rotateInFromRight;
  static RotateOutFromBottom = rotateOutFromBottom;
  static RotateOutFromTop = rotateOutFromTop;
  static RotateOutFromLeft = rotateOutFromLeft;
  static RotateOutFromRight = rotateOutFromRight;

  static SlideInFromBottom = slideInFromBottom;
  static SlideInFromTop = slideInFromTop;
  static SlideInFromLeft = slideInFromLeft;
  static SlideInFromRight = slideInFromRight;
  static SlideOutToBottom = slideOutToBottom;
  static SlideOutToTop = slideOutToTop;
  static SlideOutToLeft = slideOutToLeft;
  static SlideOutToRight = slideOutToRight;

  static FadeIn = fadeIn;
  static FadeOut = fadeOut;
  static Bounce = bounce;
  static Pulse = pulse;
}
