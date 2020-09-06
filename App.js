import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, 
  TextInput, TouchableOpacity,Alert,
TouchableWithoutFeedback,Keyboard } from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.010,
  RUBEL: 1.03,
  AUSDOLLAR: 0.19,
  YEN: 1.45,
  DINAR: 0.0043,
  BITCOIN: 0.0000013,
  CANADA: 0.018
}
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    }
  }

  buttonPressed=(currency) =>{
    if(this.state.inputValue==""){
      Alert.alert("Enter Some Value");
    }
    let result =parseFloat(this.state.inputValue)*currencyPerRupee[currency];
    this.setState({resultValue: result.toFixed(2)})

  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.screenview}>
          <View style={styles.resultcontainer}>
            <Text style={styles.resultvalue}>
              {this.state.resultValue}
            </Text>
          </View>
          <View style={styles.inputcontainer}>
            <TextInput
              style={styles.input}
              selectionColor="#FFF"
              keyboardType="numeric"
              placeholder="Enter Value"
              value={this.state.inputValue}
              onChangeText={inputValue => this.setState({ inputValue })}
            />

          </View>
          <View style={styles.converterbuttoncontainer}>
            <TouchableOpacity 
            style={styles.converterbutton}
            onPress={()=>this.buttonPressed("DOLLAR")}
            >
              <Text style={styles.converterbuttontext}>
                Dollar
              </Text>

            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.converterbutton}
            onPress={()=>this.buttonPressed("EURO")}
            >
              <Text style={styles.converterbuttontext}>
                Euro
              </Text>

            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.converterbutton}
            onPress={()=>this.buttonPressed("POUND")}
            >
              <Text style={styles.converterbuttontext}>
                Pound
              </Text>

            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.converterbutton}
            onPress={()=>this.buttonPressed("RUBEL")}
            >
              <Text style={styles.converterbuttontext}>
                Ruble
              </Text>

            </TouchableOpacity>
            
            <TouchableOpacity 
            style={styles.converterbutton}
            onPress={()=>this.buttonPressed("AUSDOLLAR")}
            >
              <Text style={styles.converterbuttontext}>
                Aus Dollar
              </Text>

            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.converterbutton}
            onPress={()=>this.buttonPressed("CSNADA")}
            >
              <Text style={styles.converterbuttontext}>
                Canada
              </Text>

            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.converterbutton}
            onPress={()=>this.buttonPressed("YEN")}
            >
              <Text style={styles.converterbuttontext}>
                Yen
              </Text>

            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.converterbutton}
            onPress={()=>this.buttonPressed("DINAR")}
            >
              <Text style={styles.converterbuttontext}>
                Dinar
              </Text>

            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.converterbutton}
            onPress={()=>this.buttonPressed("BITCOIN")}
            >
              <Text style={styles.converterbuttontext}>
                BTC
              </Text>

            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'

  },
  screenview: {
    flex: 1
  },
  resultcontainer: {
    height: 70,
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A79DE",
    borderWidth: 2,
    borderColor: "#C1C1C1"
  },
  resultvalue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF"
  },
  inputcontainer: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C1C1C1",
    borderWidth: 2,
    backgroundColor: "#0A79DE",

  },
  input: {
    color: "#FFF",
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  converterbuttoncontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#c1c1c1",
    borderWidth: 2
  },
  converterbutton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DF",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.33%"
  },
  converterbuttontext: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  }
});
