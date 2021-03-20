import React, { useState, useEffect } from "react";
import { useScrollDirection } from "../hooks/useScrollDirection";
import {
    Container, Button, makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    image: {
        width:'15%',
        borderRadius:'20px',
    },
    container: {
        "& p": {
            textAlign:'left',
            fontSize:'2em',
        }
    },
    divTexte: {
        paddingTop:theme.spacing(3),
    },
    bouton: {
        "& span": {
            fontSize:'2em',
            marginLeft:theme.spacing(5),
            marginRight:theme.spacing(5),
        }
    }
}))

const Story = ({story}) => {
    const [page,setPage]=useState(0);
    const [isPageScrolled,setIsPageScrolled]=useState(false);
    const scrollDir = useScrollDirection();
    const classes = useStyles();
    /*
    useEffect(() => {
        if (isPageScrolled){
            if (scrollDir==="up" && page>0){
                setPage(page-1)
            }
            else if (page<story.texte.length-1){
                setPage(page+1)
            }
        }
        setIsPageScrolled(true);
    }, [scrollDir]);
    */

    return (
        <Container className={classes.container} onScroll={() => {
            console.log("scroll");
        }}>
        <h1>
            {story.title}
        </h1>
        <img src={story.image} className={classes.image}></img>
        
            <div className={classes.divTexte}>
                {story.texte[page]}
            </div>
            
            <div className={classes.bouton}>
                {page > 0 && <Button onClick={() => setPage(page-1)}>
                    Page précédente
                </Button>}

                {page < story.texte.length-1 && <Button onClick={() => setPage(page+1)}>
                    Page suivante
                </Button>}
            </div>

        </Container>
    )
    
}
export default Story;