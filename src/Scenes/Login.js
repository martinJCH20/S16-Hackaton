/* eslint-disable eqeqeq */
/* eslint-disable no-sequences */
/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import Actions from '../actions/RegisterActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
  },
  containerInputs: {
    marginTop: 8,
  },
  inputs: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#F9F9F9',
  },
  containerBtn: {
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
    justifyContent: 'center',
  },
});
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      contrasena: '',
      users: [],
    };
  }
  async componentDidMount() {
    this.setState({usuario: '', contrasena: ''});
    await this.props.getRegisterUsers();
    const result = this.props.data;
    console.warn('result', result.user);
    this.setState({
      users: result.user,
    }),
      this.state.users.map((item, index) => {
        //console.warn(item.usuario);
        this.setState({usuario: item.usuario});
      });
  }
  render() {
    const {users, usuario, contrasena} = this.state;
    const goToRegister = () => this.props.navigation.navigate('Register');
    const goToScene1 = () => {
      if (users.length > 0) {
        users.map((item, index) => {
          if (item.usuario == usuario && item.contrasena == contrasena) {
            this.props.navigation.navigate('Scene1');
          } else {
            console.warn('Usuario no registrado');
          }
        });
      } else {
        console.warn('Usuario no registrado');
      }
    };
    return (
      <View style={{flex: 1, marginTop: 5}}>
        <View style={styles.title}>
          <Text style={{fontSize: 30}}>Iniciar Sesión</Text>
        </View>
        <View style={styles.containerInputs}>
          <Text>Usuario</Text>
          <View style={styles.inputs}>
            <TextInput
              value={usuario}
              name="userInput"
              onChangeText={text => this.setState({usuario: text})}
            />
          </View>
        </View>
        <View style={styles.containerInputs}>
          <Text>Contraseña</Text>
          <View style={styles.inputs}>
            <TextInput
              secureTextEntry={true}
              value={contrasena}
              name="userInput"
              onChangeText={text => this.setState({contrasena: text})}
            />
          </View>
        </View>
        <View style={styles.containerBtn}>
          <TouchableOpacity onPress={goToScene1} style={styles.btnIngresar}>
            <View>
              <Text style={{fontSize: 20}}>Ingresar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToRegister}>
            <Text style={{marginTop: 5}}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.registerReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRegisterUsers: () => dispatch(Actions.getRegisterUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
//export default Login;
