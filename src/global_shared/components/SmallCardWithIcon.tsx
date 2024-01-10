import { RoundedClass } from "global_shared/enum/RoundedClass";
import { Size } from "global_shared/enum/Size";
import { NavLink, To } from "react-router-dom";
import MyCard from "./MyCard";

interface SmallCardWithIconProps {
  icon: JSX.Element;
  action?: To;
  actionLevel: string | null;
  heading?: string | null;
  subHeading?: string | null;
  bgColor?: string | null;
  borderColor?: string | null;
  rounded?: RoundedClass;
  shadow?: Size;
  children?: React.ReactNode;
  height?: string | null;
  minimumHeight?: number;
}

const SmallCardWithIcon: React.FC<SmallCardWithIconProps> = ({
  icon,
  action = "",
  actionLevel,
  heading,
  subHeading,
  bgColor = "bg-surface",
  borderColor = "border-gray-100",
  rounded,
  shadow = Size.None,
  children,
  height,
  minimumHeight = 100,
}) => {
  return (
    <>
      <MyCard
        bgColor={bgColor}
        borderColor={borderColor}
        rounded={rounded}
        shadow={shadow}
        minimumHeight={minimumHeight}
      >
        <NavLink to={action} className="">
          <div className={`group flex p-4 ${height}`}>
            <div className="flex flex-col items-center justify-center">
              {icon}
            </div>
            <div className="ml-4 grow text-left">
              <p className="mb-1 font-bold ">{heading}</p>
              <p className="text-xs">{subHeading}</p>
              <div className="text-base">{children}</div>
              <div className="group-hover:cursor-pointer group-hover:underline">
                {actionLevel}
              </div>
            </div>
          </div>
        </NavLink>
      </MyCard>
    </>
  );
};

export default SmallCardWithIcon;
