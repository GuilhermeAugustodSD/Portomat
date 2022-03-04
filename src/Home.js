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



const estilo = StyleSheet.create({
    topo:{
        width: '100%',
        height: 200,
    },
    h1:{
        position: 'absolute',
        color: 'white',
        fontSize: 50,
        lineHeight: 90,
        fontFamily: 'MontBold',
        marginHorizontal: 80,

    },
    p2:{
        fontSize: 25,
        padding:10,
        fontFamily: 'MontRegular',
    },

    logo:{
        position:'absolute',
        width: 100,
        height: 100,
        marginHorizontal: 155,
        margin:85,



    },

    p:{
        color:'#a3a3a3',
        lineHeight: 30,
        marginHorizontal: 10,
        textAlign: 'center',

    },
    rodapeLogo:{
        width:25,
        height:25,

    },
    rodape:{
        flexDirection: 'row',
        paddingVertical: 500,
        paddingHorizontal: 10,
        textAlign: 'center',
    }
})