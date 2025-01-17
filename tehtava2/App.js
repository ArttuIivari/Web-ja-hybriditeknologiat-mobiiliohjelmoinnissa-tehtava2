import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { BackHandler, Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Modal
        onRequestClose={() => setShowModal(false)}
        style={styles.container}
        visible={showModal}
      >
        <View style={styles.container}>
          <View style={styles.containermodal}>
          <Text >Tervetuloa kotiin!</Text>
          {Platform.OS === 'ios' && 
            <Pressable
            style={styles.button}
            onPress={() => setShowModal(!showModal)}>
            <Text>Close</Text>
            </Pressable>
          }
          
          </View>
        </View>
      </Modal>
      <Pressable 
      style={styles.button}
      onPress={() => setShowModal(!showModal)}>
        <Text>avaa ovi</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: 'lightgray',
    AlignItems: 'center'
  },
  containermodal: {
    padding: 40,
    backgroundColor: '#ebf0ec',
  }
});
