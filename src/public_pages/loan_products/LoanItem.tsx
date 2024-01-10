import SmallCardWithIcon from 'global_shared/components/SmallCardWithIcon';
import { RoundedClass } from 'global_shared/enum/RoundedClass';

interface LoanItemProps {
  url: string;
  Heading?: string;
  SubHeading?: string;
}

const LoanItem: React.FC<LoanItemProps> = ({ url, Heading, SubHeading }) => {
  return (
    <>
      <SmallCardWithIcon
        icon={<i className="fa-solid fa-sack-dollar text-5xl text-primary"></i>}
        action={url}
        rounded={RoundedClass.Medium}
        actionLevel={'Read More'}
        heading={Heading}
        height="h-[125px]"
      >
        <p className=" group-hover:cursor-pointer">{SubHeading}</p>
      </SmallCardWithIcon>
    </>
  );
};

export default LoanItem;
