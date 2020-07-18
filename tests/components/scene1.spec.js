import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
// import {shallow} from 'enzyme';
import Scene1 from '../../src/Scenes/Scene1';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Scene1><Text>Hola</Text></Scene1>).toJSON();
  expect(tree).toMatchSnapshot();
});