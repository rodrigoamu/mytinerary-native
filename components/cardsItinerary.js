import React, {useEffect} from 'react'
import {StyleSheet,Text,TouchableOpacity,ScrollView,View,Pressable,Image,Dimensions} from 'react-native'

export default function CardsItinerary (props) {
    console.log(props.tinDat)
    return (
        <>
        {props.tinDat.map( (everyTin) => (
            <ScrollView key={everyTin._id}>
                <View style={styles.user}>
                    <Image source={{uri: everyTin.userPhoto}} style={{width: 150, height: 150, resizeMode: 'cover'}} />
                    <Text style={styles.fredoka}>{everyTin.userName}</Text>
                </View>

            </ScrollView>
        ))}
        </>
    )
}

//estilos
const styles = StyleSheet.create({
    user: {
        height: 200,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgb(126, 196, 165)',
        padding: '10px',
    },
    absolute: {
        zIndex: 10,
        position: "absolute",
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(196, 165, 126, 0.4)'
    },
    fredoka: {
        fontFamily: 'FredokaOne_400Regular',
        fontSize: 15
    }
})