# EmbarkEdge Mobile (React Native + Expo)

A minimal Expo app to start porting the web app to a true native mobile application.

## Prereqs
- Node.js 18+ (20 recommended)
- Xcode (for iOS Simulator) and/or Android Studio (for Android Emulator)
- Expo Go app on your device (optional, for on-device testing)

## Install and run
```bash
cd mobile
# Install dependencies (expo will ensure compatible versions)
npm install
# If you encounter peer/version warnings, prefer:
# npx expo install

# Start the Metro bundler
npx expo start
# Press i for iOS simulator, a for Android emulator, or scan the QR with Expo Go
```

## Structure
- `App.tsx`: Native entry screen (simple welcome + next steps).
- `app.json`: Expo app configuration.
- `babel.config.js`: Babel preset for Expo.
- `tsconfig.json`: TypeScript config for RN.

## Porting plan (high-level)
- Replace web-only components (Radix UI, CSS/Tailwind, Recharts) with RN counterparts:
  - Styling: NativeWind or StyleSheet
  - Navigation: `@react-navigation`
  - Charts: `victory-native` or `react-native-chart-kit`
  - Icons: `@expo/vector-icons`
- Port one screen at a time; keep the web app running in parallel during migration.

## Notes
- This is a fresh Expo app skeleton created inside `mobile/`. It runs independently from the web project in the repo root.
- If you want to share data/constants, create a small shared package/folder with platform-agnostic code (no DOM APIs) and import it from both apps.
