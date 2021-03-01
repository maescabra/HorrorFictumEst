import { Grid, makeStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Catalog from "./Catalog";
import genres from "../types/genres";

const useStyles = makeStyles(theme=>({
    button: {
        textTransform: "capitalize",
    },
    gridContainer:{
        paddingBottom:theme.spacing(15),
    }
}))

const FilteredCatalog = ({ storylist }) => {

    const classes = useStyles();

    return (
        <>
            <Grid container spacing={2} className={classes.gridContainer}>
                {Object.entries(genres).map(([key, { name, color, icon }]) =>
                    <Grid item>
                        <Button
                            key={key}
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
            <Catalog storylist={storylist} />
        </>

    )

}

export default FilteredCatalog;