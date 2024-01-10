import SmallCardWithIcon from 'global_shared/components/SmallCardWithIcon';
import { RoundedClass } from 'global_shared/enum/RoundedClass';

interface ServiceItemProps {
  url: string;
  image: string;
  heading?: string;
  subHeading?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  url,
  image,
  heading,
  subHeading,
}) => {
  return (
    <div className="w-full">
      <SmallCardWithIcon
        icon={
          <img
            alt="team"
            className="mr-4 h-16 w-16 flex-shrink-0 rounded-full object-cover object-center"
            src={image}
          />
        }
        action={url}
        rounded={RoundedClass.Medium}
        actionLevel={'Read More'}
        heading={heading}
        height="h-[125px]"
      >
        <p className="">{subHeading}</p>
      </SmallCardWithIcon>
    </div>
  );
};

export default ServiceItem;
