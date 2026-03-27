import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gwangji.hskmasterpro',
  appName: 'HSK Master Pro',
  webDir: 'out',
  bundledWebRuntime: false,
  ios: {
    contentInset: 'automatic'
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
