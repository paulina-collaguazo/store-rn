import { View, Image, StyleSheet, Text, ImageBackground, Pressable } from 'react-native';




export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../../assets/images/storebg.png')}
      style={styles.background}
      resizeMode='cover'
    >
     
        <Pressable >
          <Text style={styles.buttonText}>Go to Store</Text>
        </Pressable>

    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente para legibilidad
    padding: 20,
    borderRadius: 10,
  },
 
 
  buttonText:{
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 900,
  },

  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
