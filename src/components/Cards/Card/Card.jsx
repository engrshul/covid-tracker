import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './Card.module.css'

const useStyles = makeStyles({
  root: {
    backgroundColor : 'orange',
    margin : '1%',
    maxWidth : '25%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function CardComponent({ cardTitle, value, updatedAt,cardSubtitle }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} xs={12}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {cardTitle}
        </Typography>
        <Typography variant="h20" component="h2" variant ="subtitle2">
          {value}
        </Typography>
        <Typography variant="h6" component="h2">
          {new Date(updatedAt).toDateString()}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {cardSubtitle}
        </Typography>    
      </CardContent>
     
    </Card>
  );
}

export default CardComponent
