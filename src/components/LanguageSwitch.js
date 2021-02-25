import {useState} from 'react';

const LanguageSwitch = () => {
    const [checked, setChecked]= useState(false);
    return(
        <>
            <label for="lg">Language</label>
            <input id="lg" value={checked} onClick={()=>setChecked(!checked)} type="radio"/>
            <h1>{checked?"FR":"EN"}</h1>
        </>
    )
}
export default LanguageSwitch;