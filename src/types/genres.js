import { green, purple, red, indigo, orange } from '@material-ui/core/colors';
import Psychology from '../components/icons/Psychology';
import Paranormal from '../components/icons/Paranormal';
import Occulte from '../components/icons/Occulte';
import Policier from '../components/icons/Policier';
import Mystere from '../components/icons/Mystere';

const occulte = {
    name : "occulte",
    color : red["A700"],
    icon : <Occulte fill={red["A700"]}/>,
}
const psychologique = {
    name : "psychologique",
    color : purple[600],
    icon : <Psychology fill={purple[600]}/>,
}
const policier = {
    name : "policier",
    color : indigo[500],
    icon : <Policier fill={indigo[500]}/>,
}
const paranormal = {
    name : "paranormal",
    color : green[600],
    icon : <Paranormal fill={green[600]}/>,
}
const mystere = {
    name : "mystère",
    color : orange[800],
    icon : <Mystere fill={orange[800]}/>,
}

const genres = {
    occulte,psychologique,policier,paranormal,mystere,
}

export default genres;

export {genres,occulte,psychologique,policier,paranormal,mystere,};