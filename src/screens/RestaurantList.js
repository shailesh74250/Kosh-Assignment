import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import List from '../components/List';

class RestaurantList extends React.Component {
    render(){
        const classes = this.props.classes
        return (
            <View className={classes.container}>
                <SearchBar />
                <List/>
            </View>    
        );
    }
}
 
const styles = theme => ({
    container: {
        flex: 1,  
        padding: 26, 
        backgroundColor: "#fff",  
        justifyContent: "flex-start"  
    },
});
export default withStyles(styles)(RestaurantList)
