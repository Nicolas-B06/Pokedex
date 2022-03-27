import React from 'react';
import './card.css';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

export default function PokeCard({name, types , lang}) {

    const type = name.types.map((type)=>{return type})
    
    return(
        <Card sx={{ width: 220, height: 200, my: '10px', mx: '7px', color: 'black', padding: '5px' }} className={"card "+type[0]+" "+type[1]}>
            <Typography component="h6" sx={{ textAlign: 'start' }}>
             {' '}
             No.{name.id}
            </Typography>
            <Typography component="h6" sx={{ textAlign: 'center' }}>
            {' '}
            {name.names[lang]}{' '}
            </Typography>
            <CardMedia sx={{ textAlign: 'center' }}>
            <img src={name.image} alt="photo_pokemon" />
            </CardMedia>
            <CardContent>
            <Typography component="div" sx={{ display: 'flex', justifyContent: 'center', gap:'15px' }}>
              {name.types.map((type) => {
                return (
                  <Box key={type} className={'type-' + type}>
                    {' '}
                    {types[type][lang]}
                  </Box>
                )
              })}
            </Typography>
            </CardContent>
        </Card>

    )
}