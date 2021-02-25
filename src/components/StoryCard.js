import {useRef, useEffect, useState} from 'react';
import {
    Grid, Typography, Card, CardHeader, CardMedia,
    CardActions, CardContent, IconButton, makeStyles
} from '@material-ui/core';
import { Favorite, Share } from '@material-ui/icons';
import formatimg from "../utils/formatimg";

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',
    },
    bolder: {
        fontWeight: '600',
    },
    actionsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    linkContainer: {
        justifyContent: 'center',
    },
    description: ({overflow}) => ({
        textAlign: 'left',
        height: theme.spacing(10),  
        overflow: overflow?"hidden":"unset",
    }),
    card: ({colorScheme}) => ({
        backgroundColor: colorScheme,

    }),
    span: {
        height: theme.spacing(1),
        display:"block",
    },
    media: {
        height: 0,
        paddingTop: '80.25%',
    }
}))

export default function StoryCard({title,image,description,date,alt,colorScheme}) {
    const descriptionContainer = useRef(null);
    const [height,setHeight]=useState(0);
    
    const [overflow, setOverflow]=useState(false);
    const [isSetOverflow, setIsSetOverflow]=useState(false);
    useEffect(() =>{
        if(!isSetOverflow){
            setOverflow(description.length>64);
            setIsSetOverflow(true);
        }
    }, []);
    const classes = useStyles({colorScheme,overflow});
    const formatImage = formatimg(image);

    return (
        <Card className={classes.card}>
            <CardHeader
                title={title}
                subheader={date}
            />
            <CardMedia
                className={classes.media}
                image={image}
                title={alt}
            />
            <h1>{height}</h1>
            <CardContent>
                <div ref={descriptionContainer}>
                <Typography className={`${classes.description} ${classes.bolder}`} variant="body2" color="textPrimary" component="p">
                    {description}
                </Typography>
                </div>
                <span className={classes.span}>{overflow?"...":""}</span> 
            </CardContent>
            <CardActions disableSpacing>
                <Grid container className={classes.actionsContainer}>
                    <Grid item xs={6}>
                        <IconButton aria-label="add to favorites">
                            <Favorite />
                        </IconButton>
                        <IconButton aria-label="share">
                            <Share />
                        </IconButton>
                    </Grid>
                    <Grid item container className={classes.linkContainer} xs={6}>
                        <a className={classes.link} href="example.com">
                            <Typography className={classes.bolder} variant="body2" color="textPrimary" component="p">
                                Lire la suite
                        </Typography>
                        </a>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}