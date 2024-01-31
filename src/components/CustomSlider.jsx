import React from 'react'
import { Typography, Slider } from '@mui/material'
import { Container, Col } from 'react-bootstrap'
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import './styles/CustomSlider.css'

const CustomSlider = ({ task, taskCompleted }) => {
    return (
        <>
            <Container>
                <Col>
                <div className='header'> <InsertPhotoRoundedIcon /> <Typography variant='h6'> {task} </Typography> </div>
                        <Slider sx={{ width: 400, height: 5, color: 'black', }}
                            aria-label="Always visible"
                            defaultValue={taskCompleted}
                            step={5}
                            valueLabelDisplay="auto" />
                </Col>
            </Container>
        </>
    )
}

export default CustomSlider