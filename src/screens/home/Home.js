import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../../context/blog';
import Feather from 'react-native-vector-icons/Feather';

export default function HomeScreen({ navigation, route }) {
  const { state, deleteBlogPost } = useContext(Context);


  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'RN Blogs',
      headerTitleAlign: "center",
      headerRight: () => <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={25} style={{marginRight: 15}} />
      </TouchableOpacity>
    }) 
  })

  return <View>
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