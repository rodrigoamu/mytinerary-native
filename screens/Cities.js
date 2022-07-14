import React, {useEffect, useState} from 'react'
import {StyleSheet,TextInput,ScrollView,View,ImageBackground,Dimensions} from 'react-native'
import Cards from '../components/cards'
//redux
import {useDispatch, useSelector} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'

var {height} = Dimensions.get('window')

export default function Cities(props) {
    
    const [input,setInput] = useState("")

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(citiesActions.getCities())
    },[])
    const citiesFromRedux = useSelector(store => store.citiesReducers.cities)//

    return (
        <View style={styles.home}>
            <ImageBackground source={require('../assets/photos/background.jpg')} resizeMode="cover" style={styles.backGroundhome}>
                <View style={styles.backGroundhome}>
                    <TextInput onChangeText={text => setInput(text)} placeholder="FIND A CITY HERE!" style={[styles.input,styles.inputtext]} />
                    <ScrollView style={styles.body}>
                        <Cards input={input} cities={citiesFromRedux} navigation={props.navigation} />
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
        backgroundColor: 'rgba(130, 77, 52, 0.1)'
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
    },
    input: {
        width: '100%',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        color: 'black'
    },
    inputtext: {
       fontSize: 30,     
        textAlign: 'center'
    },
})