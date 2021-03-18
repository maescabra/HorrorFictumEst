import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Catalog from "./Catalog";
import genres from "../types/genres";

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
    const [filtres, setFiltres] = useState([]
    );

    const filteredStories = filtres.length?storylist.filter(story => 
        story.genres.filter(({name}) => 
            filtres.includes(name)
        ).length 
    ):storylist;
    
    const indexFiltre = (filtre) => filtres.indexOf(filtre);
    
    const addFiltre = (filtre) => setFiltres(filtres => { 
        console.log("filtres ",filtres);
        const newFiltre = [...filtres,filtre];
        console.log("newFiltre ",newFiltre);
        console.log();
        return newFiltre;
        
    });
    const removeFiltre = (filtre) => setFiltres(filtres => {
        console.log("filtres ",filtres);
        console.log("indexFiltre(filtre) ",indexFiltre(filtre))
        const newFiltre = filtres.slice();
        newFiltre.splice(indexFiltre(filtre),1);
        console.log("newFiltre ",newFiltre);
        console.log();
        return newFiltre;
    });
    
    const toggleFiltre = (filtre) =>{
        if (filtres.includes(filtre) == true){
            removeFiltre(filtre);
            console.log("removeFiltre");
        }
            else {
                addFiltre(filtre);
                console.log("addFiltre");
            }
    }
     // Quand on clique sur un bouton correspondant à un genre, on affiche seulement les cards qui sont du genre sélectionné. genre1 OU genre2
    /*maintenir un state qui contient une liste des filtres qu'on applique. Clic bouton = modifie bouton (outlined to contained) et appel fonction (onclick => updateFilters()) passer en paramètres le nom du filtre. Si le state contient déjà le nom, retirer sinon ajoute*/

    
  
    return (
        <>
            <Grid container spacing={2} className={classes.gridContainer}>
                {Object.entries(genres).map(([key, { name, color, icon }]) => {
                    const isFiltered = filtres.includes(name);
                    const buttonStyle = {color, borderColor: color};
                    if (isFiltered){
                        buttonStyle.background = color;
                        buttonStyle.color = "black";
                    }
                    return <Grid item key={key}>
                        <Button
                            variant={isFiltered?"contained":"outlined"}
                            style={buttonStyle}
                            startIcon={icon}
                            size="large"
                            className={classes.button}
                            id="buttonGenre"
                            onClick={() => toggleFiltre(name)}
                        >
                            {name}
                        </Button>
                    </Grid>
                })
                }
            </Grid>
            <Catalog storylist={filteredStories} />
        </>

    )

}

export default FilteredCatalog;