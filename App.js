import React from 'react';

// import LoginScreen from './app/screens/LoginScreen';
// import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  // return <LoginScreen />;
  // return <RegisterScreen />;
  return <ListingEditScreen />;
}

// import React, { useState } from 'react';

// import { View } from 'react-native';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';
// import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
// import AccountScreen from './app/screens/AccountScreen';
// import MessagesScreen from './app/screens/MessagesScreen';
// import ListingsScreen from './app/screens/ListingsScreen';

// import Screen from './app/components/Screen';
// import AppPicker from './app/components/AppPicker';
// import AppTextInput from './app/components/AppTextInput';

// const categories = [
//   { label: 'Furniture', value: 1 },
//   { label: 'Clothing', value: 2 },
//   { label: 'Cameras', value: 3 },
//   { label: 'Electronic', value: 4 },
//   { label: 'Tools', value: 5 },
// ];

// export default function App() {
//   const [category, setCategory] = useState(categories[0]);
//   return (
//     <Screen>
//       <AppPicker
//         selectedItem={category}
//         onSelectedItem={item => setCategory(item)}
//         items={categories}
//         icon="apps"
//         placeholder="Category"
//       />
//       <AppTextInput icon="email" placeholder="Email" />
//     </Screen>
//   );
//   // return <MessagesScreen />;
//   // return <AccountScreen />;
//   // return <ListingsScreen />;
//   // return <ListingDetailsScreen />;
//   // return <ViewImageScreen />;
//   // return <WelcomeScreen />
// }
