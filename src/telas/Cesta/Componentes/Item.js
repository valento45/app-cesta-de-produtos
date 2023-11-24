import React from "react";
import { Image, View, StyleSheet, FlatList } from 'react-native'
import Texto from '../../../Componentes/Texto';


export default function Item({ item: { nome, imagem } }) {

    return <View style={estilos.item}>
        <Image source={imagem} style={estilos.imagem}></Image>
        <Texto key={nome} style={estilos.nome} >{nome}</Texto>
    </View>
}


const estilos = StyleSheet.create({


    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        alignItems: "center",
        paddingVertical: 16,
        marginHorizontal: 16
    },

    imagem: {
        width: 52,
        height: 52
    },

    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
});