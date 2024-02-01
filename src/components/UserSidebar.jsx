import React from 'react'
import { Stack, Typography } from '@mui/material'
import { categories } from '../utils/constants'
import { Image } from 'react-bootstrap'
import './styles/UserSidebar.css'

const selectedCategory = 'New';
const logo_url='https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const Sidebar = ({selectedCategory, setSelectedCategory}) => (
  <div className='slider'>
  <Stack direction='row'
    sx={{
      overflow: 'auto',
      height: { sx: 'auto', md: '100vh' }, width: '300px',
      flexDirection: { md: 'column', borderRight: '0.2px solid rgb(191, 191, 191)' }
    }}>

    <Image src={logo_url} style={{height:'100px', width:'100px', borderRadius:'50%', marginLeft:'90px', marginTop:'30px'}}></Image>
    <Typography sx={{opacity: '80%', fontSize:'20px' ,letterSpacing:'1px', fontVariant:'all-petite-caps', mt:'20px' ,ml:'70px', mb:'20px', color:'#FFC83D'}}>Happy Homes</Typography>

    {categories.map((category) => (
      <button
        className='category-btn'
        onClick={ () => {
          setSelectedCategory(category.name)
        }}
        style={{
          background: category.name === selectedCategory && 'white',
          color: 'white'
        }}
        key={category.name}>

        <span style={{ color: category.name === selectedCategory ? 'blue' : 'gray', marginRight: '15px' }}>
          {category.icon}</span>
        <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>
          {category.name}</span>

      </button>
    ))}

  </Stack>
  </div>
)

export default Sidebar