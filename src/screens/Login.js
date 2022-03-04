import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import logo from '../assets/logo.png';
import topo from '../assets/topo.png';
export default function Home (){
    return  <>

            <View >
            <Image source={topo} style={estilo.topo}/>
            <Image source={logo} style={estilo.logo}/>
            <Text style={estilo.h1}>Portomat</Text>
            </View>

            <Text style={estilo.p2}>Solicitar uma visita para orçamento</Text>
            <Text style={estilo.p2}>Te amo seu merda</Text>
            <Text style={estilo.p2}>1234</Text>

            <View style={estilo.rodape}>
            <Text style={estilo.p}>Nós da Portomat agradecemos a preferência</Text>
            <Image source={logo} style={estilo.rodapeLogo}/>
            </View>
            </>
}