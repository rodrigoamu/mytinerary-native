import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    SafeAreaView,
    Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import data from './data'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;
const ALTURA_BACKDROP = height * 0.5;

function Backdrop({ scrollX }) {
    return (

        <View
            style={[
                {
                    position: "absolute",
                    height: ALTURA_BACKDROP,
                    top: 0,
                    width: width,
                },
                StyleSheet.absoluteFillObject,
            ]}
        >
            <Text style={{
                fontWeight: 'bold',
                fontSize: 50,
                textAlign: 'center',
                marginTop: '5%',
                color: 'white',
            }}>Popular MyTineraries</Text>
            {data.map((cities, index) => {
                const inputRange = [
                    (index - 1) * ANCHO_CONTENEDOR,
                    index * ANCHO_CONTENEDOR,
                    (index + 1) * ANCHO_CONTENEDOR,
                ];

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0, 1, 0],
                });
                return (

                    <Animated.Image
                        key={cities.id}
                        source={{ uri: cities.image }}
                        style={[
                            { width: width, height: ALTURA_BACKDROP, opacity },
                            StyleSheet.absoluteFillObject,
                        ]}
                    />
                );
            })}
            <LinearGradient
                colors={["transparent", "black"]}
                style={{
                    width,
                    height: ALTURA_BACKDROP,
                    position: "absolute",
                    bottom: 0,
                }}
            />
        </View>
    );
}

export default function App() {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <Backdrop scrollX={scrollX} />
            <Animated.FlatList
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                snapToAlignment="start"
                contentContainerStyle={{
                    paddingTop: 200,
                    paddingHorizontal: ESPACIO_CONTENEDOR,
                }}
                snapToInterval={ANCHO_CONTENEDOR}
                decelerationRate={0}
                scrollEventThrottle={16}
                data={data}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * ANCHO_CONTENEDOR,
                        index * ANCHO_CONTENEDOR,
                        (index + 1) * ANCHO_CONTENEDOR,
                    ];

                    const scrollY = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, -50, 0],
                    });
                    return (
                        <View style={{ width: ANCHO_CONTENEDOR }}>
                            <Animated.View
                                style={{
                                    marginHorizontal: ESPACIO,
                                    padding: ESPACIO,
                                    borderRadius: 34,
                                    backgroundColor: "black",
                                    
                                    alignItems: "center",
                                    transform: [{ translateY: scrollY }],
                                }}
                            >
                                <Image source={{ uri: item.image }} style={styles.posterImage} />
                                <Text style={{color: 'white', fontWeight: "bold", fontSize: 26 }}>
                                    {item.name}
                                    
                                </Text>
                            </Animated.View>
                        </View>
                    );
                }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
    },
    posterImage: {
        width: "100%",
        height: ANCHO_CONTENEDOR * 1.2,
        resizeMode: "cover",
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
    },
});