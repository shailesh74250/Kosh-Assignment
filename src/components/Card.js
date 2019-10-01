//import React form react
import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { StyleSheet } from 'react-native';

const Card = ({name, icon}) => {
    console.log({name, icon})
    return (
        <TouchableOpacity style={{backgroundColor: 'transparent'}}>
            <View  style={styles.listItemContainer}>
                <Image source={{uri: icon}} style={styles.Image}/>
                <Text style={styles.ItemHeader}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItemContainer: {
        backgroundColor: '#aaa',
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    ItemHeader: {  
        color: '#fff',
        fontSize: 24,
    },
    Image: {
        backgroundColor: 'transparent',
        height: 100,
        width: 100
    }
})

export default Card;