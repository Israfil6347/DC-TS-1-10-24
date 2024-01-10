import { motion } from 'framer-motion';
import { MyVariants } from 'global_shared/animations/animate/MyVariants';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import MyButton from 'global_shared/components/MyButton';
import MyCard from 'global_shared/components/MyCard';
import { RoundedClass } from 'global_shared/enum/RoundedClass';
import { Size } from 'global_shared/enum/Size';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AccordionAnimation = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: 'auto' },
};
function OpenAccountItem(obj: any, key: number) {
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);
  const [expandClickItem, setExpandClickItem] = useState('');
  const toggleExpand = (productCode: any) => {
    setExpand(!expand);
    setExpandClickItem(productCode);
  };

  return (
    <div>
      <motion.div
        variants={MyVariants.SlideInFromRight}
        transition={{ ...MyTransition.Spring.Low, delay: 0.1 * key }}
        key={key}
        onClick={() => {
          toggleExpand(obj?.obj?.ProductCode);
        }}
        className="rounded bg-background"
      >
        <MyCard
          rounded={RoundedClass.Medium}
          shadow={Size.Small}
          bgColor={'bg-surface'}
          minimumHeight={80}
          styleClass="z-10"
        >
          <div className={`group  cursor-pointer  p-4`}>
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="flex flex-col items-center justify-center">
                  <i className="fa-solid fa-piggy-bank text-3xl text-primary"></i>
                </div>
                <div className="ml-4 grow text-left ">
                  <h2 className="font-semibold">{obj?.obj?.ProductName}</h2>
                  <span className="text-sm capitalize">
                    {obj?.obj?.accountType}
                  </span>
                </div>
              </div>
              <div>
                <div
                  className={`fas text-lg ${
                    expand && expandClickItem === obj?.obj?.ProductCode
                      ? 'fa-solid fa-caret-up'
                      : 'fa-solid fa-caret-down'
                  }`}
                ></div>
              </div>
            </div>
            <motion.div
              initial="closed"
              animate={
                expand && expandClickItem === obj?.obj?.ProductCode
                  ? 'open'
                  : 'closed'
              }
              exit="closed"
              variants={AccordionAnimation}
              transition={{ duration: 0.5 }}
              className={`ease overflow-hidden  text-justify `}
            >
              <p className="py-3">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions
              </p>
              <div className="flex justify-center">
                <MyButton
                  type="submit"
                  name="apply"
                  label="Apply"
                  styleClass="w-1/4 rounded border bg-primary py-2  font-semibold uppercase text-onPrimary hover:bg-primaryVariant"
                  onClick={() => {
                    navigate(
                      `${obj?.obj?.ProductTypeName}/${obj?.obj?.ProductCode}`
                    );
                    localStorage.setItem(
                      'ProductName',
                      `${obj?.obj?.ProductName}`
                    );
                  }}
                ></MyButton>
              </div>
            </motion.div>
          </div>
        </MyCard>

        <div></div>
      </motion.div>
    </div>
  );
}

export default OpenAccountItem;
