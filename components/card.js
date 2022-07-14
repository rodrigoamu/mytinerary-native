import React, {useEffect} from 'react'
import {StyleSheet,Text,TouchableOpacity,View,Image} from 'react-native'
import {useNavigation} from '@react-navigation/native';


export default function Card (props) {
    const navigation = useNavigation()

    var image = props.city.image

    return (
        <TouchableOpacity onPress={()=>navigation.navigate('Detail',{id: props.city._id})}>
            <View style={styles.absolute}>
                <Text style={styles.title}>{props.city.name}</Text>
            </View>
            <Image source={{uri: image}} style={{width: '100%', height: 300}}/>
        </TouchableOpacity>
    )
}

//styles
const styles = StyleSheet.create({
    absolute: {
        zIndex: 10,
        position: "absolute",
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(130, 77, 52, 0.1)'
    },
    title: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
        padding: 10,
        textShadowColor: 'black',
        textShadowOffset: {width: 2,height: 4},
        textShadowRadius: 1
    }
})