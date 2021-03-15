import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Catalog from "./Catalog";
import genres, { psychologique, paranormal, satanisme, crime } from "../types/genres";

const useStyles = makeStyles(theme=>({
    button: {
        textTransform: "capitalize",
    },
    gridContainer:{
        paddingBottom:theme.spacing(10),
    },
}))

const FilteredCatalog = ({ storylist }) => {

    const classes = useStyles();
    
    const filtres = [
        paranormal, psychologique, satanisme, crime
    ].map(genre=>genre.name)

   
    const filteredStories = storylist.filter(story => 
        story.genres.filter(({name}) => 
            filtres.includes(name)
        ).length 
    ) 

        

    console.log({filtres,genreHistoire:storylist[0].genres})
     // Quand on clique sur un bouton correspondant à un genre, on affiche seulement les cards qui sont du genre sélectionné. genre1 OU genre2
    /*maintenir un state comme dans LanguageSwitch.jsx qui contient une liste des filtres qu'on applique. Clic bouton = modifie bouton (outlined to contained) et appel fonction (onclick => updateFilters()) passer en paramètres le nom du filtre. Si le state contient déjà le nom, retirer sinon ajoute*/


    return (
        <>
            <Grid container spacing={2} className={classes.gridContainer}>
                {Object.entries(genres).map(([key, { name, color, icon }]) =>
                    <Grid item key={key}>
                        <Button
                            variant="outlined"
                            style={{ color, borderColor: color }}
                            startIcon={icon}
                            size="large"
                            className={classes.button}
                            id="buttonGenre"
                            onClick={() => {alert(genres.genre)}}
                        >
                            {name}
                        </Button>
                    </Grid>
                )
                }
            </Grid>
            <Catalog storylist={filteredStories} />
        </>

    )

}

export default FilteredCatalog;