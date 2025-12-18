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