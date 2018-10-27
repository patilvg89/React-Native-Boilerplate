import React from 'react'
import { StyleSheet, View, Button, Text } from 'react-native'
import PropTypes from 'prop-types'

const SplashScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}> {'Splash Screen'}</Text>

    <Button
      title="Next Page"
      onPress={() => navigation.navigate('LoginScreen')}
    />
  </View>
)

SplashScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

SplashScreen.navigationOptions = {
  header: null
  /* title: 'Splash Screen',
  headerBackTitle: ' ' */ // following screens will show only the arrow, if it is an empty string it will say 'Back', hence the space
  // TODO: find a more elegant way of achieving this
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF44',
    justifyContent: 'center'
  },
  text: {
    alignSelf: 'center'
  }
})

export default SplashScreen
