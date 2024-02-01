// CustomSlider.js
import React, { useEffect } from 'react';
import { Slider, Box, Button } from '@mui/material';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import { Modal, Typography, Card, CardActionArea } from '@mui/material';
import { Image } from 'react-bootstrap';
import kitchen from '../assets/kitchen-1.jpg';

import './styles/CustomSlider.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CustomSlider = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSliderChange = (e) => {
    // Call the callback function to update the progress in the parent component
    console.log(e.target.value)
    props.setProgress(e.target.value);
  };

  return (
    <>
      <div className='header'>
        <Button onClick={handleOpen}>
          <InsertPhotoRoundedIcon sx={{ color: 'black' }} />
        </Button>
        <Typography variant='h6'> {props.task} </Typography>
      </div>
      <Slider
        sx={{ width: 850, height: 10, color: 'black', ml: '20px' }}
        aria-label='Always visible'
        defaultValue={props.taskCompleted}
        step={5}
        valueLabelDisplay='auto'
        onChange={handleSliderChange} // Call the handleSliderChange function on slider change
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='modal-imgs'>
            <Card sx={{ maxWidth: 280 }}>
              <CardActionArea>
                <Image src={kitchen}></Image>
              </CardActionArea>
            </Card>
            {/* Add more cards as needed */}
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CustomSlider;
