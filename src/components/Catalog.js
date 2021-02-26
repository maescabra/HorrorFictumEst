const Catalog = ({storylist}) => {
    return(
        storylist.map(({genre, description, title, longueur, url, image, date}, index)=>
        <Grid item xs={width}>
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

        )
    )
}
