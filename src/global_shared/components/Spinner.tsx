import React from 'react';

interface SpinnerProps {}

const Spinner: React.FC<SpinnerProps> = ({}) => {
  return (
    <section className="fixed inset-0  z-50 flex animate-spin flex-col items-center justify-center">
      <div className="absolute h-[110px] w-[110px] rotate-[225deg] animate-spin rounded-[50%] border-[5px] border-solid border-primary border-t-transparent delay-75"></div>
      <div className="absolute h-[90px] w-[90px] rotate-[270deg] animate-spin rounded-[50%] border-[5px] border-solid border-primary border-b-transparent delay-100"></div>
      <div className="absolute h-[70px] w-[70px] rotate-[90deg] animate-spin rounded-[50%] border-[5px] border-solid border-primary border-l-transparent delay-200"></div>
      <div className="absolute h-[50px] w-[50px] rotate-[180deg] animate-spin rounded-[50%] border-[5px] border-solid border-primary border-r-transparent delay-700"></div>
    </section>
  );
};

export default Spinner;
