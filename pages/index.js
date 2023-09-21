import React from 'react';
import Box from '@mui/material/Box';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import { Button, IconButton } from '@mui/material';

function App() {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        height={500}
        width={1000}
        bgcolor="primary.main"
        color="primary.contrastText"
      >
        {/* Camera and Controller Box */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          margin="10px"
        >
          {/* Camera Box */}
          <Box
            width={400}
            height={250}
            bgcolor="secondary.main"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            Camera 
          </Box>

          {/* Controller Box */}
          <Box
            width={400}
            height={150}
            bgcolor="secondary.main"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            margin="10px"
          >
            {/* Buttons */}
            <Button variant="contained" color="primary" style={{ marginBottom: '10px', marginRight: '200px', marginTop:'15px' }}>
              Home
            </Button>
            <Button variant="contained" color="secondary" style={{ marginBottom: '10px', marginRight: '200px' }}>
              Button 2
            </Button>
            <Button variant="contained" color="primary"style={{ marginRight: '200px'}}>
              Button 3
            </Button>
            <IconButton>
              {/* Camera controller */}
              <ControlCameraIcon style={{ fontSize: 48, marginLeft: '150px', position: "absolute", marginBottom: '125px', textAlign: "centre" }} />
            </IconButton>
          </Box>
        </Box>

        {/* X-Y Router Box (smaller) */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          margin="10px"
        >
          {/* X-Y Router Box */}
          <Box
            width={300} 
            height={250} 
            bgcolor="secondary.main"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            X-Y Router
          </Box>

          {/* Controller Box */}
          <Box
            width={300} 
            height={150} 
            bgcolor="secondary.main"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            margin="10px"
          >
            {/* Buttons */}
            <Button variant="contained" color="primary" style={{ marginBottom: '10px', marginRight: '100px', marginTop:'15px' }}>
              Home
            </Button>
            <Button variant="contained" color="secondary" style={{ marginBottom: '10px', marginRight: '100px' }}>
              Button 2
            </Button>
            <Button variant="contained" color="primary" style={{ marginRight: '100px'}}>
              Button 3
            </Button>
            <IconButton>
              {/* X-Y Router controller */}
              <ControlCameraIcon style={{ fontSize: 48, marginLeft: '150px', position: "absolute", marginBottom: '125px', textAlign: "centre" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
