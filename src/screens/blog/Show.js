import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Context } from '../../context/blog';

export default function ShowScreen({ navigation, route }) {
  const { state } = useContext(Context);
  const blogPost = state.find((post) => post.id === route.params.id);
  
  return (
    <Text>{blogPost.title}</Text>
  )
}

const styles = StyleSheet.create({

})