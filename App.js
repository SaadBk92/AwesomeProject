import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native'
import CalendarStrip from 'react-native-calendar-strip';


const cardHeight = 250
const cardTitle = 45
const cardPadding = 10

const cards = [
  {
    name: 'Shot',
    color: 'red',
    price: '30 CHF',
  },
  {
    name: 'Juice',
    color: 'black',
    price: '64 CHF',
  },
  {
    name: 'Mighty Juice',
    color: '#BFDBFE',
    price: '80 CHF',
  },
  {
    name: 'Sandwich',
    color: '#93C5FD',
    price: '85 CHF',
  },
  {
    name: 'Combi',
    color: '#60A5FA',
    price: '145 CHF',
  },
  {
    name: 'Signature',
    color: '#3B82F6',
    price: '92 CHF',
  },
  {
    name: 'Coffee',
    color: '#2563EB',
    price: '47 CHF',
  },
]

const { height } = Dimensions.get('window')

const App = ({ }) => {
  const [selected, setSelected] = useState(false)
  const [space, setSpace] = useState([])

  useEffect(() => {
    setSelected(true)
    const fetchData = async () => {
      const response = await fetch('https://api.escuelajs.co/api/v1/users?offset=2&limit=100')
      const rawData = await response.json();
      setSpace(rawData)
      setSelected(false)
    }
    fetchData()
    return (() => {
      setSelected(false)
    })
  }, [])


  return (
    <View style={styles.wrapper}>
    <CalendarStrip
      scrollable
      style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
      calendarHeaderStyle={{ color: 'black', fontSize: 16 }} 
      dateNumberStyle={{ color: 'black', fontSize: 14 }}          
      dateNameStyle={{ color: '#000000', fontSize: 12 }} 
      highlightDateNameStyle={{ color: '#000', fontSize: 14 }} 
      highlightDateNumberStyle={{ color: '#000000', fontSize: 18 }}
      iconContainer={{flex: 0.1}}
      shouldAllowFontScaling={true}
      showDate
      
    />
  </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 40
  },
  mainContiner: {
    padding: 12,
    backgroundColor: "#eeeeee",
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 15
  }
})

export default App;

