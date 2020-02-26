import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from '@material-ui/core/Checkbox';


const zutaten_anwaehlen = (props) => {

    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox color="secondary" checked={props.index} onChange={() => props.onChange(props.Ingredients, props.index)}/>
                }
                label={props.Ingredients}
            />
        </div>
    );
};

export default zutaten_anwaehlen;