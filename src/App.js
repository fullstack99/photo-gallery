import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore, { history } from './store'
import Photo from './containers/Photo'

const { persistor, store } = configureStore()

const App = () => (
	<Provider store={store}>
		<PersistGate
			loading="Loading..."
			persistor={persistor}
		>
			<ConnectedRouter history={history}>
				<Photo/>
			</ConnectedRouter>
		</PersistGate>
	</Provider>
)

export default App;
