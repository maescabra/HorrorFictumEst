import { colors } from "@material-ui/core";
import Catalog from "./Catalog";
import {psychologique,paranormal,firstperson} from "../types/genres";

const FilteredCatalog = ({storylist}) => {
    return(
        <>
            
            <Catalog storylist={storylist}/>
        </>
    )

}

export default FilteredCatalog;