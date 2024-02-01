import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image} 
        source={require('./assets/profile.jpg')}
      />
      <Text style={styles.name}>Frederik Wessel Glimsager</Text>
      <Text style={styles.title}>Software Developer</Text>

      <View style={styles.seperator} />

      <Text style={styles.contact}>frederikglimsager@hotmail.com</Text>
      <Text style={styles.contact}>+45 26 42 97 12</Text>

      <Image 
        style={styles.image} 
        source={require('./assets/logo.jpg')}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  image: 
  {
    width: 100,
    height: 100,
    borderRadius: 50, // Makes the image circular
    marginBottom: 10,
  },

  name: 
  {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  title: 
  {
    fontSize: 18,
    color: '#333333',
    marginBottom: 5,
  },

  seperator: 
  {
    height: 10,
  },

  contact: 
  {
    fontSize: 13,
    color: 'gray',
  },

});
