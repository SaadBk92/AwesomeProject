// usman.ali@digitalpanda.tech
// Usm@n123#
// import React, { useState } from "react";
// import {
//   View,
//   Switch,
//   TouchableOpacity,
//   TextInput,
//   Button,
//   FlatList,
//   Text
// } from "react-native";

// export default function TodoApp() {
//   // lets Start 
//   const [todos, setTodos] = useState([]);
//   const [inputText, setInputText] = useState('');
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   const addTodo = () => {
//     if (inputText.trim()) {
//       setTodos([...todos, { id: Date.now().toString(), text: inputText }]);
//       setInputText('')
//     }
//   }

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(tode => tode.id !== id));
//   }

//   const deleteAll = () => {
//     setTodos([])
//   }

//   return (
//     <View  style={{backgroundColor: isDarkTheme ? "#888":"#fff"}} testID="wrapper-id">
//       TodoApp
//       <TextInput
//         placeholder={'Enter a new Todod...'}
//         value={inputText}
//         onChangeText={(text) => { setInputText(text) }}
//         testID='input-id'
//       />
//       <Button
//         title={'Add'}
//         onPress={addTodo}
//         disable={inputText?.length > 0 ?true:false}
//         testID="add-button-id" />

//       <FlatList
//         data={todos}
//         renderItem={({ item }) => {
//           return (
//             <TouchableOpacity
//               onPress={() => deleteTodo(item?.id)}
//               testID={`item-${item.text.toLowerCase().replace(/\s+/g, "-")}`}>
//             <Text>{item.text}</Text>
//             </TouchableOpacity>
//           )
//         }}
//       />
//       <Switch value={isDarkTheme} onValueChange={() => { setIsDarkTheme(!isDarkTheme) }} />
//       <Button
//         title='Remove All'
//         onPress={deleteAll}
//         testID="remove-button-id"
//       />
//     </View>
//   );
// }

// __________________________________________import React, { useState } from "react";
// import { View, Text, TextInput, FlatList, Button } from "react-native";

// //Do not modify the way the component is exported

// export default function ProductList() {
//   // LET'S BEGIN
//   const products = [
//     {
//       id: 1,
//       name: "Item-1",
//       price: 100
//     },
//     {
//       id: 2,
//       name: "Item-2",
//       price: 150
//     },
//     {
//       id: 3,
//       name: "Item-3",
//       price: 200
//     },
//     {
//       id: 4,
//       name: "Item-4",
//       price: 250
//     },
//     {
//       id: 5,
//       name: "Item-5",
//       price: 45
//     },]

//   const [filterText, setFilterText] = useState('');
//   const [sortedList, setSortedList] = useState(null);

