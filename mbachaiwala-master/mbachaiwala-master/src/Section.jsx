import React, { useState } from 'react'

import data from "./data/data.json";
import freshTopicImg from "./assets/academy.png";
import freshTopic2Img from "./assets/story.png";
import tedTalksImg from "./assets/in-the-news.gif";
import franchiseImg from "./assets/franchise.gif";
import mapImg from "./assets/locations.png";
import coursesImg from "./assets/image2.png";
import albumImg from "./assets/mba-cares.gif";
import baratImg from "./assets/image1.png";
import chaiWalaImg from "./assets/image3.png";

import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import Section8 from './components/Section8'
import Section9 from  './components/Section9'
import Section10 from './components/Section10'
import Footer from './components/Footer';
import Loader from './components/Loader';
import Misc from './components/Misc';

const yellow = "#fff100",
  pink = "#ed1e79",
  white = "#fff",
  brown = "#6d3d0f";
  

function Section() {
    const {
        freshTopic,
        freshTopic2,
        tedTalks,
        franchise,
        map,
        courses,
        album,
        barat,
        chaiwala,
      } = data;

      const[Loading,setLoading] = useState(true)
  return (
    <>
    {
      (Loading)?<Loader delete={()=>setLoading(false)} />
      :
      <>
      <Section1/>
   
   <Section2 h3={freshTopic2.heading}
        text={freshTopic.text}
        btnTxt={freshTopic.btn}
        imgSrc={freshTopicImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}/>
   <Section3 h3={freshTopic2.heading}
          text={freshTopic2.text}
          btnTxt={freshTopic2.btn}
          imgSrc={freshTopic2Img}
          backgroundColor={pink}
          headingColor={yellow}
          textColor={yellow}
          btnBgColor={yellow}
          btnColor={pink}/>
   <Section4   h3={tedTalks.heading}
          text={tedTalks.text}
          btnTxt={tedTalks.btn}
          imgSrc={tedTalksImg}
          backgroundColor={yellow}
          headingColor={pink}
          textColor={pink}
          btnBgColor={pink}
          btnColor={yellow}/>
    <Section5  h3={franchise.heading}
          text={franchise.text}
          btnTxt={franchise.btn}
          imgSrc={franchiseImg}
          backgroundColor={white}
          headingColor={pink}
          textColor={brown}
          btnBgColor={brown}
          btnColor={yellow}/>
    <Section6  h3={map.heading}
          text={map.text}
          imgSrc={mapImg}
          backgroundColor={pink}
          headingColor={yellow}
          textColor={yellow}
          btnBgColor={brown}
          btnColor={yellow}
          hasBtn={false}/>
    <Section7 h3={courses.heading}
          text={courses.text}
          btnTxt={courses.btn}
          imgSrc={coursesImg}
          imgSize={"30%"}
          backgroundColor={yellow}
          headingColor={pink}
          textColor={pink}
          btnBgColor={pink}
          btnColor={yellow}/>
    <Section8 h3={album.heading}
          text={album.text}
          btnTxt={album.btn}
          imgSrc={albumImg}
          backgroundColor={white}
          headingColor={pink}
          textColor={brown}
          btnBgColor={brown}
          btnColor={yellow}/>
          <Section9 h3={barat.heading}
          text={barat.text}
          btnTxt={barat.btn}
          imgSrc={baratImg}
          backgroundColor={pink}
          headingColor={yellow}
          textColor={yellow}
          btnBgColor={yellow}
          btnColor={pink}/>
          <Section10 h3={chaiwala.heading}
          text={chaiwala.text}
          btnTxt={chaiwala.btn}
          imgSrc={chaiWalaImg}
          backgroundColor={white}
          headingColor={pink}
          textColor={brown}
          btnBgColor={brown}
          btnColor={yellow}/>

          <Misc/>
          <Footer/>
          </>
    }
   
            
    </>
  )
}

export default Section


// {Loading && <Loader delete={()=>setLoading(false)} />}

{/* <Section1/>
   
   <Section2 h3={freshTopic2.heading}
        text={freshTopic.text}
        btnTxt={freshTopic.btn}
        imgSrc={freshTopicImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}/>
   <Section3 h3={freshTopic2.heading}
          text={freshTopic2.text}
          btnTxt={freshTopic2.btn}
          imgSrc={freshTopic2Img}
          backgroundColor={pink}
          headingColor={yellow}
          textColor={yellow}
          btnBgColor={yellow}
          btnColor={pink}/>
   <Section4   h3={tedTalks.heading}
          text={tedTalks.text}
          btnTxt={tedTalks.btn}
          imgSrc={tedTalksImg}
          backgroundColor={yellow}
          headingColor={pink}
          textColor={pink}
          btnBgColor={pink}
          btnColor={yellow}/>
    <Section5  h3={franchise.heading}
          text={franchise.text}
          btnTxt={franchise.btn}
          imgSrc={franchiseImg}
          backgroundColor={white}
          headingColor={pink}
          textColor={brown}
          btnBgColor={brown}
          btnColor={yellow}/>
    <Section6  h3={map.heading}
          text={map.text}
          imgSrc={mapImg}
          backgroundColor={pink}
          headingColor={yellow}
          textColor={yellow}
          btnBgColor={brown}
          btnColor={yellow}
          hasBtn={false}/>
    <Section7 h3={courses.heading}
          text={courses.text}
          btnTxt={courses.btn}
          imgSrc={coursesImg}
          imgSize={"30%"}
          backgroundColor={yellow}
          headingColor={pink}
          textColor={pink}
          btnBgColor={pink}
          btnColor={yellow}/>
    <Section8 h3={album.heading}
          text={album.text}
          btnTxt={album.btn}
          imgSrc={albumImg}
          backgroundColor={white}
          headingColor={pink}
          textColor={brown}
          btnBgColor={brown}
          btnColor={yellow}/>
          <Section9 h3={barat.heading}
          text={barat.text}
          btnTxt={barat.btn}
          imgSrc={baratImg}
          backgroundColor={pink}
          headingColor={yellow}
          textColor={yellow}
          btnBgColor={yellow}
          btnColor={pink}/>
          <Section10 h3={chaiwala.heading}
          text={chaiwala.text}
          btnTxt={chaiwala.btn}
          imgSrc={chaiWalaImg}
          backgroundColor={white}
          headingColor={pink}
          textColor={brown}
          btnBgColor={brown}
          btnColor={yellow}/>

          <Misc/>
          <Footer/> */}