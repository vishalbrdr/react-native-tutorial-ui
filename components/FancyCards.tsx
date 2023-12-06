import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FancyCards</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://rb.gy/79gy81',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>India Gate</Text>
          <Text style={styles.cardLabel}>New Delhi, India</Text>
          <Text style={styles.cardDesc}>
            For the dead of the Indian Armies who fell during World War I and
            the Third Afghan War
          </Text>
          <Text style={styles.cardFooter}>30mins away</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    borderRadius: 10,
    margin: 5,
    paddingBottom: 10,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
  },
  cardImage: {
    height: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    padding: 10,
  },
  cardTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000a',
    fontSize: 16,
    marginBottom: 6,
  },
  cardDesc: {
    marginBottom: 6,
    color: '#0009',
  },
  cardFooter: {color: '#999'},
});
export default FancyCards;
