import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/components';

export default function BlogPostForm({ onSubmit, initialValues }) {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={{marginTop: 10}}>
      <Text style={styles.labelStyle}>Title</Text>
      <TextInput
        style={{...styles.inputStyle}}
        multiline
        autoCapitalize="none"
        autoCorrect={false}
        autoFocus={true}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <Text style={styles.labelStyle}>Content</Text>
      <TextInput
        style={{...styles.inputStyle, minHeight: 100}}
        multiline
        autoCapitalize="none"
        autoCorrect={false}
        textAlignVertical="top"
        onChangeText={(text) => setContent(text)}
        value={content}
      />
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        <Button
          title={`${!initialValues.title ? "Add Blog Post" : "Save Blog Post" }`}          
          onPress={() => onSubmit(title, content)}
        />
      </View>
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
}