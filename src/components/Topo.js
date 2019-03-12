import React, { Component } from 'react'
import { View, Image } from 'react-native'

const image = require('../../imgs/jokenpo.png')

class Topo extends Component {
    render() {
        return (
            <View alignItems='center'>
                <Image source={image} />
            </View>
        )
    }
}

export default Topo
