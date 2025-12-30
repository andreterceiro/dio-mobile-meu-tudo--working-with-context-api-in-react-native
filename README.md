# Introduction

Teacher said that our challenge will be send a value rom one screen to ohter screen.

![challenge](images/challenge.png)


# Creating the test project

First, you need to create the project with this command

```sh
npx create-expo-app aula-context
```

Then you can install some dependencies as you can see in the [documentation](https://reactnavigation.org/docs/getting-started).

```sh
npx expo install react-native-screens react-native-safe-area-context
```

This two steps you can see in this area of the documentation:

![React Native - installation](images/react-native--installation-instructions.png)

Teacher said that the motivation to use this dependencies are:

- **react-native-screens:** part of React Navigation to manipulate screens;
- **react-native-safe-area-context**: to mantain the areas viewable.

Then teacher selected 1 type of the navigation: stack.

The installation of the stack navigation was done with this command:

```sh
npm install @react-navigation/stack
```


# Configuring the navigation

Teacher did these two imports in App.tsx:

```
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
```

Teacher also used `createStackNavigator` this way:

```
const stack = createStackNavigator();
```

Then teacher the export in App.tsx to looks like:

```
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator></stack.Navigator>
    </NavigationContainer>
  );
}
```

Teacher explained that &lt;NavigationContainer&gt; says that the area inside him is navigable and &lt;stack.Navigator&gt; is the navigator.


And inside of <stack.Navigator> teacher put the screens:

```
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="User" component={UserScreen} />
```

Teacher show an alternative way to code, making a direct extraction of Navigator and Screen when creating the constant.