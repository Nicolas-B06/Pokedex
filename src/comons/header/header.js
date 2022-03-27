import React from 'react';
import logoSrc from './logo.svg';
import draco4 from './draco4.gif';
import {Box, FormControl, MenuItem, Select, styled, Typography, CardMedia} from "@mui/material";
import './header.css';

const CssFormcontrol = styled(FormControl)({
    '& label.Mui-focused': {
      color: '#ff7f50',
    },
    '& label': {
      color: 'white',
    },
  
    '& .MuiOutlinedInput-root': {
      color: 'white',
  
      '& .MuiSelect-select': {
        marginRight: '30px',
      },
  
      '& svg': {
        color: 'white',
      },
  
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.23)',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ff7f50',
      },
    },
  })

export default function Header({lang , setLang}) {

    function onChange(e){
        setLang(e.target.value);
    }
    
    return (
      <>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', px:'15px', paddingTop:'10px'}}>
            <Typography component="img" src={logoSrc} alt="logo" height={60}/>
            <Typography component="div" >
                <CssFormcontrol>
                  <Select value={lang} onChange={onChange} onBlur={onChange}>
                    <MenuItem value="fr">Français</MenuItem>
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="ja">日本</MenuItem>
                    <MenuItem value="es">Español</MenuItem>
                    <MenuItem value="de">Deutsch</MenuItem>
                    <MenuItem value="it">Italiano</MenuItem>
                    <MenuItem value="ko">한국어</MenuItem>
                  </Select>
                </CssFormcontrol>    
            </Typography>     
        </Box>
        <CardMedia sx={{ textAlign: 'center' }}>
            <img src={draco4} alt='gif pokemon' width='150px' />
        </CardMedia>
      </>
    )
}
