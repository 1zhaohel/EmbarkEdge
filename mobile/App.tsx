import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { WebView } from "react-native-webview";

// Load the deployed web app (GitHub Pages)
// For local dev instead, replace with your LAN IP, e.g. 'http://192.168.1.10:3000'
const WEB_APP_URL = "https://1zhaohel.github.io/EmbarkEdge/";

export default function App() {
	const isConfigured = true;
	return (
		<View style={styles.container}>
			<WebView
				source={{ uri: WEB_APP_URL }}
				style={styles.webview}
				originWhitelist={["*"]}
				allowsInlineMediaPlayback
				mediaPlaybackRequiresUserAction={false}
				javaScriptEnabled
				domStorageEnabled
				// On Android, allow mixed content if your dev server uses HTTP
				{...(Platform.OS === "android"
					? { mixedContentMode: "always" }
					: {})}
			/>
			{/* The web app is loaded from WEB_APP_URL above. */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: "#000" },
	webview: { flex: 1 },
	banner: {
		position: "absolute",
		left: 12,
		right: 12,
		bottom: 20,
		backgroundColor: "rgba(17,24,39,0.85)",
		padding: 10,
		borderRadius: 8,
	},
	bannerText: { color: "#e5e7eb", fontSize: 12, lineHeight: 16 },
});
