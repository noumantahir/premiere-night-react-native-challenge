# Premiere Night

A React Native movie discovery app built with React Native, featuring movie carousel browsing, filter movies, viewing move details, wishlist functionality with persistance, and deep linking support.

**Demo Video**: [Watch Demo](https://youtu.be/gMPqFJouSxM)

**Screenshots**
<img width="1308" height="741" alt="Screenshot 2025-11-27 at 15 48 17" src="https://github.com/user-attachments/assets/848b307e-92ef-4330-8c6a-f64cafa452ff" />


## Key Features


- 🎬 Browse movies by category (Now Playing, Popular, Top Rated)
- 🔍 filter movies with instant search
- ❤️ Add/remove movies from wishlist
- 🔗 Deep linking support (`movie://details/[id]`)
- 📱 Cross platoform for iOS and Android


## Disclaimer

### Development Timeline
The app took substantially more time than the initial 3-hour commitment mentioned in the business document.

- Document estimate: 3 hours
- Core functionality (including bonus): ~5 hours
- Polishing, fine-tuning, and roadblocks: ~5 hours

### AI Usage
AI tools helped with code completion, initial component drafts, and refactoring. All outputs were manually reviewed and adjusted before being accepted into the codebase.

Some examples include,
- Refactoring of DetailsScreen into sub directories
- Generating models and converters for tmbd responses
- Unification of color usages in styles under theme/colors

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 20.x - [Node.js Setup Guide](https://nodejs.org/en/download/)
- **npm** or **yarn**
- **React Native CLI** (or use npx react-native …)
- **Xcode CLT** (for iOS development on macOS) - [iOS Setup Guide](https://reactnative.dev/docs/set-up-your-environment?os=macos&platform=ios)
- **Android SDK** (for Android development) - [Android Setup Guide](https://reactnative.dev/docs/set-up-your-environment?os=macos&platform=android)
- **CocoaPods** (for iOS dependencies) - [CocoaPods Setup Guide](https://guides.cocoapods.org/using/getting-started.html)

### Environment Setup

1. **TMDB API Key**: Copy `example.env` to `.env` and add your TMDB API key:
   ```bash
   cp example.env .env
   ```
   
   Then edit `.env` and replace `your_tmdb_api_key_here` with your actual API key from [TMDB](https://www.themoviedb.org/settings/api).

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **iOS Dependencies** (macOS only):
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Running the App

### iOS

```bash
npm run ios
# or
yarn ios
```

This will start Metro bundler and launch the app in the iOS Simulator.

### Android

```bash
npm run android
# or
yarn android
```

Make sure you have an Android emulator running or a device connected via USB with USB debugging enabled.

### Start Metro Bundler

To start Metro bundler separately:

```bash
npm start
# or
yarn start
```

## Architecture

### Component Structure (Atomic Design)

The app follows **Atomic Design** principles for component organization:

- **Atoms**: Basic building blocks (`Text`, `ActionButton`, `IconButton`)
- **Molecules**: Simple combinations of atoms (`CarouselItem`, `SearchBar`)
- **Organisms**: Complex UI components (`MovieCarousel`, `MovieHeader`)
- **Screens**: Full page components (`HomeScreen`, `DetailsScreen`, `WishlistScreen`)

### State Management

- **Zustand**: Used for global state management (wishlist store)
- **React Hooks**: Local component state and custom hooks (`useCarousels`)

### Navigation

- **React Navigation**: Bottom tab navigation with stack navigation for details
- **Deep Linking**: Supports `movie://details/[id]` deep links

### Styling

- **Theme System**: Centralized color palette in `src/theme/colors.ts`
- **StyleSheet**: Component-specific styles separated into `.styles.ts` files
- **Movie Theme**: Cinema-inspired crimson red color scheme

### Data Layer

- **TMDB API**: Movie data fetched from The Movie Database API
- **Converters**: Type-safe data transformation layer
- **Search Indices**: Pre-computed lowercase search indices for efficient filtering

## Architectural Decisions

### 1. Nested FlatLists for Carousels
**Decision**: Used nested FlatLists (vertical parent, horizontal children) for sectioned movie carousels.

- ✅ Maintains React Native's virtualization benefits
- ✅ Good performance for large lists
- ⚠️ Requires careful key management to avoid re-renders
- ⚠️ Can be complex to debug nested scrolling issues



### 2. Zustand for State Management
**Decision**: Used Zustand for wishlist state management instead of Context API or Redux.

- ✅ Lightweight and simple API
- ✅ Less boilerplate than Redux
- ✅ Good TypeScript support
- ⚠️ May need migration if app scales significantly


### 3. Atomic Design Pattern
**Decision**: Organized components using Atomic Design methodology.

- ✅ Clear component hierarchy and reusability
- ✅ Easier to locate and maintain components
- ⚠️ May seem like an overkill for small scale projects
- ⚠️ Requires discipline to maintain boundaries


### 4. Custom Hooks for Business Logic
**Decision**: Extracted carousel fetching and filtering logic into `useCarousels` hook.

- ✅ Separation of concerns
- ✅ Reusable logic
- ✅ Easier to test

### 5. Screen Refactoring into Sub-directories
**Decision**: Refactored complex screens (e.g., DetailsScreen, HomeScreen) into sub-directories with separate files for components, styles, hooks, and index exports.

- ✅ Better organization and maintainability
- ✅ Easier to locate related files
- ✅ Clear separation of concerns within screens
- ⚠️ More file structure to navigate

### Assumptions & Limitations

**Assumptions:**

1. **Network**: Assumes stable internet connection for initial data loading
2. **Data Freshness**: Movie data is fetched on app launch; no real-time updates
3. **Search**: Live movie search is not required; search functionality is limited to local filtering of pre-loaded movies only
4. **Orientation**: Works with horizontal mode but assumes portrait usage only
5. **Language**: Assumes English speaking users base
6. **Theme**: App uses a single light theme with movie-themed crimson color scheme

**Limitations:**

1. **Component Development Tools**: Missing component development tools like Storybook for isolated component development and documentation
2. **Testing**: Unit testing and UI testing are not implemented
3. **Offline Mode**: No offline mode with pre-cached data; app requires internet connection to fetch movie data
4. **Styling**: JSI-enabled styling libraries like Unistyles are not used; app uses standard React Native StyleSheet API


## Project Structure

```
src/
├── components/          # Reusable UI components (Atomic Design)
│   ├── atoms/          # Basic building blocks
│   ├── molecules/      # Simple component combinations
│   └── organisms/      # Complex UI components
├── navigation/         # Navigation configuration
├── screens/            # Screen components
├── services/           # API services and data fetching
├── stores/            # Global state management (Zustand)
├── theme/             # Theme configuration (colors)
└── types/             # TypeScript type definitions
```

