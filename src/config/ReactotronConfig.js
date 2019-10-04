import Reactotron from 'reactotron-react-native';

if (__DEV__) {
    const tron = Reactotron.configure()
        .useReactNative()
        .connect();

    console.tron = tron;

    // limpar time line toda vez que der reload
    // tron.clear();
}

// adb reverse tcp:9090 tcp:9090
