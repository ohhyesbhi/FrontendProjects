// import React from 'react'

// function Section3() {
//   return (
//     <div style={{width:"100%",height:"98vh"}}>
//       8
//     </div>
//   )
// }

// export default Section3

import React from "react";
import { motion } from "framer-motion";


const Section8 = ({
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
      className="section" id="8"
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
        <a style={{textDecorationLine:"none",color:btnColor}} href="https://www.mbachaiwala.com/contact-us/">{btnTxt}</a>
   
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

export default Section8;