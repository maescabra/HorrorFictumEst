import {
    Container, makeStyles
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
    
    const classes = useStyles();
    return (
        <Container className={classes.container}>
        <h1>{story.title}</h1>
        <img src={story.image} className={classes.image}></img>
        {story.texte}
        </Container>
    )
    
}
export default Story;