import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

import style from './styles';
import listData from './listData';

class App extends Component {
  renderItem({ item, index }) {
    return <Text style={style.row}>{item}</Text>;
  }

  render() {
    return (
      <View>
        <Text>
          Welcome to React Native!
        </Text>
      <FlatList
        data={listData}
        renderItem={this.renderItem}
      />
      </View>
    );
  }

}

export default App;
