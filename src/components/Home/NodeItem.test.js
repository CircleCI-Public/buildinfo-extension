import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15'
import NodeItem from './NodeItem';

Enzyme.configure({ adapter: new Adapter() });

describe('A suite', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<NodeItem />)
      .contains(<tr className="nodeItem"><td /><td /><td /></tr>)).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<table><tbody><NodeItem /></tbody></table>).find('.nodeItem').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<table><tbody><NodeItem /></tbody></table>).text()).toEqual('');
  });
});
