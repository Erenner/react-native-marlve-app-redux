import React, {useEffect} from 'react';
//import SplashScreen from 'react-native-splash-screen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

// Pages
import Home from './src/Pages/Home/Home';
import DetailCh from './src/Pages/Detail/ChDetail';
// Drawer
import About from './src/Pages/About';
import Contact from './src/Pages/Contact'
// Tab
import ComicsPage from './src/Pages/Comics';
import StoriesPage from './src/Pages/Stories';
// Components
import Header from './src/components/UI/Headers/Header';
import SideBar from './src/components/UI/Sidebar/SideBar';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
    initialRouteName="FeedList"
      headerMode="screen"
    screenOptions={{
      header: ({ scene, previous, navigation}) => (
        <Header scene={scene} previous={previous} navigation={navigation} />
      ),
    }}
    >
  <Stack.Screen name="Home" component={BottomTabs} />
  <Stack.Screen name="DetailCh" options={{ title: "Marvel Comics"}} component={DetailCh} />
  <Stack.Screen name="AboutPage" options={{ title: "About Page"}} component={About} />
  <Stack.Screen name="ContactPage" options={{ title: "Contact Page"}} component={Contact} />
    </Stack.Navigator>
  )
    }


    const Drawer = createDrawerNavigator();

    const DrawerHome = () => {
      return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home"        
          headerMode="screen"
          drawerContent={props => <SideBar {...props} />}
          >
            <Drawer.Screen name="Home" component={MyStack} />
     
       
          </Drawer.Navigator>
        </NavigationContainer>
      );
}


const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: 'home-account',
        }}
      />
      <Tab.Screen
        name="ComicsPage"
        component={ComicsPage}
        options={{
          title: "Marvel Comics",
          tabBarIcon: 'book',
        }}
      />
      <Tab.Screen
        name="StoriesPage"
        component={StoriesPage}
        options={{
          title: "Strories",
          tabBarIcon: 'account-check',
        }}
      />

    </Tab.Navigator>
  );
};

const  App = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return <DrawerHome />
}

export default DrawerHome;