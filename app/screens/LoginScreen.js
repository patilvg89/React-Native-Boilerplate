import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import PropTypes from 'prop-types'

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Button
      title="Go Back"
      onPress={() => navigation.goBack()}
    />
  </View>
)

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}

LoginScreen.navigationOptions = {
  title: 'Login Screen',
  headerBackTitle: ' ' // following screens will show only the arrow, if it is an empty string it will say 'Back', hence the space
  // TODO: find a more elegant way of achieving this
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF44'
  }
})

export default LoginScreen
