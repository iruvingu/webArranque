import React from 'react';
import { Grid, Typography, Card, CardHeader, CardContent, TextField } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from "@material-ui/core/styles";
import Spinner from '../spinner/Spinner'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: '10px',
    },
    card: {
        width: 270,
        height: "unset",
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
    cardTitle: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: '2px',
        textAlign: 'center'
    },
    cardContent: {
        padding: '5px',
    }
}))

function QuickStartCard(props) {

    const classes = useStyles()

    if (!props) return (<Spinner />)

    const { id, title, meta, proyection, percentProy, difference, dailyDifference, 
        factor, real, factorRealMoney, advanceVsMeta, cumpProy, factorProyMoney } = props

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
                    className={classes.cardTitle}
                    title={<Typography variant='subtitle1'>{title}</Typography>} />
                <CardContent
                    className={classes.cardContent}>
                    <Grid container>
                    {
                        (meta)
                            ?   <Grid item xs={12} sm={6}>
                                    <CardSubContent id={"meta"} color={""} value={meta} nameValue={"Meta"} />
                                </Grid>
                            :   null
                    }
                    {
                        (proyection)
                            ?   <Grid item xs={12} sm={6}>
                                    <CardSubContent id={"proy"} color={"green"} value={proyection} nameValue={"Proyección"} />
                                </Grid>
                            :   null
                    }
                    {
                        (percentProy)
                            ?   <Grid item xs={12} sm={6}>
                            <CardSubContent id={"perProy"} color={"yellow"} value={percentProy} nameValue={"%proyección"} />
                        </Grid>
                            :   null
                    }
                    {
                        (difference)
                            ?   <Grid item xs={12} sm={6}>
                            <CardSubContent id={"dif"} color={"red"} value={difference} nameValue={"Diferencia"} />
                        </Grid>
                            :   null
                    }
                    {
                        (dailyDifference)
                            ?   <Grid item xs={12} sm={6}>
                                    <CardSubContent id={"dayDif"} color={"yellow"} value={dailyDifference} nameValue={"Promedio diferencia diaria"} />
                                </Grid>
                            :   null
                    }
                    {
                        (factor)
                            ?   <Grid item xs={12} sm={6}>
                                    <CardSubContent id={"factor"} color={"red"} value={factor} nameValue={"Factor"} />
                                </Grid>
                            :   null
                    }
                    {
                        (real)
                            ?   <Grid item xs={12} sm={6}>
                                    <CardSubContent id={"real"} color={"yellow"} value={real} nameValue={"Real"} />
                                </Grid>
                            :   null
                    }
                    {
                        (factorRealMoney)
                            ?   <Grid item xs={12} sm={6}>
                                    <CardSubContent id={"factorRealMoney"} color={"red"} value={factorRealMoney} nameValue={"Factor Real Incentivo"} />
                                </Grid>
                            :   null
                    }
                    {
                        (advanceVsMeta)
                            ?   <Grid item xs={12} sm={6}>
                                    <CardSubContent id={"advanceVsMeta"} color={"yellow"} value={advanceVsMeta} nameValue={"Avance VS Meta"} />
                                </Grid>
                            :   null
                    }
                    {
                        (cumpProy)
                            ?   <Grid item xs={12} sm={6}>
                                    <CardSubContent id={"cumpProy"} color={"yellow"} value={cumpProy} nameValue={"Cump Proy"} />
                                </Grid>
                            :   null
                    }
                    {
                        (factorProyMoney)
                            ?   <Grid item xs={12} sm={6}>
                                    <CardSubContent id={"factorProyMoney"} color={"green"} value={factorProyMoney} nameValue={"Factor Proy Incentivo"} />
                                </Grid>
                            :   null
                    }
                </Grid>
                </CardContent>
                
            </Card>
        </div>
    )
}

export default QuickStartCard
