import React from 'react';
import '../scss/MainLayout_Upload.scss';
import { PhotoCamera } from '@mui/icons-material';
import { Input, IconButton, Button } from '@mui/material';
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
  const onClick = () => {
    alert('업로드 되었습니다.');
    window.location.href = '/';
  };
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const group = [
    '골든차일드',
    '구구단',
    '뉴이스트',
    '더보이즈',
    '동방신기',
    '러블리즈',
    '로켓펀치',
    '레드벨벳',
    '마마무',
    '몬스타엑스',
    '방탄소년단',
    '보이프렌드',
    '비투비',
    '빅뱅',
    '빅스',
    '빅톤',
    '소녀시대',
    '샤이니',
    '세븐틴',
    '슈퍼주니어',
  ];
  const member_bts = ['뷔', '슈가', '정국', '제이홉', '지민', '진', 'RM'];
  const events = [
    '콘서트',
    '방송',
    '출국길',
    '촬영',
    'MV',
    '라이브',
    'SNS',
    '기타',
  ];
  const cloth_category_1st = [
    '상의',
    '하의',
    '아우터',
    '신발',
    '액세서리',
    '모자',
    '기타',
  ];
  const cloth_category_2nd = [
    '가디건',
    '니트/스웨터',
    '반팔 티셔츠',
    '민소매 티셔츠',
    '긴팔 티셔츠',
    '셔츠/블라우스',
    '맨투맨/스웨트 셔츠',
    '피케/카라 티셔츠',
    '기타 상의',
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <div className='MainLayout_Search'>
        <div className='bigContainer'>
          <div className='container'>
            <Grid container spacing={1}>
              <Grid className='date' item>
                아티스트
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 120 }}>
                  <InputLabel>그룹</InputLabel>
                  <Select label='Year'>
                    {group.map((group) => (
                      <MenuItem value={group}>{group}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 120 }}>
                  <InputLabel>멤버</InputLabel>
                  <Select label='Month'>
                    {member_bts.map((member) => (
                      <MenuItem value={member}>{member}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <div className='container'>
            <Grid container spacing={1}>
              <Grid className='date' item>
                행사날짜
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 120 }}>
                  <InputLabel>연</InputLabel>
                  <Select label='Year'>
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
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 120 }}>
                  <InputLabel>월</InputLabel>
                  <Select label='Month'>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 120 }}>
                  <InputLabel>일</InputLabel>
                  <Select label='Day'>
                    {days.map((day) => (
                      <MenuItem value={day}>{day}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>

          <div className='container'>
            <Grid container spacing={1}>
              <Grid className='date' item>
                행사종류
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 250 }}>
                  <InputLabel>행사종류</InputLabel>
                  <Select label='Color'>
                    {events.map((event) => (
                      <MenuItem value={event}>{event}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <div className='container'>
            <Grid container spacing={4}>
              <Grid className='date' item>
                행사명
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 250 }}>
                  <InputLabel>행사명</InputLabel>
                  <Input label='Color'></Input>
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <div className='container'>
            <Grid container spacing={1}>
              <Grid className='date' item>
                착용사진
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 250 }}>
                  {/* <InputLabel>행사명</InputLabel> */}
                  <Input label='Color' type='file'></Input>
                </FormControl>
              </Grid>
              <Grid className='date' item>
                사진출처
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 250 }}>
                  {/* <InputLabel>행사명</InputLabel> */}
                  <Input />
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </div>

        <hr size='2' width='1400px' color='#626060' />

        <div className='bigContainer'>
          <div className='container'>
            <Grid container spacing={4}>
              <Grid className='date' item>
                제품명
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 250 }}>
                  <InputLabel>제품명</InputLabel>
                  <Input label='Year'></Input>
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <div className='container'>
            <Grid container spacing={1}>
              <Grid className='date' item>
                착용사진
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 250 }}>
                  {/* <InputLabel>제품명</InputLabel> */}
                  <Input label='Year' type='file'></Input>
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <div className='container'>
            <Grid container spacing={1}>
              <Grid className='date' item>
                카테고리
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 120 }}>
                  <InputLabel></InputLabel>
                  <Select label='Year'>
                    {cloth_category_1st.map((ctg) => (
                      <MenuItem value={ctg}>{ctg}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 120 }}>
                  <InputLabel></InputLabel>
                  <Select label='Month'>
                    {cloth_category_2nd.map((ctg) => (
                      <MenuItem value={ctg}>{ctg}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <div className='container'>
            <Grid container spacing={6}>
              <Grid className='date' item>
                색상
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 250 }}>
                  <InputLabel>색상</InputLabel>
                  <Input label='Color'></Input>
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <div className='container'>
            <Grid container spacing={1}>
              <Grid className='date' item>
                브랜드명
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 250 }}>
                  <InputLabel>브랜드명</InputLabel>
                  <Input label='Color'></Input>
                </FormControl>
              </Grid>
            </Grid>
          </div>
          <div className='container'>
            <Grid container spacing={6}>
              <Grid className='date' item>
                가격
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 250 }}>
                  <InputLabel>가격</InputLabel>
                  <Input label='Color'></Input>
                </FormControl>
                <Select label='kind'>
                  {/* <InputLabel>단위</InputLabel> */}
                  <MenuItem value={'$'}>$</MenuItem>
                  <MenuItem value={'KRW'}>KRW</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </div>
          <div className='container'>
            <Grid container spacing={6}>
              <Grid className='date' item>
                태그
              </Grid>
              <Grid item>
                <FormControl style={{ minWidth: 1000 }}>
                  <InputLabel>태그</InputLabel>
                  <Input label='Color'></Input>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className='container'>
          <Grid container spacing={6}>
            <Grid className='date' item>
              <Button
                variant='contained'
                color='error'
                size='large'
                onClick={onClick}
              >
                업로드
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout_Upload;
