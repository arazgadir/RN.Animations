import React, { Component } from 'react'
import {Text, View, Animated, Image,} from 'react-native'
import circleLogo from './images/circleLogo.png'
import { styles} from './Styles'

export default class SecondAnimation extends Component {
  constructor () {
    super()
    this.loadingCircle = new Animated.Value(0)
  }


  componentDidMount () {
    this.circleAnimation()
  }

  
  circleAnimation () {
    this.loadingCircle.setValue(0)
    Animated.sequence([
      Animated.timing(
      this.loadingCircle,
      {
        toValue: 1,
        duration: 1000,
       
      }
    )]).start(() => this.circleAnimation())
  }


  
  render () {
    
    const circle = this.loadingCircle.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <View style={ styles.circle }>
           <Animated.Image

                style={{ width:200 , height:200, transform: [{rotate: circle}] }}
                   source = {circleLogo} >

          
           </Animated.Image>
           <Text style={styles.movieText}>L o a d i n g  . . .</Text>
           
      </View>
    )
  }
}


