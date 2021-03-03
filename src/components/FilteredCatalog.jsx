import { Grid, makeStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Catalog from "./Catalog";
import genres, { psychologique } from "../types/genres";

const useStyles = makeStyles(theme=>({
    button: {
        textTransform: "capitalize",
    },
    gridContainer:{
        paddingBottom:theme.spacing(10),
    }
}))

const FilteredCatalog = ({ storylist }) => {

    const classes = useStyles();
    const filtres = [
        psychologique.name
    ]
    // Quand on clique sur un bouton correspondant à un genre, on affiche seulement les cards qui sont du genre sélectionné. genre1 OU genre2
    const filteredStories = storylist.filter(story => 
        story.genres.filter(name => 
            filtres.includes(name)
        ).length 
    )

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