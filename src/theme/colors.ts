export const colors = {
  // Primary colors
  primary: '#007AFF',
  primaryDark: '#0051D5',
  primaryLight: '#5AC8FA',

  // Status colors
  success: '#34C759',
  error: '#FF3B30',
  warning: '#FF9500',
  info: '#007AFF',

  // Neutral colors
  white: '#FFFFFF',
  black: '#000000',

  // Gray scale
  gray50: '#F9F9F9',
  gray100: '#F2F2F2',
  gray200: '#F0F0F0',
  gray300: '#E0E0E0',
  gray400: '#D0D0D0',
  gray500: '#DDD',
  gray600: '#999',
  gray700: '#666',
  gray800: '#333',
  gray900: '#1A1A1A',

  // Background colors
  background: '#FFFFFF',
  backgroundSecondary: '#F2F2F2',
  backgroundTertiary: '#F0F0F0',

  // Text colors
  textPrimary: '#000000',
  textSecondary: '#666',
  textTertiary: '#333',
  textInverse: '#FFFFFF',

  // Border colors
  border: '#E0E0E0',
  borderLight: '#F0F0F0',
  borderDark: '#D0D0D0',

  // Overlay colors
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(255, 255, 255, 0.9)',
} as const;

export type ColorKey = keyof typeof colors;

