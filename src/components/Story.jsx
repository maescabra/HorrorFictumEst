import React, { useState, useEffect } from "react";
import { useScrollDirection } from "../hooks/useScrollDirection";
import {
    Container, Button, makeStyles
} from '@material-ui/core';
import Next from '../components/icons/Next';
import Previous from '../components/icons/Previous';

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
        position: 'sticky',
        bottom: '0',
        backgroundColor: "rgba(15, 12, 12, 0.7)",
       
        "& span": {
            fontSize:'2em',
            paddingRight:theme.spacing(5),
            paddingLeft:theme.spacing(5),
            "& p": {
                fontWeight:"200",
                textTransform:"none",
                fontSize:"20px",
                marginRight:theme.spacing(2),
                marginLeft:theme.spacing(2),
            }
            
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
                    <Previous/>  <p>Partie précédente</p>
                </Button>}

                {page < story.texte.length-1 && <Button onClick={() => setPage(page+1)}>
                    <p>Partie suivante</p>  <Next/>
                </Button>}
            </div>

        </Container>
    )
    
}
export default Story;