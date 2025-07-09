import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ExploreScreen() {
  const [touched, setTouched] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setTouched(!touched)} style={styles.center}>
        {!touched ? (
          <LottieView
            source={require('@/assets/animations/flower.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        ) : (
          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              From She Min, She Jia, She Yen:{"\n\n"}
              You’re the flower that makes our world bloom 😊🌸{"\n\n"}
              We love you mummy! 🥰 You're the prettiest woman on earth,{"\n"}
              and if you ever get sick of papa,{"\n"}
              choose me pick me love me instead😋😋{"\n\n"}
              Stay happy, healthy, wealthy, and beautiful always and forever ~{"\n\n"}
              Happy Mother's Day Mummy!! 😍😍 {"\n\n"}
              Lots of Love,{"\n"}
              The three sistarssss 💖💖💖
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 250,
    height: 250,
  },
  messageContainer: {
    padding: 30,
    borderRadius: 16,
    backgroundColor: '#ffe0ec',
  },
  message: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#d63384',
  },
});

