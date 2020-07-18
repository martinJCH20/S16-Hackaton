import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView} from 'react-native'

export default class Scene1 extends Component {
  constructor(props){
    super(props)
    this.state = {
      cadena:[],
        types: []
    }
  }  
  goToScene2 = (item, index, imagePokemon, type  ) => {
    //console.warn('item', item)
    this.props.navigation.navigate('Scene2', {item: item, index: index + 1, img: imagePokemon, type: type})
  }
    render(){
        const { cadena, types } = this.state;    
         return (
            <View style={{ flex: 1, marginTop: 5}}>
              <Text>Bienvenido</Text>
            </View>
          )
    }
}