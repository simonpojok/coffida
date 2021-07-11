import React from 'react';
import { InnerContainer, PageLogo, PageTitle, StyledContainer, StyledFormArea, SubTitle } from '../components/styles';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { View } from 'react-native';

const Login = () => {
  return (
    <StyledContainer>
      <StatusBar style='dark' />
      <InnerContainer>
        <PageLogo resizeMode='cover' source={require('./../assets/img/coffee_cup_transparent.jpg')} />
        <PageTitle>CoffiDa</PageTitle>
        <SubTitle>Account Login</SubTitle>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => <StyledFormArea>

          </StyledFormArea>}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({label, icon, ...props}) => {
  return (<View>

  </View>)
}
export default Login;
