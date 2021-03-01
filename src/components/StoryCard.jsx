import { useEffect, useState } from 'react';
import {
    Grid, Typography, Card, CardHeader, CardMedia,
    CardActions, CardContent, IconButton, makeStyles, Box
} from '@material-ui/core';
import { Favorite, Share, HourglassEmpty } from '@material-ui/icons';
import formatimg from "../utils/formatimg";

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',
    },
    bolder: {
        fontWeight: '500',
    },
    actionsContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    linkContainer: {
        justifyContent: 'center',
    },
    description: ({ overflow }) => ({
        textAlign: 'left',
        height: theme.spacing(10),
        overflow: overflow ? "hidden" : "unset",
        paddingTop: theme.spacing(2),
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4),
    }),
    span: {
        height: theme.spacing(1),
        display: "block",
    },
    media: {
        height: 0,
        paddingTop: '80.25%',
    },
    timeBox: {
        display: "flex",
        flexDirection: "row",
        top: theme.spacing(2.5),
        left: theme.spacing(3),
        position: "absolute",
    },
    genreBox: {
        display: "flex",
        flexDirection: "row",
        top: theme.spacing(2.5),
        right: theme.spacing(3),
        position: "absolute",
    },
    card: {
        position:"relative",
    },
    cardHeader: {
        marginTop: theme.spacing(3),
        '& span:first-child':{
            fontWeight: '600',
        }
    }
}))

export default function StoryCard({genres, description, title, tempsLecture, url, image, date }) {

    const [overflow, setOverflow] = useState(false);
    const [isSetOverflow, setIsSetOverflow] = useState(false);
    useEffect(() => {
        if (!isSetOverflow) {
            setOverflow(description.length > 64);
            setIsSetOverflow(true);
        }
    }, []);
    const classes = useStyles({ overflow });
    const formatImage = formatimg(image);

    return (
        <Card className={classes.card}>
            
            <Box className={classes.timeBox}>
                <HourglassEmpty />
                <Typography>
                    {tempsLecture} min
                </Typography>
            </Box>
            <CardHeader className={`${classes.cardHeader} ${classes.bolder}`}
                title={title}
                subheader={date}
            />
            <Box className={classes.genreBox}>
                {genres.map(({icon})=>icon)}
            </Box>
            <CardMedia
                className={classes.media}
                image={formatImage}
                title={title}
            />
            <CardContent>
                <div>
                    <Typography className={`${classes.description} ${classes.bolder}`} variant="body2" color="textPrimary" component="p">
                        {description}
                    </Typography>
                </div>
                <span className={classes.span}>{overflow ? "..." : ""}</span>
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
                        <a className={classes.link} href={url}>
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