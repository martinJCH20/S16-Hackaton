import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import {connect} from 'react-redux';
import Actions from '../actions/RegisterActions';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
    },
    containerInputs:{
        marginTop: 8,
    },
    inputs: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: '#F9F9F9'
    },
    textInput: {
      marginTop: 5,
      paddingBottom: 5,
      color: '#212121',
    },
    containerBtn:{
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    btnIngresar: {
        width: '70%',
        height: '25%',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {     
          usuario: '',
          email: '',
          contrasena: '',
          telefono: '',
    };
  }
  register = async () => {
    //const user = [this.state.usuario, this.state.email, this.state.contrasena, this.state.telefono];
    await this.props.setRegisterUsers(this.state);
    const us = this.props.data;
    console.warn('us items:', us);
    this.props.navigation.navigate('Login');
  };
  render() {
    const {usuario, email, contrasena, telefono} = this.state;
    return (
      <View style={{flex: 1, marginTop: 5}}>
        <View style={styles.title}><Text style={{ fontSize: 30}}>Registrarse</Text></View>
        <View style={styles.containerInputs}>
          <Text>Usuario</Text>
          <View style={styles.inputs}><TextInput value={usuario} name="userInput" onChangeText={(text) => this.setState({ usuario: text })} /></View>
        </View>
        <View style={styles.containerInputs}>
          <Text>Email</Text>
          <View style={styles.inputs}><TextInput value={email} name="emailInput" onChangeText={(text) => this.setState({ email: text })} /></View>
        </View>
        <View style={styles.containerInputs}>
          <Text>Contraseña</Text>
          <View style={styles.inputs}><TextInput secureTextEntry={true} value={contrasena} name="passwordInput" onChangeText={(text) => this.setState({ contrasena: text })} /></View>
        </View>
        <View style={styles.containerInputs}>
          <Text>Teléfono</Text>
          <View style={styles.inputs}><TextInput keyboardType={'numeric'} value={telefono} name="phoneInput" onChangeText={(text) => this.setState({ telefono: text })}></TextInput></View>
        </View>
        <View style={styles.containerBtn}>
          <TouchableOpacity onPress={this.register}  style={styles.btnIngresar}><View><Text style={{ fontSize: 20}}>Registrarse</Text></View></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.registerReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRegisterUsers: (data) => dispatch(Actions.setRegisterUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);