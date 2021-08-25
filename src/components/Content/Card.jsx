import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        margin: "0 auto",
        textAlign: "center",
        alignItems: "center",
        color: "white",
    },
    divs: {
        display: "flex",
    },
});

export default function FixedContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed >

            </Container>
        </React.Fragment>
    );
}
