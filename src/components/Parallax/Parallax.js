import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';

function Parallax({content ,ref}) {

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:['start start', 'end start']
    });

    const textY = useTransform(scrollYProgress, [0,1], ["0%,200%"]);

    return (
        <motion.div ref={ref}
        style={{y:textY}}>
            {content}
        </motion.div>
    )
}

export default Parallax