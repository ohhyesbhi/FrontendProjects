// import React from 'react'

// function Section3() {
//   return (
//     <div id="4" style={{width:"100%",height:"98vh"}}>
//       4
//     </div>
//   )
// }

// export default Section3

import React from "react";
import { motion } from "framer-motion";


const Section4 = ({
  h3,
  text,
  hasBtn = true,
  btnTxt,
  imgSrc,
  imgSize = "70%",
  backgroundColor,
  headingColor,
  textColor,
  btnBgColor,
  btnColor,
}) => {
  const headingOptions = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };

  const textOptions = {
    ...headingOptions,
    transition: {
      delay: 0.3,
    },
  };
  const buttonOptions = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
      ease: "easeIn",
    },
  };
  const imgOptions = {
    initial: {
      scale: 0.1,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
    },
  };


  return (
    <section
      className="section" id="Media"
      style={{
        backgroundColor,
      }}
    >
      <div>
        <motion.h3
          style={{
            color: headingColor,
          }}
          data-cursorpointer={true}
          {...headingOptions}
        >
          {h3}
        </motion.h3>

        <motion.p
          style={{
            color: textColor,
          }}
          data-cursorpointer={true}
          {...textOptions}
        >
          {text}
        </motion.p>

        {hasBtn && (
          <motion.button
            style={{
              color: btnColor,
              backgroundColor: btnBgColor,
              cursor:"pointer",
              "&:hover":{
                transform: "skewX(-10deg)"
              }
            }}
            data-cursorpointer={false}
            {...buttonOptions}
          >
              <a style={{textDecorationLine:"none",color:btnColor}} href="https://indianexpress.com/article/trending/trending-in-india/move-over-mba-chai-wala-audi-chaiwala-from-mumbai-goes-viral-8636271/">{btnTxt}</a>
    
          </motion.button>
        )}

        <motion.div {...imgOptions}>
          <img
            src={imgSrc}
            alt="ImgSrc"
            style={{
              width: imgSize,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section4;
