import React, { Component } from 'react';  
import { AppRegistry, Text, TextInput, View } from 'react-native';  
  
export default class PizzaTranslator extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {text: ''};  
    }  
    render() {  
        return (  
          <TextInput  
              style={{height: 40,backgroundColor: 'azure', fontSize: 20, marginTop: 25,}}  
              placeholder="Search restaurant"  
              onChangeText={(text) => this.setState({text})}  
          />   
            
        );  
    }  
}  