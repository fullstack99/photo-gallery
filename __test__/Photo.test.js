import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';

import Photo from '../src/containers/Photo/index';
configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});

describe('Photo', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Photo store={store} photos={{isLoaded: true, photos: []}}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the value of totalRecords', () => {
        const wrapper = mount(shallow(<Photo store={store} photos={{isLoaded: true, photos: []}}/>).get(0))
        wrapper.setProps({
            totalRecords: 0,
            pageLimit: 30,
            pageNeighbours: 0,
            currentPage: 1,
            items: [],
            photos: [],
            favoriteImages: [],
            showModal: false,
            selectedPhoto: {}
        });
        expect(wrapper.state()).toEqual({
            totalRecords: 0,
            pageLimit: 30,
            pageNeighbours: 0,
            currentPage: 1,
            items: [],
            photos: [],
            favoriteImages: [],
            showModal: false,
            selectedPhoto: {}
        });
    });

    it('gotoFirstPage method', () => {
        const wrapper = mount(shallow(<Photo store={store} photos={{isLoaded: true, photos: []}}/>).get(0))
        expect(wrapper.instance().state.currentPage).toBe(1)
        wrapper.instance().gotoFirstPage()
        expect(wrapper.instance().state.currentPage).toBe(1)
    });

    it('gotoPrevPage method', () => {
        const wrapper = mount(shallow(<Photo store={store} photos={{isLoaded: true, photos: []}}/>).get(0))
        expect(wrapper.instance().state.currentPage).toBe(1)
        wrapper.instance().gotoPrevPage()
        expect(wrapper.instance().state.currentPage).toBe(1)
    });

    it('gotoNextPage method', () => {
        const wrapper = mount(shallow(<Photo store={store} photos={{isLoaded: true, photos: []}}/>).get(0))
        expect(wrapper.instance().state.currentPage).toBe(1)
        wrapper.instance().gotoNextPage()
        expect(wrapper.instance().state.currentPage).toBe(1)
    });

    it('gotoLastPage method', () => {
        const wrapper = mount(shallow(<Photo store={store} photos={{isLoaded: true, photos: []}}/>).get(0))
        wrapper.instance().gotoLastPage()
        expect(wrapper.instance().state.currentPage).toBe(0)
    });

    it('showDetail method', () => {
        const wrapper = mount(shallow(<Photo store={store} photos={{isLoaded: true, photos: []}}/>).get(0))
        wrapper.instance().showDetail({
            id: 123
        })
        expect(wrapper.instance().state.showModal).toBe(true)
        expect(wrapper.instance().state.selectedPhoto).toEqual({
            "id": 123
        })
    });

    it('closeModal method', () => {
        const wrapper = mount(shallow(<Photo store={store} photos={{isLoaded: true, photos: []}}/>).get(0))
        wrapper.instance().closeModal()
        expect(wrapper.instance().state.showModal).toBe(false)
    });
});
