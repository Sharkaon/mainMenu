/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import renderIf from './renderIf'
import styles from '../styles/index';

export default class App extends Component {


  state = {
    display1: false,
    display2: false,
    display3: false,
    display4: false,
  }

  alternar1 = () => {
    this.setState({
      display1: !this.state.display1
    })
  }
  
  alternar2 = () => {
    this.setState({
      display2: !this.state.display2
    })
  }

  alternar3 = () => {
    this.setState({
      display3: !this.state.display3
    })
  }

  alternar4 = () => {
    this.setState({
      display4: !this.state.display4
    })
  }

  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.header}>
          <Image source={require('../assets/textoLogo_semFundo.png')}></Image>
          <Image source={require('../assets/hamb.png')} style={{ height: 55, width: 55, alignSelf:"flex-end", marginTop:-60}}></Image>
        </View>

        <View style={styles.titles}>
          <TouchableOpacity onPress={this.alternar1}>  
              <Text style={styles.textTitle}>INTRODUÇÃO</Text>
          </TouchableOpacity>
        </View>
        {renderIf(this.state.display1)(
          <View style={styles.subcat}>
            <Text style={styles.textSubcat} > O que é?</Text>
            <Text style={styles.mais}>+</Text>
          </View > 
        )}
        {renderIf(this.state.display1)(
          <View style={styles.subcat}> 
            <Text style={styles.textSubcat}>Importância</Text> 
            <Text style={styles.mais}>+</Text> 
          </View> 
        )}
        {renderIf(this.state.display1)(
          <View style={styles.subcat}> 
            <Text style={styles.textSubcat}>Atividades</Text> 
            <Text style={styles.mais}>+</Text> 
          </View>
        )}

        <View style={styles.titles}>
          <TouchableOpacity onPress={this.alternar2}>
            <Text style={styles.textTitle}>LÓGICA DE PROGRAMAÇÃO</Text>
          </TouchableOpacity>
        </View>
        {renderIf(this.state.display2)(
          <View style={styles.subcat}>
            <Text style={styles.textSubcat}>Introdução</Text>
            <Text style={styles.mais}>+</Text>
          </View>
        )}
        {renderIf(this.state.display2)(
          <View style={styles.subcat}>
            <Text style={styles.textSubcat}>Atividades</Text>
            <Text style={styles.mais}>+</Text>
          </View>
        )}

        <View style={styles.titles}>
          <TouchableOpacity onPress={this.alternar3}>
            <Text style={styles.textTitle}>ALGORITMOS</Text>
          </TouchableOpacity>
        </View>
        {renderIf(this.state.display3)(
          <View style={styles.subcat}>
            <Text style={styles.textSubcat}>Introdução</Text>
            <Text style={styles.mais}>+</Text>
          </View>
        )}
        {renderIf(this.state.display3)(
          <View style={styles.subcat}>
            <Text style={styles.textSubcat}>Atividades</Text>
            <Text style={styles.mais}>+</Text>
          </View>
        )}

        <View style={styles.titles}>
          <TouchableOpacity onPress={this.alternar4}>
            <Text style={styles.textTitle}>BÁSICO DA PROGRAMAÇÃO</Text>
          </TouchableOpacity>
        </View>
        {renderIf(this.state.display4)(
          <View style={styles.subcat}>
            <Text style={styles.textSubcat}>Introdução</Text>
            <Text style={styles.mais}>+</Text>
          </View>
        )}
        {renderIf(this.state.display4)(
          <View style={styles.subcat}>
            <Text style={styles.textSubcat}>Atividades</Text>
            <Text style={styles.mais}>+</Text>
          </View>
        )}

      </View>
    )
  }
}