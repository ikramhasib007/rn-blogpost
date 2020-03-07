import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../../context/blog';
import Feather from 'react-native-vector-icons/Feather';

export default function HomeScreen() {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return <View>
    <Button
      title="Add BlogPost"
      onPress={() => addBlogPost({
        id: Math.floor(Math.random() * 99999),
        title: `BlogPost #${state.length + 1}`
      })}
    />
    <FlatList
      data={state}
      keyExtractor={(elem) => elem.title}
      renderItem={({item}) => {
        return <View style={styles.row}>
          <Text>{item.title}</Text>
          <TouchableOpacity
            onPress={() => deleteBlogPost(item.id)}
            activeOpacity={0.8}
          >
            <Feather name="trash" size={16} />
          </TouchableOpacity>
        </View>
      }}
    />
  </View>
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#e3e3e3",
    padding: 10,
    justifyContent: "space-between"
  }
})