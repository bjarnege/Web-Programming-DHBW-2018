import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from '@material-ui/core/Checkbox';

/* Die nachfolgende Komponente dient dazu die Checkbox zu initialiseren, die die Auswahl der verfügbaren Zutaten ermöglicht*/
const zutaten_anwaehlen = (props) => {
    return (
        <div>
            <FormControlLabel
                control={ <Checkbox color="secondary" checked={props.index} onChange={() => props.onChange(props.ingredient, props.index)}/>                }
                label={props.ingredient}
            />
        </div>
    );
};
export default zutaten_anwaehlen;