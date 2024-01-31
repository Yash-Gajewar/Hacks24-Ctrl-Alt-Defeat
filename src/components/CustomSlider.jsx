import React from 'react'
import { Typography, Slider } from '@mui/material'
import { Container, Col } from 'react-bootstrap'
import './styles/CustomSlider.css'
import DeleteIcon from '@mui/icons-material/Delete';


const CustomSlider = ({ task, taskCompleted }) => {
    return (
        <>
            <Container>
                <Col>
                <div className='header'> <DeleteIcon style={{ color: 'red' }} /> <Typography variant='h6'> {task} </Typography> </div>
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