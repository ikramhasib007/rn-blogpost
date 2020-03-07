import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../../context/blog';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({ navigation, route }) {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'RN Blogs',
      headerTitleAlign: "center",
      headerRight: () => <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Ionicons name="md-create" size={16} style={{marginRight: 15}} />
      </TouchableOpacity>
    }) 
  })

  return <View>
    <Button
      title="Add Post"
      onPress={() => addBlogPost({
        id: Math.floor(Math.random() * 99999),
        title: `BlogPost #${state.length + 1}`
      })}
    />
    <FlatList
      data={state}
      keyExtractor={(elem) => `idss${elem.id}`}
      renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id })} >
            <View style={styles.row}>
              <Text>{item.title}</Text>
              <TouchableOpacity
                onPress={() => deleteBlogPost(item.id)}
                activeOpacity={0.5}
              >
                <Feather name="trash" size={16} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ) 
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