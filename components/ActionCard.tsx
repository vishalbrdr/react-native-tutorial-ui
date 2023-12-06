import {
  View,
  Text,
  StyleSheet,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(wesiteLink: string) {
    Linking.openURL(wesiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://shorturl.at/cdxEI',
          }}
        />
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            Whats new in Javascript 21 - ES12
          </Text>
        </View>
        <View style={styles.cardBody}>
          <Text numberOfLines={3}>
            Every JavaScript developer eager to perform at their best should
            learn the latest features of ES12. In this blog, we’ll look into the
            top six features with examples.
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.syncfusion.com/blogs/post/top-6-javascript-es12-features-you-should-use.aspx',
              )
            }>
            <Text
              style={{
                color: 'black',
              }}>
              Read More
            </Text>
          </TouchableOpacity>
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
    width: 340,
    margin: 5,
    backgroundColor: '#4a5989',
    paddingBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  headingContainer: {
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
  },
  cardImage: {
    height: 190,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    paddingHorizontal: 10,
  },
  cardFooter: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    width: 90,
    borderRadius: 5,
  },
});

export default ActionCard;
