import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';

import "./styles/Allcards.css";


export default function BasicCard({time,image,newsFrom,title,textContent,url,i,activeArticle}) {
  time = time.slice(0,10);
  return (
    <Card
      sx={{ minWidth: 275 }}
      className={activeArticle == i ? "activeCard" : null}
    >
      <CardActionArea
        href={url}
        target="_blank"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <CardMedia
            component="img"
            height="140"
            image={
              !image
                ? "https://media.11alive.com/assets/WXIA/images/086a3e8f-f746-4e1b-acc2-c6513eb6bead/086a3e8f-f746-4e1b-acc2-c6513eb6bead_1920x1080.jpg"
                : image
            }
            alt="Paella dish"
          />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Published At : {time}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {newsFrom + " news"}
          </Typography>
          <Typography variant="h5" component="div">
            {title + "..."}
          </Typography>
          <Typography sx={{ mt: 1.5 }} color="text.secondary">
            {/* {textContent+"...."} */}
            {!textContent ? title + ". click to read more..." : textContent}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
          href={url}
          target="_blank"
        >
          <Button size="small">Learn More</Button>
          <Typography color="text.secondary">{i}</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
