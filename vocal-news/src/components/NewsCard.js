import React from 'react';
import AllCards from "./AllCards";
import { Grid,Grow } from '@material-ui/core';
import { Typography } from '@mui/material';

import "./styles/styles1.css"

function NewsCard({article,activeArticle}) {

  const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'latest news from Health' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, TechCrunch, Apple...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ];
  
  
   if(article.length == 0){
    return (
      <>
     <Grow in>
        <Grid className="containers" container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className="infoCard">

              <div className="card" style={{ backgroundColor: infoCard.color }}>
                <Typography sx={{textAlign:"center"}} 
                  variant="h5"
                  component="h5">
                  {infoCard.title}
                </Typography>

                {infoCard.info ? <Typography sx={{textAlign:"center"}} variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography sx={{textAlign:"center"}} variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>
            
            </Grid>
          ))}
        </Grid>
      </Grow>
      </>
    )
   }

  return (
   <>
   <Grow in>
     <Grid className="container" container alignItems="stretch" spacing={3} style={{padding:"5.5%"}}>

      {article.map((item,i)=>(
        <Grid item xs={12} sm={6} md={4} lg={3} style={{display:"flex"}}>
          <AllCards 
            time={item.publishedAt} 
            image={item.urlToImage} 
            newsFrom={item.source.name} 
            i={i+1} 
            activeArticle={activeArticle} 
            title={item.title} 
            url={item.url} 
            textContent={item.content}/>
        </Grid>
      ))}
     </Grid>
   </Grow>
      
   </>
  )
}

export default NewsCard
