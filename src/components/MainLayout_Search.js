import React, { useState } from 'react';
import '../scss/MainLayout_Search.scss';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button, MenuItem } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Input } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const MainLayout_Search = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [color, setColor] = useState('');

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };
  const handleDayChange = (event) => {
    setDay(event.target.value);
  };
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <div className='MainLayout_Search'>
        <div className='bigContainer'>
          <div className='container'>
            <Grid container spacing={1}>
              <Grid className='date' item>
                행사날짜
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 120 }}>
                  <InputLabel>연</InputLabel>
                  <Select label='Year' value={year} onChange={handleYearChange}>
                    <MenuItem value={2021}>2021</MenuItem>
                    <MenuItem value={2020}>2020</MenuItem>
                    <MenuItem value={2019}>2019</MenuItem>
                    <MenuItem value={2018}>2018</MenuItem>
                    <MenuItem value={2017}>2017</MenuItem>
                    <MenuItem value={2016}>2016</MenuItem>
                    <MenuItem value={2015}>2015</MenuItem>
                    <MenuItem value={2014}>2014</MenuItem>
                    <MenuItem value={2013}>2013</MenuItem>
                    <MenuItem value={2012}>2012</MenuItem>
                    <MenuItem value={2011}>2011</MenuItem>
                    <MenuItem value={2010}>2010</MenuItem>
                    <MenuItem value={2009}>2009</MenuItem>
                    <MenuItem value={2008}>2008</MenuItem>
                    <MenuItem value={2007}>2007</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 120 }}>
                  <InputLabel>월</InputLabel>
                  <Select
                    label='Month'
                    value={month}
                    onChange={handleMonthChange}
                  >
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 120 }}>
                  <InputLabel>일</InputLabel>
                  <Select label='Day' value={day} onChange={handleDayChange}>
                    <MenuItem value={31}>31</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={29}>29</MenuItem>
                    <MenuItem value={28}>28</MenuItem>
                    <MenuItem value={27}>27</MenuItem>
                    <MenuItem value={26}>26</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={24}>24</MenuItem>
                    <MenuItem value={23}>23</MenuItem>
                    <MenuItem value={22}>22</MenuItem>
                    <MenuItem value={21}>21</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={19}>19</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <div className='container'>
            <Grid container spacing={1}>
              <Grid className='date_c' item>
                색상
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 250 }}>
                  <Select
                    label='Color'
                    value={color}
                    onChange={handleColorChange}
                  >
                    <MenuItem value={'검은색'}>검은색</MenuItem>
                    <MenuItem value={'하얀색'}>하얀색</MenuItem>
                    <MenuItem value={'노란색'}>노란색</MenuItem>
                    <MenuItem value={'갈색'}>갈색</MenuItem>
                    <MenuItem value={'파란색'}>파란색</MenuItem>
                    <MenuItem value={'빨간색'}>빨간색</MenuItem>
                    <MenuItem value={'주황색'}>주황색</MenuItem>
                    <MenuItem value={'초록색'}>초록색</MenuItem>
                    <MenuItem value={'카키색'}>카키색</MenuItem>
                    <MenuItem value={'하늘색'}>하늘색</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <div className='container'>
            <Grid container spacing={1}>
              <Grid className='date_c' item>
                <Button variant='contained' color='error'>
                  검색
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
        <hr size='2' width='1400px' color='#626060' />
        <div className='box1'>
          <div>
            <p className='t1'>최근 검색한</p>
          </div>
          <div className='bar1'>
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
            <p className='t1'>요즘 인기있는</p>
          </div>
          <div className='bar1'>
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
          <div className='bar1'>
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
            <p className='t1'>클로릿이 추천하는</p>
          </div>
          <div className='bar1'>
            <div className='innerbox_2'>
              <p className='t2'>#SM</p>
              <p className='t2'>할로윈</p>
            </div>
            <div className='innerbox_2'>
              <p className='t2'>비투비</p>
              <p className='t2'>우정반지</p>
            </div>
            <div className='innerbox_2'>
              <p className='t2'>#BTS</p>
              <p className='t2'>달려라방탄</p>
            </div>
            <div className='innerbox_2'>
              <p className='t2'>#정한</p>
              <p className='t2'>바닐라코</p>
            </div>
            <div className='innerbox_2'>
              <p className='t2'>#미주</p>
              <p className='t2'>놀면뭐하니</p>
            </div>
          </div>
        </div>
        <div className='box1'>
          <div>
            <p className='t1'>실시간 인기 검색어</p>
            <hr size='2' width='1400px' color='#626060' />
            <div className='pBox'>
              <div className='pBox1'>
                <p className='t3'>1</p>
              </div>
              <div className='pBox2'>
                <p className='t4'>210428 팬미팅 지민</p>
              </div>
            </div>
            <hr size='2' width='1400px' color='#626060' />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout_Search;
