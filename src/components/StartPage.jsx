import React from 'react';
import { Box, Typography } from "@mui/material";


const StartPage = () => {
    return (
        <Box>
            <Typography sx={ { textAlign: 'center', mt: 10 } }
                        component={ 'h2' }
                        variant={ 'h2' }>
                Start Page
            </Typography>
        </Box>
    );
};

export default StartPage;