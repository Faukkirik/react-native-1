import {StatusBar} from 'expo-status-bar';
import {
    ActivityIndicator,
    Button,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Pressable, FlatList, ListRenderItem, Dimensions
} from 'react-native';
import React, {useState} from "react";

export const { width, height} = Dimensions.get('screen')

const WIDTH = width
const HEIGHT = height
const PADDING = 30

type ArrType = {
    id: number
    title: string
}
const arrData: ArrType[] = new Array(100).fill(null).map((_, index) => ({
    id: index + 1,
    title: `Title ${index + 1}`
}))
export default function App() {
    const [value, setValue] = useState('')

    const render: ListRenderItem<ArrType> = ({item, index, separators}) => {
        return (
            <View style={styles.item}>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '500',
                    color: 'white',
                }}>{item.title}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{}}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                numColumns={2}
                data={arrData}
                renderItem={render}
                ListHeaderComponent={()=>{
                    return<View><Text>filters</Text></View>}}
                ListFooterComponent={()=>{
                    return<View><Text>footer</Text></View>}}
                ListEmptyComponent={()=>{
                    return<View><Text>ListEmptyComponent</Text></View>}}
            />
            {/*<Text>Open up App.tsx to start working on your app!</Text>*/}
            {/*<ActivityIndicator />*/}
            {/*<ActivityIndicator size="large" />*/}
            {/*<ActivityIndicator size="small" color="#0000ff" />*/}
            {/*<ActivityIndicator size="large" color="#00ff00" />*/}
            {/*<Button*/}
            {/*    onPress={()=>{}}*/}
            {/*    title="Learn More"*/}
            {/*    color="#841584"*/}
            {/*    accessibilityLabel="Learn more about this purple button"*/}
            {/*/>*/}
            {/*<Image*/}
            {/*    style={{width: 100, height: 100}}*/}
            {/*    source={{*/}
            {/*        uri: 'https://reactnative.dev/img/tiny_logo.png',*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<TextInput*/}
            {/*    style={styles.input}*/}
            {/*    onChangeText={()=>{}}*/}
            {/*    value={''}*/}
            {/*/>*/}
            {/*<Pressable style={{backgroundColor: 'red'}}>*/}
            {/*    <Text>Ebat'</Text>*/}
            {/*</Pressable>*/}
            {/*<Pressable style={styles.text}>*/}
            {/*    <Text>asfsdfwe</Text>*/}
            {/*</Pressable>*/}
            {/*<Pressable style={[styles.text, {backgroundColor: 'tomato', borderWidth: 2}]}>*/}
            {/*    <Text>3333333</Text>*/}
            {/*</Pressable>*/}
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d7a1a1',
        paddingTop: 33,
        paddingHorizontal: PADDING,
    },
    input: {
        width: 200,
        height: 38,
        backgroundColor: '#9f3636'
    },
    text: {
        backgroundColor: 'blue',
        borderStyle: 'solid',
        borderWidth: 5
    },
    item: {
        width: ((WIDTH - PADDING * 2)/2) - 5,
        height: ((WIDTH - PADDING * 2)/2) - 5,
        backgroundColor:'tomato',
        marginVertical: 5,
        padding: PADDING / 3,
    }
});
