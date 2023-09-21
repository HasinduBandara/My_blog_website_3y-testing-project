import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import logo from '../Images/ConnectMeee.png';
import InstagramIcon from '@material-ui/icons/Instagram';
// import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Container } from '@material-ui/core';
import logo from '../Images/logo.png'


function Footer() {
    return (


        <div style={{ backgroundColor: 'red', marginBottom: '0%' }} >
            <Grid container style={{ height: '300px',width:'auto', backgroundColor: '#d4c4fb', display: 'flex', justifyContent: 'center' }}
            >
               <Grid item xs={12} md={6} style={{ height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', paddingTop: '5px' }}>
                    <p style={{ color: '#2F72E3' }}>Smile Child Protection  </p>
                    <Container style={{ display: 'flex', justifyContent: 'center' }}>
                        <p><InstagramIcon style={{ color: '#D71948', marginRight: '15px', cursor: 'pointer' }} /></p>
                        <p><FacebookIcon style={{ color: '#2F72E3', marginRight: '15px', cursor: 'pointer' }} /></p>
                        <p><TwitterIcon style={{ color: '#89B8FF', marginRight: '15px', cursor: 'pointer' }} /></p>
                        <p><LinkedInIcon style={{ color: '#0965F2', marginRight: '15px', cursor: 'pointer' }} /></p>
                    </Container>

                    <Paper style={{ color: 'white', fontSize: '13px', backgroundColor: 'transparent', padding: '5px', fontWeight: 'bold' }}></Paper>
                </Grid>
				

            </Grid>
        </div >
    );
}

export default Footer