import React, {useEffect} from 'react'
import {StyleSheet,Text,ScrollView,View,Pressable,Image,Dimensions} from 'react-native'

import Card from './card'

//redux
import {useDispatch, useSelector} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'

export default function Cards (props) {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(citiesActions.filterCities(props.input))
    },[props.input])
    const filterFromRedux = useSelector(store => store.citiesReducers.filter)

    let data = props.input ? filterFromRedux : props.cities

    return (
        <>
        {data.length>0 ? 
            data.map( cities =>
            <View key={cities._id} style={{marginBottom: 10}}>
                <Card city={cities} navigation={props.navigation}/>
            </View>) : <>
                <Text style={styles.fredoka}>TYPE ANOTHER CITY PLEASE</Text>
                <Text style={styles.fredoka}>we didn't find that!</Text>
            </>
        }
        </>
    )
}

//styles
const styles = StyleSheet.create({
    fredoka: {
        fontFamily: 'FredokaOne_400Regular',
        textAlign: 'center'
    }
})