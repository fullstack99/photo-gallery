import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Photo from '../src/containers/Photo/index';
configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});

describe('Photo', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Photo store={store} photos={{isLoaded: true, photos: []}}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
