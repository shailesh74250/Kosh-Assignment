
import React, { PureComponent } from 'react';
import Card from './Card';
import {  FlatList, ActivityIndicator } from 'react-native';

export default class RestaurantList extends PureComponent {
    state = {
        restaurants: [],
        loading: true
    }
    async componentDidMount() {
        try {
            const restaurantApiCall = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=2500&type=restaurant&key=AIzaSyAIux_9gVtovYz4EOfxouSI5GXpkcT5KKs');
            const data = await restaurantApiCall.json();
            this.setState({
                restaurants: data.results, 
                loading: false
            });
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }
    render() {
        const { loading } = this.state.loading;
        if(!loading) {
            return <FlatList 
                data={this.state.restaurants}
                renderItem={(data) => <Card {...data.item} />}
            />
        } else {
            return <ActivityIndicator />
        }
    }
}