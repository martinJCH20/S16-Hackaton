import React , { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        marginLeft: 20
    },
    image: {
        height: 36,
        width: 36
    }
})

const MenuDrawer = (props) => {
        return(
            <View style={{ flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View styles={styles.drawerContent}>
                    <View style={styles.userInfoSection}>

                    </View>
                    <DrawerItem
                        icon={() => (
                            <Image 
                            style={styles.image}
                            //source={require('../../../assets/icons/025-warehouse.png')}
                            />
                        )}
                        label='Scene1'
                        onPress={() => {props.navigation.navigate('Scene1')}}
                    />
                    <DrawerItem
                        icon={() => (
                            <Image 
                            style={styles.image}
                            //source={require('../../../assets/icons/025-warehouse.png')}
                            />
                        )}
                        label='Scene2'
                        onPress={() => {props.navigation.navigate('Scene2')}}
                    />
                </View>
            </DrawerContentScrollView>
        </View>
        )
}

export { 
    MenuDrawer
}