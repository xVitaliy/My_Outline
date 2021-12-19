import React from 'react';
import { FormControl, TextField } from "@mui/material";


const FillField = ({ label, placeholder, state, setState }) => {
    return (
        <FormControl sx={ { mr: 5 } }>
            <TextField value={ state }
                       onChange={ (e) => setState(e.target.value) }
                       variant={ 'standard' }
                       label={ label }
                       placeholder={ placeholder }
            />
        </FormControl>
    );
};

export default FillField;