//   const filteredProducts = products.filter(pro => pro.name.toLowerCase().includes(filterText.toLowerCase()));

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     if (sortedList === 'asc') {
//       return a.price - b.price;
//     } else if (sortedList === 'dcs') {
//       return b.price - a.price;
//     }
//     return 0;
//   });

//   return (
//     <View>
//     <Text>Products</Text>
//     <TextInput
//       placeholder="Filter products by name"
//       value={filterText}
//       onChangeText={(text) => { setFilterText(text)}}
//     />
//     <Button
//     testID='btn-desc-id'
//       disabled={sortedList === 'asc'}
//       onPress={() => { setSortedList('asc') }}
//       title="PRICE ASC"
//     />
//     <Button
//     testID='btn-asc-id'
//       disabled={sortedList === 'dsc'}
//       onPress={() => { setSortedList('dsc') }}
//       title="PRICE DSC"
//     />
  
//     {sortedProducts?.length > 0 ?
//     <FlatList
//       data={sortedProducts}
//       renderItem={({ item, index }) => {
//         return (
//           <Text testID={`id-${item.id}`}>
//             {`Product Name: ${item.name}, ===> Price:${item.price}`}
//           </Text>
//         )
//       }}/>
//     :
//    <Text>No products</Text>
//     }
//   </View>
//   );
// }
// ____________________________________import React, { useState, useEffect } from "react";
// import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";

// export default function App() {
//   // Lest's begin;
//   const [countreis, setCountries] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [offset, setOffset] = useState(0);
//   const [hasmore, setHasMore] = useState(false)


//   const fetchAPI = async () => {
//     if (!hasmore || loading) return;
//     setLoading(true);
//     try {
//       const response = await fetch(`https://example.com/countries?offset=${offset}&limit=20`);

//       const apiResponse = await response.json();


//       setCountries(pre => [...pre, apiResponse.results]);
//       setOffset(prevoiusOffset => prevoiusOffset + data.results.length);
//       setHasMore(data.results.length > 0 && data.results.length === 20);

//     } catch { (() => setLoading(false)) }
//   }


//   useEffect(() => { fetchAPI() }, [])
//   const handleLoadmore = () => {
//     if (hasmore && !loading) {
//       fetchAPI();
//     }
//   }

//   const renderFooter = () => {
//     if (!loading) return null;
//     return (
//       <View>
//         <ActivityIndicator size="large" color='#0000ff' />
//       </View>

//     )
//   }

// console.log("COPU",countreis)

//   return (
//     <View style={styles.container}>
//       <FlatList
//         style={styles.list}
//         data={countreis}
//         renderItem={
//           ({ item, index }) => <View style={styles.listItem}>
//             <Text>{item.name}</Text>
//           </View>
//         }
//         onEndReached={fetchAPI}
//         onEndReachedThreshold={0.1}
//         listFooterComponent={renderFooter}

//       />
//     </View>);
// }

// // You can also use class components if you like.
// // Just remove above functional component and uncomment below class component:
// // export default class App extends React.Component {
// //   // Write your logic here ...
// //
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //          <FlatList
// //            style={styles.list}
// //            data={[]}
// //            renderItem={() => <View style={styles.listItem}></View>}
// //          />
// //       </View>
// //     );
// //   }
// // }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   list: {
//     width: "100%",
//     height: "100%",
//   },
//   listItem: {
//     width: "100%",
//     height: "40px",
//     padding: "8px",
//     alignItems: "flexStart",
//   },
// });

// _____________import React, { useState, useEffect } from "react";
// import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
// import axios from 'axios';


// export default function App() {
//   const [countreis, setCountries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [offset, setOffset] = useState(0);
//   const [hasmore, setHasMore] = useState(true)

//   const fetchAPI = async () => {
//     if (!hasmore || loading) return;
//     setLoading(true);
//     try {
//       const response = await axios.get(`https://example.com/countries?offset=${offset}&limit=20`);
//       // const apiResponse = await response.json();
//       console.log("response",response)
//       setCountries(pre => [...pre, response.results]);
//       setOffset(prevoiusOffset => prevoiusOffset + response.results.length);
//       setHasMore(response.results.length > 0 && response.results.length === 20);
//     } finally {
//       setLoading(false)
//       }
//   }


//   useEffect(() => { fetchAPI()},[])

  
//   const handleLoadmore = () => {
//     if (hasmore && !loading) {fetchAPI()}
//   }

//   const renderFooter = () => {
//     if (!loading) return null;
//     return (
//       <View>
//         <ActivityIndicator size="large" color='#0000ff' />
//       </View>
//     )
//   }

//   return (
//     <View style={styles.container}>
//      <FlatList
//         style={styles.list}
//         data={countreis}
//         renderItem={
//           ({ item, index }) => <View style={styles.listItem}>
//             <Text>{item.name}</Text>
//           </View>
//         }
//         onEndReached={fetchAPI}
//         onEndReachedThreshold={0.1}
//         listFooterComponent={renderFooter}/>
//     </View>
//     )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   list: {
//     width: "100%",
//     height: "100%",
//   },
//   listItem: {
//     width: "100%",
//     height: "40px",
//     padding: "8px",
//     alignItems: "flexStart",
//   },

// <CalendarStrip
// style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
// calendarHeaderStyle={{ color: 'black', fontSize: 16 }} 
// dateNumberStyle={{ color: 'black', fontSize: 14 }}          
// dateNameStyle={{ color: 'gray', fontSize: 12 }} 
// highlightDateNameStyle={{ color: 'blue', fontSize: 14 }} 
// highlightDateNumberStyle={{ color: 'blue', fontSize: 14 }}
// />