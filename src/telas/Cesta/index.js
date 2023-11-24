import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';

import Topo from '../Cesta/Componentes/Topo';
import Detalhes from '../Cesta/Componentes/Detalhes';
import Itens from '../Cesta/Componentes/Itens';

export default function Cesta({ topo, detalhes, itens }) {
    return <ScrollView>
        <Topo {...topo} />

        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Itens {...itens} />
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
});