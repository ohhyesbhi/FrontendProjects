import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import randomColor from "randomcolor";
import { Link } from 'react-router-dom';
import {v4 as uuidv4} from "uuid";
import Image from '../../imgLink/Image';
import Loader from '../loader/Loader';


function PokemonLists({list,count,setId}) {


  return (
    <>
      {list.length == 0 ? (
        <Loader />
      ) : (
        <>
          {list.map((item, i) => {
            let color = randomColor();
            return (
              <Link
                key={uuidv4()}
                style={{ textDecoration: "none", color: "black" }}
                to={`/pokemon/${count + i + 1}`}
                onClick={() => {
                  setId(count + i + 1);
                }}
              >
                <Card
                  sx={{
                    minWidth: { xs: 200, sm: 340, md: 340 },
                    minHeight: { xs: 200, sm: 300, md: 300 },
                    marginTop: "2rem",
                    marginLeft: "0.5rem",
                    backgroundColor: color,
                  }}
                >
                  <CardMedia
                    sx={{
                      height: { xs: 200, sm: 250, md: 250 },
                      width: { xs: 225, sm: 250, md: 250 },
                    }}
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                      count + i + 1
                    }.svg`}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography
                      color="white"
                      gutterBottom
                      variant="h4"
                      component="div"
                    >
                      {item.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </>
      )}
    </>
  );
}

export default PokemonLists
