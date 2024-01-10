import gallery1 from "assets/images/Gallery/IMG .jpg";
import gallery2 from "assets/images/Gallery/IMG2.jpg";
import { motion } from "framer-motion";
import { MyVariants } from "global_shared/animations/animate/MyVariants";
import { MyTransition } from "global_shared/animations/transitions/MyTransition";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: gallery1,
    thumbnail: gallery1,
  },
  {
    original: gallery2,
    thumbnail: gallery2,
  },
];

function Gallery() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={MyTransition.StaggerChildren.Fast}
      className=" my-10  text-justify text-onBackground"
    >
      <div className="mb-6 flex w-1/2 flex-shrink-0 flex-col px-4 md:mb-0 md:w-64">
        <motion.h4
          variants={MyVariants.SlideInFromRight}
          transition={MyTransition.Spring.Low}
          className="mb-4 text-2xl font-semibold uppercase"
        >
          Gallery
        </motion.h4>
      </div>
      <motion.div transition={MyTransition.Spring.Low} className="mt-10">
        <ImageGallery items={images} />
      </motion.div>
    </motion.div>
  );
}

export default Gallery;
