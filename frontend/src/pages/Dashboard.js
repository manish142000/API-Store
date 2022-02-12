import React from "react";
import Navbar from "../components/Navbar";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import styles from "./Dashboard.module.scss";
import image4 from "./images/bgimgRemove.png"
import image5 from "./images/autofree.png"
import Card from "../components/Card"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import image6 from "./images/4.png";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const Dashboard = () => {
  const title = "API Name";
  const url = "https://image.shutterstock.com/image-photo/nottingham-uk-11-04-2021-260nw-2075445847.jpg";
  const body = "Andu gundu thanda paani";
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className={styles.parent}>
        <div className={styles.rectangle}>
          <div className={styles.combined}>
            <img className={styles.image1} src={image1}></img>
            <img className={styles.image2} src={image2}></img>
            <img className={styles.image4} src = {image4}></img>
            <img className={styles.image5} src = {image5}></img>
            <button className={styles.Viewappbtn}>View App</button>
          </div>
          <img className={styles.image3} src={image3}></img>
        </div>
      </div>
      <h1 id={styles.h1}>All APIs</h1>
      <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Item><Card title={title} imageurl = {image1} body={body} /></Item>
              </Grid>
              <Grid item xs={3}>
                <Item><Card title={title} imageurl={image6} body={body} /></Item>
              </Grid>
              <Grid item xs={3}>
                <Item><Card title={title} imageurl={url} body={body} /></Item>
              </Grid>
              <Grid item xs={3}>
                <Item><Card title={title} imageurl={url} body={body} /></Item>
              </Grid>                           
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Item><Card title={title} imageurl={url} body={body} /></Item>
              </Grid>
              <Grid item xs={3}>
                <Item><Card title={title} imageurl={url} body={body} /></Item>
              </Grid>
              <Grid item xs={3}>
                <Item><Card title={title} imageurl={url} body={body} /></Item>
              </Grid>
              <Grid item xs={3}>
                <Item><Card title={title} imageurl={url} body={body} /></Item>
              </Grid>                           
            </Grid>
          </Box>
      </div>

    </div>
  );
};
