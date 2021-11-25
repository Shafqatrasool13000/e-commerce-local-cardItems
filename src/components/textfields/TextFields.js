import React from 'react'
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

export default function TextFields(props) {
    const {label,name,placeholder,type,value,onchange,onblur,icon}=props
    // console.log('icon',icon)
    return (
        <>
            <TextField
                fullWidth
                label={label}
                name={name}
                placeholder={placeholder}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ProductionQuantityLimitsIcon color='primary'/>
                      </InputAdornment>
                    ),
                  }}
                type={type}
                value={value}
                onChange={onchange}
                onBlur={onblur}
            />
        </>
    );
}
