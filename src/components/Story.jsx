import React, { useState, useEffect } from "react";
import { useScrollDirection } from "../hooks/useScrollDirection";
import {
    Container, Button, makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    image: {
        width:'15%',
        borderRadius:'20px',
    },
    container: {
        "& p": {
            textAlign:'left',
            fontSize:'13',
        }
    }
}))

const Story = ({story}) => {
    const [page,setPage]=useState(0);
    const [isPageScrolled,setIsPageScrolled]=useState(false);
    const scrollDir = useScrollDirection();
    const classes = useStyles();
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
    return (
        <Container className={classes.container} onScroll={() => {
            console.log("scroll");
        }}>
        <h1>{story.title}</h1>
        <img src={story.image} className={classes.image}></img>
        
            {scrollDir}
            {page < story.texte.length-1 && <Button
                onClick={() => setPage(page+1)}
            >Page suivante
            </Button>
            }
            {page > 0 && <Button
                onClick={() => setPage(page-1)}
            >Page précédente
            </Button>
            }
            <div style={{height:"1600px"}}>
            {story.texte[page]}
            </div>
            {story.texte[page]}
        </Container>
    )
    
}
export default Story;