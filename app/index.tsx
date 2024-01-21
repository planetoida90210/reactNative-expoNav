import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Link href="/profile" asChild>
       <Button title="Go to Profile" />
        </Link>
      <Link href="/feed" asChild>
       <Button title="Open Feed Page" />
        </Link>
    </View>
  )
}

export default Page