import { makeStyles } from '@material-ui/core';
import logo from '../logo.png';


const useStyles = makeStyles(()=>({
    logo: {
        height: "15vmin",
        pointerEvents: "none",
    },

      
}))

const Logo = () => {
    const classes = useStyles();
    return <img src={logo} className={classes.logo} alt="logo" />
}

export default Logo;