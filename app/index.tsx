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
      <Link href="/details/42" asChild>
       <Button title="Open Details 42" />
        </Link>
      <Link href="/details/1337" asChild>
       <Button title="Open Details 1337" />
        </Link>
    </View>
  )
}

export default Page