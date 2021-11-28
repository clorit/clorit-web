import React from 'react';
import '../scss/MainLayout_Upload.scss';
import { PhotoCamera } from '@mui/icons-material'
import { Input, IconButton } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import iu from '../asset/image/iu.png';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



const MainLayout_Upload = () => {
  return (
    <ThemeProvider theme={darkTheme}>
        <div className='MainLayout_Search'>
            <div className = 'bigContainer'>
              <div className = 'container'>
                <Grid container spacing={1}>
                  <Grid className ='date' item>
                      아티스트
                  </Grid>
                  <Grid item>
                      <FormControl style={{ minWidth:120 }}>
                          <InputLabel>그룹</InputLabel>
                          <Select
                              label='Year'
                          >
                          </Select>
                      </FormControl>
                  </Grid>
                  <Grid item>
                      <FormControl style={{ minWidth:120 }}>
                          <InputLabel>멤버</InputLabel>
                          <Select
                              label='Month'    
                          >
                          </Select>
                      </FormControl>
                  </Grid>
                </Grid>
              </div>
                <div className = 'container'>
                  <Grid container spacing={1}>
                    <Grid className ='date' item>
                        행사날짜
                    </Grid>
                    <Grid item>
                        <FormControl style={{ minWidth:120 }}>
                            <InputLabel>연</InputLabel>
                            <Select
                                label='Year'
                            >
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl style={{ minWidth:120 }}>
                            <InputLabel>월</InputLabel>
                            <Select
                                label='Month'    
                            >
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl style={{ minWidth:120 }}>
                        <InputLabel>일</InputLabel>
                            <Select
                                label='Day'    
                            >
                            </Select>
                        </FormControl>
                    </Grid>
                  </Grid>
                </div>
                
                <div className = 'container'>
                    <Grid container spacing={1}>
                        <Grid className ='date' item>
                            행사종류
                        </Grid>
                        <Grid item>
                            <FormControl style={{ minWidth:250 }}>
                              <InputLabel>행사종류</InputLabel>
                                <Select
                                    label='Color'
                                >
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </div>
                <div className = 'container'>
                    <Grid container spacing={4}>
                        <Grid className ='date' item>
                            행사명
                        </Grid>
                        <Grid item>
                            <FormControl style={{ minWidth:250 }}>
                              <InputLabel>행사명</InputLabel>
                                <Input
                                    label='Color'
                                >
                                </Input>
                            </FormControl>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <hr size='2' width='1400px' color='#626060'/>


            <div className = 'bigContainer'>
              <div className = 'container'>
                <Grid container spacing={4}>
                  <Grid className ='date' item>
                      제품명
                  </Grid>
                  <Grid item>
                      <FormControl style={{ minWidth:250 }}>
                          <InputLabel>제품명</InputLabel>
                          <Input
                              label='Year'
                          >
                          </Input>
                      </FormControl>
                  </Grid>
                </Grid>
              </div>
              <div className = 'container'>
                <Grid container spacing={1}>
                  <Grid className ='date' item>
                      카테고리
                  </Grid>
                  <Grid item>
                      <FormControl style={{ minWidth:120 }}>
                          <InputLabel></InputLabel>
                          <Select
                              label='Year'
                          >
                          </Select>
                      </FormControl>
                  </Grid>
                  <Grid item>
                      <FormControl style={{ minWidth:120 }}>
                          <InputLabel></InputLabel>
                          <Select
                              label='Month'    
                          >
                          </Select>
                      </FormControl>
                  </Grid>
                </Grid>
              </div>    
              <div className = 'container'>
                    <Grid container spacing={6}>
                        <Grid className ='date' item>
                            색상
                        </Grid>
                        <Grid item>
                            <FormControl style={{ minWidth:250 }}>
                              <InputLabel>색상</InputLabel>
                                <Input
                                    label='Color'
                                >
                                </Input>
                            </FormControl>
                        </Grid>
                    </Grid>
              </div> 
              <div className = 'container'>
                    <Grid container spacing={1}>
                        <Grid className ='date' item>
                            브랜드명
                        </Grid>
                        <Grid item>
                            <FormControl style={{ minWidth:250 }}>
                              <InputLabel>브랜드명</InputLabel>
                                <Input
                                    label='Color'
                                >
                                </Input>
                            </FormControl>
                        </Grid>
                    </Grid>
              </div>
              <div className = 'container'>
                    <Grid container spacing={6}>
                        <Grid className ='date' item>
                            가격
                        </Grid>
                        <Grid item>
                            <FormControl style={{ minWidth:250 }}>
                              <InputLabel>가격</InputLabel>
                                <Input
                                    label='Color'
                                >
                                </Input>
                                
                            </FormControl>
                            <Select label='kind'>
                              {/* <InputLabel>단위</InputLabel> */}
                              <MenuItem>$</MenuItem>
                              <MenuItem>KRW</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
              </div>
              <div className = 'container'>
                    <Grid container spacing={6}>
                        <Grid className ='date' item>
                            태그
                        </Grid>
                        <Grid item>
                            <FormControl style={{ minWidth:1000 }}>
                              <InputLabel>태그</InputLabel>
                                <Input
                                    label='Color'
                                >
                                </Input>
                            </FormControl>
                        </Grid>
                    </Grid>
              </div>
            </div>
                  


        </div>
    </ThemeProvider>
  );
};

export default MainLayout_Upload;
