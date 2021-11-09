import React from 'react';
import '../scss/MainLayout_Search.scss';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const MainLayout_Search = () => {
  return (
    <ThemeProvider theme={darkTheme}>
        <div className='MainLayout_Search'>
            
                <Grid container spacing={1}>
                    <Grid item xs={1}>
                        행사날짜
                    </Grid>
                    <Grid item xs={1}>

                        <FormControl style={{ minWidth:120 }}>
                            <InputLabel>Year</InputLabel>
                            <Select
                                label='Year'
                            >
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl style={{ minWidth:120 }}>
                            <InputLabel>Month</InputLabel>
                            <Select
                                label='Month'    
                            >
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                
            

        </div>
    </ThemeProvider>
  );
};

export default MainLayout_Search;
