import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/Logo.png')}/>
      <Text style={styles.h1}>Login</Text>
      
    <Text style={styles.label}>Email:</Text>
     <TextInput
     style={styles.emailInput}
     placeholder='Digite seu Email...'
     placeholderTextColor={"rgba(236, 236, 236, 1)"}/>

    <Text style={styles.label}>Senha:</Text>
     <TextInput
     style={styles.senhaInput}
     placeholder='Digite sua Senha...'
     placeholderTextColor={"rgba(236, 236, 236, 1)"}
    />
    <TouchableOpacity style={styles.btnLogar}><Text style={styles.btnLogareText}>Logar</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(192, 192, 192, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
label: {marginRight: 100,
fontSize: 18,
fontWeight: '500',
},
  logo: {height: 250,
  width: 250,},

  h1: {fontSize: 60,
    fontWeight: '800',
  color: '#5c7c8c',
borderBottomWidth: 3,
borderBottomColor: '#5c7c8c',
marginBottom: 30,},

  emailInput: {borderWidth: 2,
  color: 'black',
borderRadius: 8,
backgroundColor: 'grey',
opacity: 0.9,
fontWeight: '600',
textAlign: 'center',
width: '45%',
height: 38,
},

  senhaInput: {borderWidth: 2,
    color: 'black',
  borderRadius: 8,
  backgroundColor: 'grey',
  opacity: 0.9,
  fontWeight: '600',
  textAlign: 'center',
  width: '45%',
height: 38},

  btnLogar: {borderWidth: 3,
  borderRadius: 8,
backgroundColor: '#9e9e9e',
width: '55%',
height: 42,
justifyContent: 'center',
alignItems: 'center',
marginTop: 15},
btnLogareText: {fontSize: 20,
  fontWeight: '700',}


});
