import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'

const Details = () => {
    const {id} = useLocalSearchParams<{id: string}>()
  return (
    <View>
      <Text>Details {id} </Text>
    </View>
  )
}

export default Details