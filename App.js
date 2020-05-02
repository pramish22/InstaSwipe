import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { render } from 'react-dom';
import * as ScreenOrientation from 'expo-screen-orientation';
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Brian Wangenheim', uri: 'https://images.unsplash.com/photo-1583167463546-12676e914c0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 2, text: 'Emily Goodhart', uri: 'https://images.unsplash.com/photo-1518675970634-bdd3fe443f52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 3, text: 'Ian Dooley', uri: 'https://images.unsplash.com/photo-1498746607408-1e56960e3bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 4, text: 'Model #4', uri: 'https://images.unsplash.com/photo-1574874706356-7022e870b023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 5, text: 'Model #5', uri: 'https://images.unsplash.com/photo-1505535162959-9bbcb4ab22d6?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=525&q=60' },
  { id: 6, text: 'Model #6', uri: 'https://images.unsplash.com/photo-1518549002407-7c43c40cff45?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=525&q=60' },
  { id: 7, text: 'Model #7', uri: 'https://images.unsplash.com/photo-1518550687729-819219298d98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60' },
  { id: 8, text: 'Model #8', uri: 'https://images.unsplash.com/photo-1556683944-ba658344ba06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' },
  { id: 9, text: 'Model #9', uri: 'https://images.unsplash.com/photo-1578067141755-c40d45e10124?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 10, text: 'Model #10', uri: 'https://images.unsplash.com/photo-1534638151833-cf4ec9a3b910?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 11, text: 'Model #11', uri: 'https://images.unsplash.com/photo-1580913188227-395de71aca2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 12, text: 'Model #12', uri: 'https://images.unsplash.com/photo-1544056351-8a07946ce309?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 13, text: 'Model #13', uri: 'https://images.unsplash.com/photo-1550935114-99de2f488f47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 14, text: 'Model #14', uri: 'https://images.unsplash.com/photo-1544838447-e08c8c6006ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 15, text: 'Model #15', uri: 'https://images.unsplash.com/photo-1521566652839-697aa473761a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 16, text: 'Model #16', uri: 'https://images.unsplash.com/photo-1524253860834-0e02422248bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 17, text: 'Model #17', uri: 'https://images.unsplash.com/photo-1529109328884-6818f3c0f109?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 18, text: 'Model #18', uri: 'https://images.unsplash.com/photo-1556560957-ac5a1b5bfcb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 19, text: 'Model #19', uri: 'https://images.unsplash.com/photo-1561555598-af6bfc78ad85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  { id: 20, text: 'Model #20', uri: 'https://images.unsplash.com/photo-1574721569234-c85f77aaefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
];

export default class App extends React.Component {
  renderCard(item) {
    return (
      <Card
        key={item.id}
        title={item.text}
        image={{ uri: item.uri }}
        imageStyle={styles.image}
      >
        <Text style={{ marginBottom: 10 }} align='center'>Instagram Models</Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          title="View Now!"
        />
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>
          There's no more content here!
          </Text>
        <Button
          backgroundColor="#03A9F4"
          title="Get More!"
          onPress={() => Linking.openURL("https://www.instagram.com/explore/tags/models/")}
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff'
  },
  image:{
    height: 500,
    width: 50
  }
});