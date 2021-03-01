import { green, purple, amber } from '@material-ui/core/colors';
import Psychology from '../components/icons/Psychology';
import Paranormal from '../components/icons/Paranormal';
import FirstPerson from '../components/icons/FirstPerson';

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
const firstperson = {
    name : "firstperson",
    color : amber[500],
    icon : <FirstPerson fill={amber[500]}/>,
}
const genres = {
    psychologique,paranormal,firstperson
}

export default genres;

export {genres,psychologique,paranormal,firstperson};