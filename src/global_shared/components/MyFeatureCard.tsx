import { motion } from 'framer-motion';
import { RoundedClass } from 'global_shared/enum/RoundedClass';
import { Size } from 'global_shared/enum/Size';
import React from 'react';

interface MyFeatureCardProps {
  iconSize?: number;
  icon: JSX.Element;
  rounded?: RoundedClass;
  shadow?: Size;
  minimumHeight?: number;
  transition?: object;
  variants?: { onScreen: object; offScreen: object };
  children?: React.ReactNode;
}

const MyFeatureCard: React.FC<MyFeatureCardProps> = ({
  iconSize = 80,
  icon,
  rounded = RoundedClass.Medium,
  shadow = Size.Small,
  minimumHeight = 100,
  variants,
  transition,
  children,
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={transition}
      variants={variants}
      className="flex w-full flex-col items-center justify-center"
    >
      <div
        className={`${rounded} bg-surface shadow-${shadow} flex w-full flex-col items-center justify-center hover:cursor-pointer hover:shadow-md`}
        style={{ minHeight: minimumHeight }}
      >
        <div className="h-full w-full">{children}</div>
      </div>
      <div
        className={`absolute top-0 inline-flex  items-center justify-center rounded-full bg-primary text-4xl text-onPrimary`}
        style={{
          height: iconSize,
          width: iconSize,
          marginTop: -iconSize / 2,
        }}
      >
        {icon}
      </div>
    </motion.div>
  );
};

export default MyFeatureCard;
