import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import TodoList from './app/TodoList';
import NewItem from './app/NewItem';
import ListStore from './app/mobx/listStore';

const Navigator = StackNavigator({
  TodoList: { screen: TodoList },
  NewItem: { screen: NewItem },
});

class App extends React.Component {
  render() {
    const appProps = {
      store: ListStore
    }
    return <Navigator screenProps={appProps} />;
  }
}

AppRegistry.registerComponent('ReactNativeMobX', () => App );
