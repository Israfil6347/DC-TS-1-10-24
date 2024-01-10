import { motion } from 'framer-motion';
import { useState } from 'react';

const AccordionAnimation = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: 'auto' },
};

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div className="w-full">
      <div
        className="flex w-full justify-between py-2 hover:bg-backgroundVariant"
        onClick={toggleExpand}
      >
        <p className="text-lg font-bold hover:cursor-pointer">{title}</p>

        <div
          className={`fas ${
            expand ? 'fa fa-chevron-up' : 'fa fa-chevron-down'
          }`}
        ></div>
      </div>
      <motion.div
        initial="closed"
        animate={expand ? 'open' : 'closed'}
        exit="closed"
        variants={AccordionAnimation}
        transition={{ duration: 0.5 }}
        className="ease overflow-hidden bg-background text-justify font-medium"
      >
        <motion.div
          className="prose max-w-full p-4"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default AccordionItem;
