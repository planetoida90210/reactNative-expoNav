import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Link href="/profile">
        <Text>Go to Profile</Text>
        </Link>
    </View>
  )
}

export default Page