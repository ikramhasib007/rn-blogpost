import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { Context } from '../../context/blog';

export default function HomeScreen() {
  const { state, addBlogPost } = useContext(Context);

  return <View>
    <Button
      title="Add BlogPost"
      onPress={() => addBlogPost({title: `BlogPost #${state.length + 1}`})}
    />
    <FlatList
      data={state}
      keyExtractor={(elem) => elem.title}
      renderItem={({item}) => {
        return <Text>{item.title}</Text>
      }}
    />
  </View>
}

const styles = StyleSheet.create({
  
})