import React from 'react';
import {render} from '@testing-library/react';

import Map from './Map';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<Map {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      height: 100%;
    }

    <div>
      <div
        class="c0"
      />
    </div>
  `);
});
