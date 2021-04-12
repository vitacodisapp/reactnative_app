import * as React from 'react';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import axios from 'axios';

import RootNavigation from '_navigations/RootNavigation';

import configureStore from '_redux/configureStore';

import CustomSplashScreen from '_components/CustomSplashScreen/index';

const {store, persistor} = configureStore();

axios.defaults.baseURL = 'https://staging2.biocodis.com/wp-json';

const App = () => {
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {isLoading ? <CustomSplashScreen /> : <RootNavigation />}
        </PersistGate>
      </Provider>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
};

export default App;
