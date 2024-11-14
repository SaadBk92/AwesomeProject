import React, { useState, useEffect } from 'react';
import {StyleSheet,View,FlatList,Text,Image,TouchableOpacity,ActivityIndicator, Switch,} from 'react-native';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [expandedUserId, setExpandedUserId] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch('https://api.escuelajs.co/api/v1/users?offset=1&limit=100');
    const rawData = await response.json();
    setUsers(rawData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleAccordion = (userId) => {
    setExpandedUserId(expandedUserId === userId ? null : userId);
  };

  return (
    <View style={styles.wrapper}>
      {isLoading ?
        <ActivityIndicator size={'large'} color={'red'} />
        :
        <FlatList
          showsVerticalScrollIndicator={false}
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => toggleAccordion(item.id)}
                style={styles.accordionHeader}>
                <View style={styles.userInfo}>
                  <Image
                    resizeMode='cover'
                    style={styles.avatar}
                    source={{ uri: item.avatar }}
                  />
                  <Text style={styles.userName}>{item.name}</Text>
                </View>
                <Text style={styles.toggleIcon}>{expandedUserId === item.id ? '-' : '+'}</Text>
              </TouchableOpacity>
              {expandedUserId === item.id && (
                <View style={styles.accordionContent}>
                  <Text style={{ fontSize: 13, fontWeight: '500', color: "#FFFFFF" }} >{`Email: @${item.email}`}</Text>
                  <Text style={{ fontSize: 13, fontWeight: '500', color: "#FFFFFF" }}>{`Role: #${item.role}`}</Text>
                  <Text style={{ fontSize: 13, fontWeight: '500', color: "#FFFFFF" }}>Created At: {new Date(item.creationAt).toLocaleDateString()}</Text>
                </View>
              )}
            </View>
          )}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.1,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: '#eee'
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    width: '65%'
  },
  toggleIcon: {
    fontSize: 40,
    fontWeight: "900"
  },
  accordionContent: {
    padding: 10,
    backgroundColor: '#000',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 5,
    borderRadius: 5
  },
});

export default App;