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
        backgroundColor: theme.palette.colorIndicator.red,
        width: 15,
        height: 15
    },
    circleYellow: {
        borderRadius: "50%",
        backgroundColor: theme.palette.colorIndicator.yellow,
        width: 15,
        height: 15
    },
    circleGreen: {
        borderRadius: "50%",
        backgroundColor: theme.palette.colorIndicator.green,
        width: 15,
        height: 15
    },
    circleBlue: {
        borderRadius: "50%",
        backgroundColor: theme.palette.colorIndicator.blue,
        width: 15,
        height: 15
    },
    circleGray: {
        borderRadius: "50%",
        backgroundColor: theme.palette.colorIndicator.gray,
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

    const { id, title, meta, proyection, proyColor, percentProy, perProyColor, difference, difColor, dailyDifference, dayDifColor, 
        factor, factorColor, real, realColor, factorRealMoney, factorRealMoneyColor, advanceVsMeta, aVSMColor, 
        cumpProy, cumpProyColor, factorProyMoney, factorProyMoneyColor } = props

    function Circle({color}) {
        switch(color) {
            case 1: 
                return <div className={classes.circleRed}></div>;
            case 2:
                return <div className={classes.circleYellow}></div>;
            case 3:
                return <div className={classes.circleGreen}></div>;
            case 4:
                return <div className={classes.circleBlue}></div>;
            default:
                return <div className={classes.circleGray}></div>;
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
                            {
                                (id === "meta")
                                    ?   null
                                    :   <Circle color={color} />
                            }
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
                                    <CardSubContent id={"proy"} color={proyColor} value={proyection} nameValue={"Proyección"} />
                                </Grid>
                            :   null
                    }
                    {
                        (percentProy)
                            ?   <Grid item xs={12} sm={6}>
                            <CardSubContent id={"perProy"} color={perProyColor} value={percentProy} nameValue={"%proyección"} />
                        </Grid>
                            :   null
                    }
                    {
                        (difference)
                            ?   <Grid item xs={12} sm={6}>
                            <CardSubContent id={"dif"} color={difColor} value={difference} nameValue={"Diferencia"} />
                        </Grid>
                            :   null
                    }
                    {
                        (dailyDifference)
                            ?   <Grid item xs={12} sm={6}>
                                    <CardSubContent id={"dayDif"} color={dayDifColor} value={dailyDifference} nameValue={"Promedio diferencia diaria"} />
                                </Grid>
                            :   null
                    }
                    {
                        (factor)
                            ?   <Grid item xs={12} sm={6}>
                                    <CardSubContent id={"factor"} color={factorColor} value={factor} nameValue={"Factor"} />
                                </Grid>
                            :   null
                    }
                    {
                        (real)
                            ?   <Grid item xs={12} sm={6}>
                                    <CardSubContent id={"real"} color={realColor} value={real} nameValue={"Real"} />
                                </Grid>
                            :   null
                    }
                    {
                        (factorRealMoney)
                            ?   <Grid item xs={12} sm={6}>
                                    <CardSubContent id={"factorRealMoney"} color={factorRealMoneyColor} value={factorRealMoney} nameValue={"Factor Real Incentivo"} />
                                </Grid>
                            :   null
                    }
                    {
                        (advanceVsMeta)
                            ?   <Grid item xs={12} sm={6}>
                                    <CardSubContent id={"advanceVsMeta"} color={aVSMColor} value={advanceVsMeta} nameValue={"Avance VS Meta"} />
                                </Grid>
                            :   null
                    }
                    {
                        (cumpProy)
                            ?   <Grid item xs={12} sm={6}>
                                    <CardSubContent id={"cumpProy"} color={cumpProyColor} value={cumpProy} nameValue={"Cump Proy"} />
                                </Grid>
                            :   null
                    }
                    {
                        (factorProyMoney)
                            ?   <Grid item xs={12} sm={6}>
                                    <CardSubContent id={"factorProyMoney"} color={factorProyMoneyColor} value={factorProyMoney} nameValue={"Factor Proy Incentivo"} />
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
