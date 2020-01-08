import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#576d9a',
            main: '#253457',
            dark: '#101426',
            contrastText: '#fff'
        },
        secondary: {
            light: '#c5cee0',
            main: '#191461',
            dark: '#110C47',
            contrastText: '#fff'
        },
        extra: {
            green: '#00bc8c',
            mainBack: '#f5b8b1',
            grayColor: '#b4b4b4',
            backWhite: '#eeeeee'
        },
        success: {
            main: "#4caf50",
            light: "#66bb6a",
            dark: "#43a047",
            contrastText: "#5cb860"
        },
        warning: {
            main: "#ff9800",
            light: "#ffa726",
            dark: "#fb8c00",
            contrastText: "#ffa21a"
        },
        error: {
            light: red[500],
            main: red[700],
            dark: red[900],
            contrastText: "#ffffff",
        }
    }
})

export default theme