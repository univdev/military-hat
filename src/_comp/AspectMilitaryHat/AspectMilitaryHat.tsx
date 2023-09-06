import { motion } from 'framer-motion';
import { AspectRatio } from '../../components/AspectRatio';
import { MilitaryHat } from '../../components/MilitaryHat/MilitaryHat';

export const AspectMilitaryHat = () => {
  return (
    <AspectRatio>
      <motion.div
        initial={{
          transform: 'scale(0)'
        }}
        animate={{
          transform: 'scale(1)'
        }}
      >
        <MilitaryHat />
      </motion.div>
    </AspectRatio>
  );
};
