import React from 'react';
import Box from '@mui/material/Box';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import { Button, IconButton } from '@mui/material';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        bgcolor="primary.main"
        color="primary.contrastText"
        maxWidth="100%"
        width="100%"
        height="100%"
        padding="20px"
      >
        {/* Camera and Controller Box */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          margin="10px"
          flex="1.5"
        >
          {/* Camera Box */}
          <Box
            width="100%"
            height={400}
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
            width="100%"
            height={250}
            bgcolor="secondary.main"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            margin="10px"
          >
            {/* Buttons */}
            <Button variant="contained" color="primary" style={{ marginBottom: '10px', marginRight: '600px', marginTop:'15px' }}>
              Home
            </Button>
            <Button variant="contained" color="secondary" style={{ marginBottom: '10px', marginRight: '600px' }}>
              Button 2
            </Button>
            <Button variant="contained" color="primary"style={{ marginRight: '600px'}}>
              Button 3
            </Button>
            <IconButton>
              {/* Camera controller */}
              <ControlCameraIcon style={{ fontSize: 100, marginLeft: '150px', position: "absolute", marginBottom: '125px', textAlign: "centre" }} />
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
          flex="1"
        >
          {/* X-Y Router Box */}
          <Box
            width="100%" 
            height={400} 
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
            width="100%" 
            height={250} 
            bgcolor="secondary.main"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            margin="10px"
          >
            {/* Buttons */}
            <Button variant="contained" color="primary" style={{ marginBottom: '10px', marginRight: '300px', marginTop:'15px' }}>
              Home
            </Button>
            <Button variant="contained" color="secondary" style={{ marginBottom: '10px', marginRight: '300px' }}>
              Button 2
            </Button>
            <Button variant="contained" color="primary" style={{ marginRight: '300px'}}>
              Button 3
            </Button>
            <IconButton>
              {/* X-Y Router controller */}
              <ControlCameraIcon style={{ fontSize: 100, marginLeft: '150px', position: "absolute", marginBottom: '125px', textAlign: "centre" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
