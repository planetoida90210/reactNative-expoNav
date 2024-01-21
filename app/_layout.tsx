import { Stack } from 'expo-router'

const StackLayout = ({ children}) => {
    return (
    <Stack>
        <Stack.Screen name='index' options={{headerTitle: 'Your Home'}} />
        <Stack.Screen name='profile' />
    </Stack>
    )
}

export default StackLayout
