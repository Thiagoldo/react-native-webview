import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://google.com/' }}
        style={styles.webview}

      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    paddingTop: 40,
    flex: 1,
  }
});
