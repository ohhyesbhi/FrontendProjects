import React,{useState,useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCard from "./components/NewsCard";
import wordsToNumbers from "words-to-numbers";
import { ToastContainer } from "react-toastify";
import {error} from "./components/utils/Toast";

import "./app.css";
import 'react-toastify/dist/ReactToastify.css';

const alanKey = process.env.REACT_APP_API_KEY;
console.log(process.env.REACT_APP_API_KEY)

const App = () =>{

    const [newsArticles,setNewsArticles] = useState([]);
    const [activeArticle,setActiveArticle] = useState(0);
    useEffect(()=>{
       alanBtn({
        key:alanKey,
        onCommand:({command,articles,number})=>{

           if(command == 'newHeadlines'){
            console.log(articles,"articles")
              setNewsArticles(articles)
           }

           else if(command == "highlight"){
            setActiveArticle((prevActiveArticle)=>prevActiveArticle + 1);
           }

           else if(command == "open"){
            const parsedNumber =
              number.length > 2
                ? wordsToNumbers(number, { fuzzy: true })
                : number;
            const article = articles[parsedNumber - 1];
            if (article) {
              window.open(articles[number - 1].url, "_blank");
            } else {
              error("There is NO article number that you have mentioned");
            }
           }
        }
       })
    },[]);

    return (
        <div>
            <ToastContainer/>
            <div className="logo">
                Vocal News
            </div>
           
            <NewsCard article={newsArticles} activeArticle = {activeArticle}/>

        </div>
    )
}

export default App;
