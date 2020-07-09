import {act} from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure, shallow } from 'enzyme';


configure({ adapter: new Adapter()})


export const findByDataAttr = (component, attr) => {  
  return component.find(`[data-test='${attr}']`);
  };
  
  // const findByDataAttrWhenMounted = (component, attr) => {
  //   return component.find(`[data-test='${attr}']`).hostNodes();
  // };
  