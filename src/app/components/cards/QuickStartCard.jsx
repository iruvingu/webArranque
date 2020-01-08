import React from 'react';
import { Grid, Typography, Paper, Card, CardHeader, CardContent, TextField } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from "@material-ui/core/styles";
import Spinner from '../spinner/Spinner'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    card: {
        width: 270,
        height: "auto",
        border: "solid 1px #e0dede"
    },
    title: {
        backgroundColor: theme.palette.primary.main,
    },
    titleText: {
        fontSize: 12,
        fontFamily: '"Roboto", "Bold"',
        lineHeight: "16px",
        color: theme.palette.primary.contrastText
    },
    circleRed: {
        borderRadius: "50%",
        backgroundColor: "#ca1313",
        width: 15,
        height: 15
    },
    circleYellow: {
        borderRadius: "50%",
        backgroundColor: "#f5c11b",
        width: 15,
        height: 15
    },
    circleGreen: {
        borderRadius: "50%",
        backgroundColor: "#5ab81d",
        width: 15,
        height: 15
    },
    margin: {
        padding: theme.spacing(1),
    },
    cardBannerTitle: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: '2px',
        textAlign: 'center'
    },
}))

function QuickStartCard(props) {

    const classes = useStyles()

    if (!props) return (<Spinner />)

    const { id, title, meta, proyection, percentProy, difference, dailyDifference, factor } = props

    function Circle({color}) {
        switch(color) {
            case 'red': 
                return <div className={classes.circleRed}></div>;
            case 'yellow':
                return <div className={classes.circleYellow}></div>;
            case 'green':
                return <div className={classes.circleGreen}></div>;
            default:
                return null
        }
    }

    function CardSubContent({color, value, nameValue, id}) {
        return (
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <TextField
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                          <Circle color={color} />
                        </InputAdornment>,
                      }}
                    id={id}
                    value={value}
                    helperText={nameValue} />
                </Grid>
            </Grid>
        </div>)
    }

    return(
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                    className={classes.cardBannerTitle}
                    title={<Typography variant='subtitle1'>{title}</Typography>} />
                <CardContent>
                    <Grid container>
                    <Grid item xs={12} sm={6}>
                        <CardSubContent id color={""} value={meta} nameValue={"Meta"} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CardSubContent id color={"green"} value={proyection} nameValue={"Proyección"} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CardSubContent id color={"yellow"} value={percentProy} nameValue={"%proyección"} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CardSubContent id color={"red"} value={difference} nameValue={"Diferencia"} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CardSubContent id color={"red"} value={dailyDifference} nameValue={"Promedio diferencia diaria"} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CardSubContent id color={"red"} value={factor} nameValue={"Factor"} />
                    </Grid>
                </Grid>
                </CardContent>
                
            </Card>
        </div>
    )
}

export default QuickStartCard
