import React from 'react'
import { Typography, Slider } from '@mui/material'
import { Container, Col } from 'react-bootstrap'

const CustomSlider = ({ task, taskCompleted }) => {
    return (
        <>
            <Container>
                <Col>
                    <Typography variant='h6'> {task} </Typography>
                    <Slider sx={{ width: 300, color: 'black' }}
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