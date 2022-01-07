import React from 'react'
import { Platform, StyleSheet, Text, SafeAreaView, View, Image, TouchableHighlight, TextInput } from 'react-native';

import './Profesor.css';
import imageprof from './components/Images/granados.jpg';



const Profesor = () =>{

    const [textname, onChangeName] = React.useState("Nombres");
    const [textlast, onChangeLastName] = React.useState("Apellidos");
    const [textitprof, onChangeTitProf] = React.useState("Título Profesional");
    const [textloc, onChangeLoc] = React.useState("Localización");
    const [textbio, onChangeBio] = React.useState("Acerca de / Biografía");
    const [textexp, onChangeExp] = React.useState("Experiencia");
    const [texttr, onChangeTr] = React.useState("¿Trabajas de forma remota?");
    const [textmat, onChangeMat] = React.useState("Materias impartidas");
    const [textflex, onChangeFlex] = React.useState("¿Eres flexible?");

    return(

        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.box1}>

                    <TouchableHighlight style={[styles.profileImgminContainer]}>
                        <Image source={imageprof} style={styles.imgminProfile}/>
                    </TouchableHighlight>

                    <Text style={styles.textHeadingStyle}>
                        General
                    </Text>

                    <Text style={styles.textHeadingStyle}>
                        Cursos
                    </Text>

                    <Text style={styles.textHeadingStyle}>
                        Administrar Badgets
                    </Text>

                    <Text style={styles.textHeadingStyle}>
                        Configuración
                    </Text>

                </View>
                
                <View style={styles.box2}>

                    <TouchableHighlight style={[styles.profileImgContainer]}>
                        <Image source={imageprof} style={styles.imgProfile}/>
                    </TouchableHighlight>

                    <View style={styles.containerinput}>

                        <TextInput
                            style={styles.input1}
                            onChangeText={onChangeName}
                            value={textname}
                        />

                        <TextInput
                            style={styles.input1}
                            onChangeText={onChangeLastName}
                            value={textlast}
                        />

                        <TextInput
                            style={styles.input2}
                            onChangeText={onChangeTitProf}
                            value={textitprof}
                        />

                        <TextInput
                            style={styles.input2}
                            onChangeText={onChangeLoc}
                            value={textloc}
                        />

                        <TextInput
                            style={styles.input3}
                            onChangeText={onChangeBio}
                            value={textbio}
                        />

                        <TextInput
                            style={styles.input1}
                            onChangeText={onChangeExp}
                            value={textexp}
                        />

                        <TextInput
                            style={styles.input1}
                            onChangeText={onChangeTr}
                            value={texttr}
                        />

                        <TextInput
                            style={styles.input1}
                            onChangeText={onChangeMat}
                            value={textmat}
                        />

                        <TextInput
                            style={styles.input1}
                            onChangeText={onChangeFlex}
                            value={textflex}
                        />

                    </View>



                </View>
            </View>
        </SafeAreaView>

        




    );
};

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'stretch'
    },

    box: {
        width: 320,
        height: 373,
        backgroundColor: '#FFFFFF',
        borderColor: '#999',
        borderRadius: 20,
        borderWidth: 5,
        margin: 10

    },

    box1: {
        width: 320,
        height: 373,
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        margin: 10,
        marginLeft: 50,
        padding: 15,
        alignSelf: 'flex-start'

    },

    box2: {
        flex: 1,
        width: 800,
        height: 'auto',
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        margin: 10,
        marginLeft: 50,
        marginRight: 50,
        padding: 15,
        alignSelf: 'center'

    },

    profileImgminContainer: {
        height: 70,
        width: 70,
        borderRadius: 70,
        alignSelf: 'left'
    },

    imgminProfile: {
        height: 70,
        width: 70,
        borderRadius: 70,
        marginBottom: 20,
        marginLeft: 25
    },

    profileImgContainer: {
        height: 140,
        width: 140,
        borderRadius: 70,
        alignSelf: 'center'
    },

    imgProfile: {
        height: 140,
        width: 140,
        borderRadius: 70,
        marginBottom: 20,
    },

    textHeadingStyle: {
        marginTop: 20,
        fontSize: 13,
        color: '#707070',
        fontWeight: '600',
        marginLeft: 25
    },

    containerinput: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'stretch',
        
    },

    input1: {
        width: 311,
        height: 40,
        margin: 24,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#707070',
        padding: 10,
        color: '#707070',
        opacity: 0.5,
    },

    input2: {
        width: 669,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#707070',
        padding: 10,
        color: '#707070',
        opacity: 0.5,
    },

    input3: {
        width: 669,
        height: 151,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#707070',
        padding: 10,
        color: '#707070',
        opacity: 0.5,

    },


})

export default Profesor;

