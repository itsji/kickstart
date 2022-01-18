import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Head from 'next/head';
import Header from './Header';
 
const Layout = (props) => {
  return (
    <React.Fragment>
      <Head>
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
      </Head>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        {props.children}
      </Container>
    </React.Fragment>
  );
};
export default Layout;