import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Animated as RNAnimated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import uuid from 'react-native-uuid';

const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth / 3 - 4;

const photos = [
  { id: '1', src: require('@/assets/images/mummy1.jpg') },
  { id: '2', src: require('@/assets/images/mummy2.jpg') },
  { id: '3', src: require('@/assets/images/mummy3.jpg') },
  { id: '4', src: require('@/assets/images/mummy4.jpg') },
  { id: '5', src: require('@/assets/images/mummy5.jpg') },
  { id: '6', src: require('@/assets/images/mummy6.jpg') },
  { id: '7', src: require('@/assets/images/mummy7.jpg') },
  { id: '8', src: require('@/assets/images/mummy8.jpg') },
  { id: '9', src: require('@/assets/images/mummy9.jpg') },
  { id: '10', src: require('@/assets/images/mummy10.jpg') },
  { id: '11', src: require('@/assets/images/mummy11.jpg') },
  { id: '12', src: require('@/assets/images/mummy12.jpg') },
  { id: '13', src: require('@/assets/images/mummy13.jpg') },
  { id: '14', src: require('@/assets/images/mummy14.jpg') },
  { id: '15', src: require('@/assets/images/mummy15.jpg') },
  { id: '16', src: require('@/assets/images/mummy16.jpg') },
  { id: '17', src: require('@/assets/images/mummy17.jpg') },
  { id: '18', src: require('@/assets/images/mummy18.jpg') },
  { id: '19', src: require('@/assets/images/mummy19.jpg') },
  { id: '20', src: require('@/assets/images/mummy20.jpg') },
  { id: '21', src: require('@/assets/images/mummy21.jpg') },
  { id: '22', src: require('@/assets/images/mummy22.jpg') },
  { id: '23', src: require('@/assets/images/mummy23.jpg') },
  { id: '24', src: require('@/assets/images/mummy24.jpg') },
  { id: '25', src: require('@/assets/images/mummy25.jpg') },
  { id: '26', src: require('@/assets/images/mummy26.jpg') },
  { id: '27', src: require('@/assets/images/mummy27.jpg') },
  { id: '28', src: require('@/assets/images/mummy28.jpg') },
  { id: '29', src: require('@/assets/images/mummy29.jpg') },
  { id: '30', src: require('@/assets/images/mummy30.jpg') },
  { id: '31', src: require('@/assets/images/mummy31.jpg') },
  { id: '32', src: require('@/assets/images/mummy32.jpg') },
  { id: '33', src: require('@/assets/images/mummy33.jpg') },
  { id: '34', src: require('@/assets/images/mummy34.jpg') },
  { id: '35', src: require('@/assets/images/mummy35.jpg') },
];


export default function HomeScreen() {
  const [fullscreenImage, setFullscreenImage] = useState<null | any>(null);
  const [hearts, setHearts] = useState<any[]>([]);

  const triggerHearts = () => {
    const newHearts = Array.from({ length: 10 }, () => ({
      id: uuid.v4(),
      top: new RNAnimated.Value(600),
      left: Math.random() * screenWidth,
      opacity: new RNAnimated.Value(1),
    }));

    setHearts((prev) => [...prev, ...newHearts]);

    newHearts.forEach((heart) => {
      RNAnimated.parallel([
        RNAnimated.timing(heart.top, {
          toValue: -100,
          duration: 1800,
          useNativeDriver: false,
        }),
        RNAnimated.timing(heart.opacity, {
          toValue: 0,
          duration: 1800,
          useNativeDriver: false,
        }),
      ]).start(() => {
        setHearts((prev) => prev.filter((h) => h.id !== heart.id));
      });
    });
  };

  if (fullscreenImage) {
    return (
      <TouchableWithoutFeedback onPress={() => setFullscreenImage(null)}>
        <View style={styles.fullscreenContainer}>
          <Image source={fullscreenImage} style={styles.fullscreenImage} />

          <Pressable onPress={triggerHearts}>
            <Text style={styles.fullscreenMessage}>Love u Mum 💖</Text>
          </Pressable>

          {hearts.map((heart) => (
            <RNAnimated.Text
              key={heart.id}
              style={[
                styles.floatingHeart,
                {
                  top: heart.top,
                  left: heart.left,
                  opacity: heart.opacity,
                },
              ]}
            >
              💖
            </RNAnimated.Text>
          ))}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Happy Mother's Day 2025 💐</Text>
      <FlatList
        data={photos}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Animated.View
            entering={FadeInUp.delay(Math.random() * 300)}
            style={styles.imageWrapper}
          >
            <Pressable onPress={() => setFullscreenImage(item.src)}>
              <Image source={item.src} style={styles.image} />
            </Pressable>
          </Animated.View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 20,
  },
  imageWrapper: {
    margin: 2,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: imageSize,
    height: imageSize,
    resizeMode: 'cover',
  },
  fullscreenContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullscreenImage: {
    width: '100%',
    height: '75%',
    resizeMode: 'contain',
  },
  fullscreenTitle: {
    position: 'absolute',
    top: 50,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  fullscreenMessage: {
    position: 'absolute',
    bottom: 80,
    fontSize: 20,
    fontWeight: '600',
    color: '#ffb6c1',
  },
  floatingHeart: {
    position: 'absolute',
    fontSize: 28,
    zIndex: 10,
  },
});

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Warning: useInsertionEffect must not schedule updates',
]);
