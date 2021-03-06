import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContextProvider } from './contexts/appContext';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import React from 'react'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContextProvider >
          <Navigation colorScheme={colorScheme} />
          <StatusBar backgroundColor='#006eab' />
        </AppContextProvider>
      </SafeAreaProvider>
    );
  }
}
