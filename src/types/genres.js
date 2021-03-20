import { green, purple, amber, red, blue } from '@material-ui/core/colors';
import Psychology from '../components/icons/Psychology';
import Paranormal from '../components/icons/Paranormal';
import Satanisme from '../components/icons/Satanisme';
import Crime from '../components/icons/Crime';
import Policier from '../components/icons/Policier';

const psychologique = {
    name : "psychologique",
    color : purple[500],
    icon : <Psychology fill={purple[500]}/>,
}
const paranormal = {
    name : "paranormal",
    color : green[500],
    icon : <Paranormal fill={green[500]}/>,
}
const satanisme = {
    name : "satanisme",
    color : amber[500],
    icon : <Satanisme fill={amber[500]}/>,
}
const crime = {
    name : "crime",
    color : red[500],
    icon : <Crime fill={red[500]}/>,
}
const policier = {
    name : "policier",
    color : blue[500],
    icon : <Policier fill={blue[500]}/>,
}
const genres = {
    psychologique,paranormal,satanisme,crime,policier
}

export default genres;

export {genres,psychologique,paranormal,satanisme,crime,policier};