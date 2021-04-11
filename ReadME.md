# 1. How the app looks like?
There are two bottoms tabs for the app:
- Home:
It includes two parts:
1. Well Container: 

It is built dynamically by given parameters, horizontal units and vertical units.

2. Robot commands:

It has all five commands: PLACE, DETECT, DROP, MOVE and REPORT. Each command has its own components.

- Settings:

There are three settings you can make for this app
1. Dynamically change the horizontal and vertical units.
 
 If this is changed, the Well container in Home Screen will be dynamically built as well.
 
 2. Fills Wells Randomly:
 
 Three are two options for this setting. You can choose 1,2 or 3 from the dropdown list to dynamically fill 1,2, or 3 wells. After you make the change, go back to the Home page, the wells will be randomly filled.
 
 3. Toggle Well labels:
 This is used to show/hide well labels for each well. If you show the well labels, go back to Home page, the labels (x,y) are shown for each well.

# 2. What packages/techs are used in this app?
This app used react-navigation, redux, styled-components,axios and typescript.
- react-navigation: it used to create two pages, Home and Settings;
- redux: This app used redux as the state management solution. There are three states in redux store.
1. robotStatus:

It has currentHorizontalPosition, currentVerticalPosition and isPlaced.


2. wellContainerStatus:

It has verticalUnits, horizontalUnits, allWellStatus. It is used to model the status of the Well container.

3. appSettings:

It has isShowWellLabels. In the future, it could add more status like, isDarkMode (whether show dark mode), textFontSize (control font size globally for articles), languageSetting (change languages)

- typescript: I believe ts is very beneficial for any app. There are a lot of interfaces/types definition for redux reduces and components in this app. It may take some time initially, but it can help to reduce errors or bugs early and make developers work together easily.

- axios: this is a http request package. I made a simple config file for http request with axios.

- styled-components: it is a very popular and efficient css solution for react and react native. It is used extensively in this app. 

- jest: There are unit tests for redux reducers and utility functions and are all passed.

# 3. What features are missing in this app?
1. lack of end-to-end testing with Appium.

e2e is extremely important for any app. 
2. lack of backend api integration.

This app is already designed to integrate backend apis. Please checkout comments on src/screens/App.tsx

I initially wanted to build some nodejs/express/typescript apis in aws ec2 and connect to aws rds but time is not allowed. 

3. lack of accessibility support.

a11y is very important for people with impaired vision. 

Unfortunately, I do not have enough time to do the implementation details but these features can be added in the future.

# 4. What tools do I use during developing?
- webstorm: I like jetbrains IDE
- react native debugger: it is convenient to debug the app. For more info please check out this link: [https://github.com/jhen0409/react-native-debugger]

# 5. What branches do I have in git?
There are four kinds of branches in this git repo.
- release/****:
This is used to manage the release versions of the app. For each new release, it will be tagged with a new release number in this branch.

- feature/****:
This is used to add new features to the app by creating a new branch with a description or work item number. Once the feature is finished and passed unit tests. It will be reviewed by other devs and ready to be merged into dev branch.

- bugfix/****:
This is used to fix a bug in this app by creating a bugfix branch with a description or work item number. Once the bug is fixed and passed all unit tests, it will be reviewed by other devs and ready to be merged into dev branch.

- dev:
This is a development branch. It will merge bugfix or feature branch pull requests. Once all PRs are merged, testers will do a regression test on it. If it passed the regression test then it is ready to be merged into release branch and waiting to be release.

# 6. Finally, how to run the app?
- For ios: git clone this repo and go to the root folder and follow these steps:
1. npm i: install all packages
2. cd ios: go to ios folder
3. pod install: install pods for ios app
3. open the ios folder in xcode
4. click the run button.
(If it fails, it could be because the pod version on your computer is different to the on in my laptop. The pod version I am using is 1.10.1, run pod --version to find out your pod version.)

In a summary run thee commands in the root folder
```shell script
npm i 
cd ios
pod install
//the following command will open ios simulator in the command, but I prefer to open the ios folder with xcode and click the run button in xcode
npx react-native run-ios
```

- For android:

Please refer to the follow link to first setup your android environment.
[https://reactnative.dev/docs/environment-setup]
