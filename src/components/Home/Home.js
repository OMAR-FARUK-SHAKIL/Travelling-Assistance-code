import React, { useEffect, useState } from 'react';
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from '../../images/road1.jpg';
import './Home.css';
import vehicles from '../../fakeData/VehiclesData.json'; 
import Vehicle from '../Vehicle/Vehicle';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        minHeight: 'calc(100vh - 65px)'
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    container: {
        
        paddingTop: '50px',
        paddingBottom: '20px',
        textAlign:'center',
        paddingLeft:'100px',

    },
}));

const Home = () => {
    const classes = useStyles();

    // const [teams, setTeams] = useState([]);
    // useEffect(() => {
    //     fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
    //         .then(res => res.json())
    //         .then(data => setTeams(data.teams))
    // }, [])

    // const history = useHistory()

    // const handleProceedCheckout = () => {
    //     history.push('/checkout');
    // }

    return (
        <div className={classes.root}>
            <div className="header">
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/destination">Destination</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                {/* <button onClick={handleProceedCheckout}>Login</button> */}
                <Link to="/login">Log</Link>
            </nav>
        </div>
        <main>
                <Container className={classes.container} maxWidth="xl">
                    <Grid container spacing={3}>
                        {vehicles.map((team) => (
                            <Vehicle team={team} lg={4} sm={6} xs={12} spacing={2} ></Vehicle>
                        ))}
                    </Grid>
                </Container>
            </main>
        </div>
    );
};

export default Home;