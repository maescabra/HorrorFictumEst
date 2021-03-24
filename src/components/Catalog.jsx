import { Grid } from "@material-ui/core";
import StoryCard from "./StoryCard";

const Catalog = ({ storylist }) => {
    return (
        <Grid container spacing={4}>
            {storylist.map(({ genres, description, title, tempsLecture, url, image, date }, index) =>
                <Grid key={index} item xs={12} sm={6} lg={4}>
                    <StoryCard
                        title={title}
                        date={date}
                        description={description}
                        image={image}
                        tempsLecture={tempsLecture}
                        url={url}
                        genres={genres}
                    />
                </Grid>
            )
            }
        </Grid>
    )
}

export default Catalog;