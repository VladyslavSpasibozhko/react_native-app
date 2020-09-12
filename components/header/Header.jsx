import React from 'react';
import { View, Image } from 'react-native'
import {styles } from './header.style'
import image from '../../assets/images/wezom-logo.png'


const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.left}>
                <Image source={image}/>
            </View>
            <View style={styles.right}>
                <Image style={styles.image} source={{uri:'https://randomuser.me/api/portraits/men/75.jpg'}}/>
            </View>
        </View>
    )
}

export default Header
