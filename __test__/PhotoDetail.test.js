import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import PhotoDetail from '../src/containers/Photo/PhotoDetail';
configure({ adapter: new Adapter() });

describe('PhotoDetail', () => {
    it('renders without crashing', () => {
        const onButtonClickMock = jest.fn();
        const wrapper = shallow(<PhotoDetail show={true} handleClose={onButtonClickMock} photo={{}} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('calls correct function to close modal', () => {
        const onButtonClickMock = jest.fn();
        const wrapper = shallow(
            <PhotoDetail show={true} handleClose={onButtonClickMock} photo={{}} />,
        );
        const buttonElement = wrapper.find('.close-button');
        buttonElement.simulate('click');

        expect(onButtonClickMock).toHaveBeenCalledTimes(1);
    });
});
