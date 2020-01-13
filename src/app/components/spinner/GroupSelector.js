import React, {Component} from 'react';
import { Grid } from '@material-ui/core';
import SingleSelector from '../../components/spinner/SingleSelector';
import Firebase from 'firebase'

class GroupSelector extends Component{

    state = {
        subdirectionList : [],
        regionList : [],
        sucursalList : [],
    };

    getSubdirections = () => {
        const database = Firebase.firestore();
        database.collection('app_catalogo')
            .where("tipo", "==","subdireccion").get()
            .then(snapShot => {
                this.setState({subdirectionList : snapShot})
            })
    };

    componentDidMount() {
        this.getSubdirections()
    }


    render() {
        return (
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center">
                <SingleSelector title={"Subdireccion"} dataList={this.state.subdirectionList}/>
                <SingleSelector title={"Region"}/>
                <SingleSelector title={"Sucursal"}/>
            </Grid>
        );
    }
}

export default GroupSelector;