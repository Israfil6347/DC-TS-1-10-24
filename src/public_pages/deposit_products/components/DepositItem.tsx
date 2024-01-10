import SmallCardWithIcon from 'global_shared/components/SmallCardWithIcon';
import { RoundedClass } from 'global_shared/enum/RoundedClass';
interface DepositItemProps {
  url: string;
  Heading?: string;
  SubHeading?: string;
}

const DepositItem: React.FC<DepositItemProps> = ({
  url,
  Heading,
  SubHeading,
}) => {
  return (
    <>
      <SmallCardWithIcon
        icon={<i className="fa-solid fa-piggy-bank text-5xl  text-primary"></i>}
        action={url}
        rounded={RoundedClass.Medium}
        actionLevel={'Read More'}
        heading={Heading}
        height="h-[125px]"
        subHeading={''}
        bgColor={'bg-surface'}
        borderColor={''}
      >
        <p className=" group-hover:cursor-pointer">{SubHeading}</p>
      </SmallCardWithIcon>
    </>
  );
};

export default DepositItem;
