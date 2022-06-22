
# Fanfindr

[Fanfindr](https://www.fanfindr.com), is an awesome app to connect sports fans of the same team with one another to view games locally. Restaurants can also use the app to broadcast and ping Fanfindr users that the Game is On. Users are able to sign up, create profiles and choose their favourite team across all major sports. The mobile app was built using React Native and is available for view on iOS and Android. More changes and additions to come



![demo](https://github.com/mocodes0/Fanfindr/blob/main/assets/pics/FF_Layout_Site.jpeg)
![signup](https://github.com/mocodes0/Fanfindr/blob/main/assets/pics/IMG_2620.PNG)
![social profile](https://github.com/mocodes0/Fanfindr/blob/main/assets/pics/IMG_2622.PNG)
![phone registration](https://github.com/mocodes0/Fanfindr/commit/14bfed3bb894cae39a20bfc687514d5b067d8edd)


<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Install latest npm version on your system.

- npm

  ```sh
  npm install npm@latest -g
  ```

  Check the version by running this command.

- npm version
  ```sh
  npm -v
  ```
  I used expo-cli for this project,if you want to build the project with expo install expo-cli on your system
- expo cli
  ```sh
  npm install --global expo-cli
  ```

If installation gives you error like this,

- ```sh
      npm ERR! code EACCES
      npm ERR! syscall access
      npm ERR! path /usr/local/lib/node_modules/expo-cli
      npm ERR! errno -13
      npm ERR! Error: EACCES: permission denied,...
  ```
  You have to give root permission ,like for linux:
- ```sh
    sudo npm install --global expo-cli
  ```

### Installation

1. Clone the repo
   ```sh
   git clone  git@github.com:mocodes0/Fanfindr.git
   ```
2. Install Expo packages
   ```sh
   npm install expo
   ```

- Now your project folder should look like this :
  ```sh
      └── .expo
      ├── .expo-shared
      ├── main / res / values
      ├── node_modules
      ├── pages
      ├── App.js
      ├── app.json
      ├── babel.config.js
      ├── package-lock.json
      ├── package.json
      ├── react-native.config.js
      ├── README.md
      
  ```

<!-- USAGE EXAMPLES -->

## Usage

- You can run this project by starting the metro server

  ```sh
  npm start
  ```

  or

  ```sh
  expo start
  ```

- If you are using expo , you can debug the project by installing expo app on your mobile devices & scanning the QR code.

  - [Expo App Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www‎)
  - [Expo App IOS](https://apps.apple.com/app/apple-store/id982107779)

- You can also debug the application by running the emulators on your systems.
