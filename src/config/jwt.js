/* eslint-disable prettier/prettier */
// import jwtDecode from 'jwt-decode';
// import jwt from 'jsonwebtoken';
//
// import React from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from './axios';

// ----------------------------------------------------------------------

// const isValidToken = (accessToken) => {
//   if (!accessToken) {
//     return false;
//   }

//     // ----------------------------------------------------------------------

//     const decoded = jwtDecode(accessToken);
//     const currentTime = Date.now() / 1000;

//     return decoded.exp > currentTime;
//   };

  //  const handleTokenExpired = (exp) => {
  //   let expiredTimer;

  //   window.clearTimeout(expiredTimer);
  //   const currentTime = Date.now();
  //   const timeLeft = exp * 1000 - currentTime;
  //   console.log(timeLeft);
  //   expiredTimer = window.setTimeout(() => {
  //     console.log('expired');
  //     // You can do what ever you want here, like show a notification
  //   }, timeLeft);
  // };

  // ----------------------------------------------------------------------

  const setSession = async (accessToken) => {
    try {
      if (accessToken) {
        await AsyncStorage.setItem('accessToken', accessToken);
        // const AccessToken = await AsyncStorage.getItem('accessToken');
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        // This function below will handle when token is expired
        // const { exp } = jwtDecode(accessToken);
        // handleTokenExpired(exp);
      } else {
        await AsyncStorage.removeItem('accessToken');
        delete axios.defaults.headers.common.Authorization;
      }
    } catch (error) {
      console.error('Stroing Access Token Eroor', error)
    }
  };

  export { setSession };