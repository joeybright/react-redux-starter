
import combinedReducers from '../reducers';
import { createStore, compose } from 'redux';

export default function configureStore(initialState) {

    // These changes have mostly to do with enabling the Redux dev tools
    // extension for Chrome. Should work sans the window.... code

    const finalCreateStore = compose(
        // TODO: This should only be activated when the app is in dev. mode
        // and be exluded from all final builds
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);

    const store = finalCreateStore(combinedReducers, {});
    return store;
    
};
