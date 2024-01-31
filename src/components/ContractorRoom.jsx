import React from 'react'
import { CustomSlider, PieChartComponent, Header, UserSidebar } from '.'
import './styles/Room.css'
import { Container } from 'react-bootstrap'


const ContractorRoom = () => {
    return (
        <>
            <Header />
            <div className='body'>
                <UserSidebar />
                {/* Use map function to display the tasks */}
                <div className='wrapper'>
                    <Container>
                        <h1 className='room-name'>Kitchen</h1>
                    </Container>

                    <div className='stats-section'>
                        <PieChartComponent className='pie'/>
                    </div>
                    <div className='task-wrapper'>
                        <CustomSlider task='Flooring' taskCompleted={80} />
                        <CustomSlider task='Painting' taskCompleted={20} />
                        <CustomSlider task='Plumbing' taskCompleted={40} />
                        <CustomSlider task='Tiling' taskCompleted={10} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContractorRoom;