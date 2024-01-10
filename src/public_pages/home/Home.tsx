import { motion } from 'framer-motion';
import { MyTransition } from 'global_shared/animations/transitions/MyTransition';
import PageContainer from 'global_shared/components/PageContainer';
import useAutoScrollUp from 'global_shared/hooks/useAutoScrollUp';
import FounderSection from './components/FounderSection';
import OurWorkSection from './components/OurWorkSection';

function Home() {
  useAutoScrollUp();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
    >
      <PageContainer>
        <OurWorkSection />
        <FounderSection />
      </PageContainer>
    </motion.div>
  );
}

export default Home;
