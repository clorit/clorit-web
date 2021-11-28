import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';
import '../scss/LoginTemplate.scss';
import {Formik} from 'formik';
import Icon from '@ant-design/icons';
import {Form, Button } from 'antd';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import { loginUser } from '../_actions/user_action';

function LoginTemplate(props){

  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(rememberMeChecked)

  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  };

  const initialEmail = localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '';

  return (
    <Formik
      initialValues={{
        email: initialEmail,
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password
          };

          console.log("!")

          dispatch(loginUser(dataToSubmit))
            .then(
              response => {
              if (response.payload.loginSuccess) {
                window.localStorage.setItem('userId', response.payload.userId);
                if (rememberMe === true) {
                  window.localStorage.setItem('rememberMe', values.id);
                } else {
                  localStorage.removeItem('rememberMe');
                }
                props.history.push("/");
              } else {
                setFormErrorMessage('Check out your Account or Password again')
              }
            })
            .catch(err => {
              setFormErrorMessage('Check out your Account or Password again')
              setTimeout(() => {
                setFormErrorMessage("")
              }, 3000);
            });
          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className='LoginTemplate'>
      <div className='Top'>로그인</div>
      <div className='Form'>
      <Form.Item required>
        <input 
         id="email"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Enter your email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }/>
                  </Form.Item>
                  <Form.Item required>
        <input id="password"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                 </Form.Item>
        <Form.Item>
        <button onclick="window.location.href='/'">Log in</button>
          </Form.Item>
        <div className='Bottom'>
          <div className='Item'>자동로그인</div>
          <div className='Item'>아이디 찾기</div>
          <div className='Item'>비밀번호 찾기</div>
        </div>
      </div>
      <div className='ButtonGroup'>
        <button style={{ background: '#FEE500', border: '1px solid #FEE500' }}>
          카카오 로그인
        </button>
        <button style={{ background: '#FFFFFF', border: '1px solid #BFBFBF' }}>
          Google 로그인
        </button>
      </div>
      <div className='Bottom'>
        <span className='Clorit'>클로릿</span>
        <span>의 회원혜택을 받아보세요 </span>
        <Link to='/register' style={{ textDecoration: 'none', color: 'blue' }}>
          회원가입
        </Link>
      </div>
    </div>
        );
      }}
    </Formik> 
  );
};

export default LoginTemplate;
