import {Grid} from "@material-ui/core";
import StoryCard from "./StoryCard";

const Catalog = ({storylist}) => {
    return(
        storylist.map(({genre, description, title, longueur, url, image, date}, index)=>
        <Grid container spacing={4}>
            <Grid item xs={3}>
                <StoryCard
                key={index} 
                title={title}
                date={date}
                description={description}
                image={image}
                longueur={longueur}
                url={url}
                genre={genre}
                />
            </Grid>
        </Grid>

        )
    )
}

export default Catalog;