import { CheckBox } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardHeader, FormControlLabel, Radio, Typography } from '@mui/material'
import React from 'react'

export default function CardTask() {
  return (
    <Card sx={{maxWidth:350}}>
        <CardHeader title="Compleat Documentation"  subheader={<FormControlLabel control={<CheckBox color='info'/>} label="Due 4 July" value="date"  sx={{ml:"2px" , mt:1}}/>}/>
        <CardContent>
            <Typography variant='body2' component="div">
                Write The Required Documentation For The New API Endpoint
            </Typography>
            <CardActions>
                <Button variant='contained' fullWidth sx={{mt:2}}>Complete Task</Button>
            </CardActions>
        </CardContent>
    </Card>
  )
}
