import { NavigationActions } from 'react-navigation'
import { RootNavigator } from '../components/AppNavigator'

const firstAction = RootNavigator.router.getActionForPathAndParams(
  'SplashScreen'
)
const tempNavState = RootNavigator.router.getStateForAction(firstAction)
const initialNavState = RootNavigator.router.getStateForAction(tempNavState)

const NavReducer = (state = initialNavState, action) => {
  let nextState
  switch (action.type) {
    case 'SplashScreen':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'SplashScreen' }),
        state
      )
      break
    case 'LoginScreen':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'LoginScreen' }),
        state
      )
      break

    default:
      nextState = RootNavigator.router.getStateForAction(action, state)
      break
  }

  return nextState || state
}

export default NavReducer
