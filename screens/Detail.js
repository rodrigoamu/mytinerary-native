import React, {useEffect} from 'react'
import {StyleSheet,Text,ScrollView,View,Image,ImageBackground,Dimensions} from 'react-native'
//redux
import {useDispatch, useSelector} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'

var {height} = Dimensions.get('window')

export default function Itineraries(props) {

    const{id} = props.route.params
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(citiesActions.getOneCity(id))
    },[])
    const oneCityFromRedux = useSelector(store => store.citiesReducers.oneCity)

    var image = 'https://mytinerary-amuchastegui-rodrig.herokuapp.com'+oneCityFromRedux.image

    return (
        <View style={styles.home}>
            <ImageBackground source={require('../assets/photos/background.jpg')} resizeMode="cover" style={styles.backGroundhome}>
                <View style={styles.backGroundhome}>
                    <ScrollView style={styles.body}>
                        <View style={styles.absolute}>
                            <Text style={styles.Title}>{oneCityFromRedux.city}</Text>
                            <Text style={styles.Subtitle}>{oneCityFromRedux.country} - {oneCityFromRedux.name}</Text>
                        </View>
                        <Image source={{uri: oneCityFromRedux.image}} style={{width: '100%', height: 390}}/>
                        <Text>-</Text>
                        <Text style={styles.description}>{oneCityFromRedux.description}</Text>
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    )
}

//styles
const styles = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'column',
        width: "100%",
        backgroundColor: 'rgba(130, 77, 52, 0.3)'
    },
    backGroundhome: {
        width: '100%',
        height: height,
        margin: 0,
        padding: 0,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(130, 77, 52, 0.8)'
    },
    body: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    absolute: {
        zIndex: 10,
        position: "absolute",
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(130, 77, 52, 0)'
    },
    Title: {
        fontSize: 40,
        textAlign: 'center',
        textShadowColor: 'red',
        textShadowOffset: {width: 0,height: 2},
        textShadowRadius: 1
    },
    Subtitle: {  
        fontSize: 35,
        paddingBottom: 200,
        textAlign: 'center',
        color: 'white',
        textShadowColor: 'black',
        textShadowOffset: {width: 2,height: 3},
        textShadowRadius: 1
    },
  
    description: {
        fontSize: 25,
        color: 'black',
        textShadowColor: 'black',
        textShadowOffset: {width: 0,height: 1},
        textShadowRadius: 1,
        textAlign: 'center',
        backgroundColor: 'rgba(242, 227, 223, 0.5)',
        borderRadius: 20,              
    },
})