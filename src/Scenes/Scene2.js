import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, Dimensions, Platform, SafeAreaView  } from 'react-native'

export default class  Scene2 extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
      }
    render(){
        return (
            <SafeAreaView >
            <View >
                <Text>Scene 2</Text>
            </View>
            </SafeAreaView>
        )
    }
}
