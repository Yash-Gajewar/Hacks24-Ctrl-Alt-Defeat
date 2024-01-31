import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 21, // Increase height
        borderRadius: 10, // Make borders rounded
        display: "flex",
        alignItems: "center",
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
        borderRadius: 10, // Make borders rounded
        backgroundColor: "#4CAF50", // Change color to green
        marginBottom: 0, // Remove bottom spacing
    },
}))(LinearProgress);

const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    title: {
        display: "flex", // Add flex display
        justifyContent: "space-between", // Align items with space between
        marginTop: 7,
        color: "black", // Change color to black
    },
    percentage: {
        marginLeft: 8,
    },
});

function LinearProgressWithLabel(props) {
    const classes = useStyles();

    return (
        <Box display="flex" flexDirection="column" alignItems="center" p={3}>
            <Typography className={classes.title} variant="subtitle1">
                <div>
                    {props.title}
                </div>

                <div>

                    {`${Math.round(props.value)}%`}
                </div>
            </Typography>
            <Box className={classes.root}>
                <BorderLinearProgress variant="determinate" {...props} />
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel(props) {
    return (
        <div>
            <LinearProgressWithLabel title={props.title} value={props.value} />
        </div>
    );
}
