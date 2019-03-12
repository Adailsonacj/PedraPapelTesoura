import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'

const pedra = require('../../imgs/pedra.png')
const papel = require('../../imgs/papel.png')
const tesoura = require('../../imgs/tesoura.png')
class Escolhas extends Component {
    render() {
        if (this.props.escolha === 'Pedra') {
            return (
                <View style={styles.viewJogador}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={pedra} />
                </View>
            )
        } else if (this.props.escolha === 'Papel') {
            return (
                <View style={styles.viewJogador}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={papel} />
                </View>
            )
        } else if (this.props.escolha === 'Tesoura') {
            return (
                <View style={styles.viewJogador}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={tesoura} />
                </View>
            )
        }
        return false
    }
}

const styles = StyleSheet.create({
    viewJogador: {
        alignItems: 'center',
        marginTop: 30
    },
    txtJogador: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default Escolhas
