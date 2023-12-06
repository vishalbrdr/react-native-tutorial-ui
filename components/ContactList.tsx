import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      id: '5b2eee0a8fdd5b71c8148490',
      age: 29,
      name: 'Campos York',
      gender: 'male',
      company: 'AVENETRO',
      email: 'camposyork@avenetro.com',
      photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: '5b2eee0a9cd29e820c10edad',
      age: 20,
      name: 'Esperanza Boone',
      gender: 'female',
      company: 'COSMETEX',
      email: 'esperanzaboone@cosmetex.com',
      photo: 'https://randomuser.me/api/portraits/men/48.jpg',
    },
    {
      id: '5b2eee0a582ba867abbd7ce7',
      age: 39,
      name: 'Holden Barry',
      gender: 'male',
      company: 'CODAX',
      email: 'holdenbarry@codax.com',
      photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      id: '5b2eee0afe5f471c63fa7acf',
      age: 22,
      name: 'Daniels Barlow',
      gender: 'male',
      company: 'OPTICOM',
      email: 'danielsbarlow@opticom.com',
      photo: 'https://randomuser.me/api/portraits/men/13.jpg',
    },
    {
      id: '5b2eee0af534aab9ece2f890',
      age: 23,
      name: 'Leigh Burris',
      gender: 'female',
      company: 'KINETICUT',
      email: 'leighburris@kineticut.com',
      photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    },
    {
      id: '5b2eee0ac42f319d1c980d93',
      age: 35,
      name: 'Floyd Little',
      gender: 'male',
      company: 'FURNAFIX',
      email: 'floydlittle@furnafix.com',
      photo: 'https://randomuser.me/api/portraits/men/40.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container}>
        {contacts.map(({id, name, company, email, photo}) => (
          <View style={styles.userCard} key={id}>
            <Image
              style={styles.userImage}
              source={{
                uri: photo,
              }}
            />
            <View style={styles.userBody}>
              <View style={styles.userInfo}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.company}>{company}</Text>
              </View>
              <Text style={styles.userEmail}>{email}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  company: {
    color: '#fff6',
  },
  userBody: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 10,
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    color: 'pink',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    marginBottom: 20,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  userCard: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: 'purple',
  },
});
