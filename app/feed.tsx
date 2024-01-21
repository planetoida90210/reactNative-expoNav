import React from 'react'
import { View, Text, Button } from 'react-native'
import { useRouter } from 'expo-router'

const Feed = () => {
    const router = useRouter()
  return (
    <View>
      <Button title="Go Home" onPress={() => router.back()} />
    </View>
  )
}

export default Feed