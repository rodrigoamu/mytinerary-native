import { StyleSheet, Text, ScrollView, View, Pressable, ImageBackground, Dimensions } from 'react-native'
import Courosel from '../components/carousel'
import { useNavigation } from '@react-navigation/native'

var { height } = Dimensions.get('window')

export default function Home() {
    const navigation = useNavigation()

    return (
        <ScrollView style={styles.home}>
            <ImageBackground source={require('../assets/photos/index.jpg')} resizeMode="cover" style={styles.backGhome}>
                <View style={styles.backGhome}>
                    <Text style={styles.title}>MyTinerary</Text>
                    <Text style={styles.subtitle}>FIND YOUR PERFECT TRIP</Text>
                    <Text style={styles.subtitle}>designed by insiders who know and love their cities!</Text>
                    <Pressable onPress={() => navigation.navigate('Cities')} style={styles.linkHero} >
                        <Text style={[styles.linkText, styles.subtitle]}>LET GET STARTED!</Text>
                    </Pressable>
                </View>

            </ImageBackground>
            <View style={styles.carousel}>
                <Courosel />
            </View>
        </ScrollView>
    );
}

//styles
const styles = StyleSheet.create({
    home: {
        flex: 1,
        flexDirection: 'column',
        width: "100%",
        backgroundColor: 'rgba(130, 77, 52, 0.4)'
    },
    backGhome: {
        width: '100%',
        height: 850,
        margin: 0,
        padding: 0,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(130, 77, 52, 0.4)'
    },
    title: {
        fontSize: 70,
        elevation: 100,
        textShadowColor: 'orange',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 5,
        color: 'black',
        padding: 10,
        marginTop: 50,
    },
    subtitle: {
        textAlign: 'center',


    },
    linkHero: {
        marginTop: 15,
        padding: 7,
        fontWeight: '600',
        textAlign: 'center',
        backgroundColor: 'darkorange',
        borderRadius: 20
    },
    linkText: {
        color: 'white',
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10
    },
    carousel: {
        minHeight: 800,
    }
})