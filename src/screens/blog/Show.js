import React, { useContext, useLayoutEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Context } from '../../context/blog';

export default function ShowScreen({ navigation, route }) {
  const { state } = useContext(Context);
  const blogPost = state.find((post) => post.id === route.params.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <TouchableOpacity onPress={() => navigation.navigate("Edit", { id: route.params.id })}>
        <Feather name="edit-3" size={25} style={{marginRight: 15}} />
      </TouchableOpacity>
    })
  })

  return <>
    <Text>{blogPost.title}</Text>
    <Text>{blogPost.content}</Text>
  </>
}

const styles = StyleSheet.create({

})