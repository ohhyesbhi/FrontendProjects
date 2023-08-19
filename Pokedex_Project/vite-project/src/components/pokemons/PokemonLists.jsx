
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography'
import randomColor from "randomcolor";
import { Link } from 'react-router-dom';
import {v4 as uuidv4} from "uuid";
import Loader from '../loader/Loader';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Typography} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));






function PokemonLists({list,count,setId}) {
  const classes = useStyles();

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
                   className={classes.media}
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
