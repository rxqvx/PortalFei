/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import { AppContext } from '../contexts/appContext';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import AcademicScreen from '../screens/AcademicScreen';
import RequestsScreen from '../screens/RequestsScreen';
import MoreScreen from '../screens/MoreScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

// import { AppContextProvider, AppContext } from '../contexts/appContext';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();
// const { username, setUsername } = React.useContext(AppContext)
function RootNavigator() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal', headerStyle: { backgroundColor: '#006eab' }, headerTintColor: '#FFFF' }}>
        <Stack.Screen name="Meu Perfil" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const { username } = React.useContext(AppContext)

  return (
    <BottomTab.Navigator
      initialRouteName="TabTwo"
      screenOptions={{
        headerTintColor: '#fff',
        headerTitle: `Olá, ${username}`,
        headerStyle: { backgroundColor: '#006eab', },
        tabBarActiveTintColor: '#e0e4e7',
        tabBarInactiveTintColor: '#528daf',
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          tabBarStyle: { backgroundColor: '#005a8c' },
          title: 'setName',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Meu Perfil')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="user-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15, color: '#fff' }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={({ navigation }: RootTabScreenProps<'TabTwo'>) => ({
          title: 'Home',
          tabBarStyle: { backgroundColor: '#005a8c' },
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Meu Perfil')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="user-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15, color: '#fff' }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Academic"
        component={AcademicScreen}
        options={({ navigation }: RootTabScreenProps<'Academic'>) => ({
          title: 'Acadêmico',
          tabBarStyle: { backgroundColor: '#005a8c' },
          tabBarIcon: ({ color }) => <TabBarIcon name="graduation-cap" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Meu Perfil')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="user-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15, color: '#fff' }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Requests"
        component={RequestsScreen}
        options={({ navigation }: RootTabScreenProps<'Requests'>) => ({
          title: 'Pedidos',
          tabBarStyle: { backgroundColor: '#005a8c' },
          tabBarIcon: ({ color }) => <FontAwesome5 name="file-signature" color={color} size={20} style={{ marginBottom: -3 }} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Meu Perfil')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="user-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15, color: '#fff' }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={({ navigation }: RootTabScreenProps<'More'>) => ({
          title: 'Mais',
          tabBarStyle: { backgroundColor: '#005a8c' },
          tabBarIcon: ({ color }) => <Entypo name="dots-three-horizontal" size={20} color={color} style={{ marginBottom: -3 }} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Meu Perfil')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="user-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15, color: '#fff' }}
              />
            </Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}
