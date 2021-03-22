import React from 'react';
// import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Box, Card, CardActions, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
// import { useHistory, useParams } from "react-router";


const useCardStyles = makeStyles((theme) => ({
    root: {
        width: "250%",
        boxShadow: theme.shadows[3],
        margin:"15px",
       backgroundColor:'maroon',
    },
    body: {
       
        height: '250px',
        width: '80%',
        textAlign:'center',
         margin:'15px',
    },
}));


const Vehicle = (props) => {


    const cardStyle = useCardStyles();
    const { vehicle, image } = props.vehicle;
    // console.log(props);
    return (
        < div >
            <Grid spacing={2} item lg={props.lg} sm={props.md} xs={props.sm}>
                <Card className={cardStyle.root}>
                    <CardContent className={cardStyle.body}>
                        {/* classes={tooltipStyle} */}

                        <Typography variant="h6" component="h4" style={{color:'cyan',}}>
                            {vehicle}
                        </Typography>
                    <img src={image} width="200px" alt=""/>
                    </CardContent>

                    <CardActions>
                        <Link to={`/checkout`}>
                            <button  style={{fontSize:'20px',}}>Book Now</button>
                            {/* <Button>Explore..</Button> */}
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        </div >

    );
};

export default Vehicle;