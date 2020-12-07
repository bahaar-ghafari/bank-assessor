import React from 'react'
import {FormControlLabel,Checkbox}  from '@material-ui/core';
type Iprops ={
    value:string
    color:"primary" | "default" | "secondary" | undefined
     label:string
}
export default function CustomCheckBox(props:Iprops) {
    const {
        value,color, label,
    }= props
    return (
        <FormControlLabel
        control={<Checkbox 
            value={value} 
            color={color}
            />}
        label={label}
        />
    )
}