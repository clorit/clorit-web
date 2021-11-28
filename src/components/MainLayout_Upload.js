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
                
                
                
            </div>
            <div className='box1'>
                <div>
                    <p className = 't1'>최근 검색한</p>
                </div>   
                <div className = 'bar1'>
                    <div className='innerbox'>
                        <p>다현 라디오스타</p>
                    </div>
                    <div className='innerbox'>
                        <p>NCT127 무대의상</p>
                    </div>
                </div>
            </div>    
            <div className='box1'>
                <div>
                    <p className = 't1'>요즘 인기있는</p>
                </div>   
                <div className = 'bar1'>
                    <div className='innerbox'>
                        <p>인기가요 MC</p>
                    </div>
                    <div className='innerbox'>
                        <p>211002 더팩트뮤직어워즈</p>
                    </div>
                    <div className='innerbox'>
                        <p>세븐틴 Rock with you</p>
                    </div>
                    <div className='innerbox'>
                        <p>에스파 아는형님</p>
                    </div>
                </div>
                <div className = 'bar1'>
                    <div className='innerbox'>
                        <p>트레저</p>
                    </div>
                    <div className='innerbox'>
                        <p>TXT 안무영상</p>
                    </div>
                </div>
            </div> 
            <div className='box1'>
                <div>
                    <p className = 't1'>클로릿이 추천하는</p>
                </div>   
                <div className = 'bar1'>
                    <div className='innerbox_2'>
                        <p className = 't2'>#SM</p>
                        <p className = 't2'>할로윈</p>
                    </div>
                    <div className='innerbox_2'>
                        <p className = 't2'>비투비</p>
                        <p className = 't2'>우정반지</p>
                    </div>
                    <div className='innerbox_2'>
                        <p className = 't2'>#BTS</p>
                        <p className = 't2'>달려라방탄</p>
                    </div>
                    <div className='innerbox_2'>
                        <p className = 't2'>#정한</p>
                        <p className = 't2'>바닐라코</p>
                    </div>
                    <div className='innerbox_2'>
                        <p className = 't2'>#미주</p>
                        <p className = 't2'>놀면뭐하니</p>
                    </div>
                </div>
            </div>
            <div className='box1'>
                <div>
                    <p className = 't1'>실시간 인기 검색어</p>
                    <hr size='2' width='1400px' color='#626060'/>
                    <div className='pBox'>
                        <div className = 'pBox1'>
                            <p className = 't3'>1</p>
                        </div>
                        <div className = 'pBox2'>
                            <p className = 't4'>210428 팬미팅 지민</p>
                        </div>
                    </div>
                    <hr size='2' width='1400px' color='#626060'/>
                </div>   
            </div>       
        </div>
    </ThemeProvider>
  );
};

export default MainLayout_Upload;
