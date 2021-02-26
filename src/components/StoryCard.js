import {useEffect, useState} from 'react';
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
    span: {
        height: theme.spacing(1),
        display:"block",
    },
    media: {
        height: 0,
        paddingTop: '80.25%',
    }
}))

export default function StoryCard({genre, description, title, longueur, url, image, date}) {
    
    const [overflow, setOverflow]=useState(false);
    const [isSetOverflow, setIsSetOverflow]=useState(false);
    useEffect(() =>{
        if(!isSetOverflow){
            setOverflow(description.length>64);
            setIsSetOverflow(true);
        }
    }, []);
    const classes = useStyles({overflow});
    const formatImage = formatimg(image);

    return (
        <Card>
            <CardHeader
                genre={genre}
                title={title}
                subheader={date}
                longueur={longueur}
                url={url}
            />
            <CardMedia
                className={classes.media}
                image={image}
                title={title}
            />
            <CardContent>
                <div>
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