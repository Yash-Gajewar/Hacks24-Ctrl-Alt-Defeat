import React from 'react'
import { CustomSlider } from '../components'

import './styles/Room.css'

import { Typography, Slider } from '@mui/material'
import { Container } from 'react-bootstrap'

const Room = () => {
    return (
        <>
            <Container className='header'>
                <h1 className='room-name'>Kitchen</h1>
            </Container>
            {/* Use map function to display the tasks */}
            <div className='wrapper'>
                <CustomSlider task='Flooring' taskCompleted={80} />
                <CustomSlider task='Painting' taskCompleted={20} />
                <CustomSlider task='Plumbing' taskCompleted={40} />
                <CustomSlider task='Tiling' taskCompleted={10} />
            </div>
        </>

    )
}

export default Room