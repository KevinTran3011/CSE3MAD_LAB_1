import { Image, StyleSheet, Platform } from 'react-native';
import { View } from 'react-native';
import { Button } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style = {styles.containerColumn}>
      <View style = {styles.containerRow}>
        <Button title = "Click me"
        onPress = {() =>{alert("Hello ")}}></Button>

      </View>


    </View>
 
  );
}

const styles = StyleSheet.create({

  containerColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,


  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,


  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
