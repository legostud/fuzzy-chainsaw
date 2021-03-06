/*
  OPTIONS:
  The following options are available for Component examples:
    - No Padding variant (noPadding: true)
    - Dark Background variant (darkBackground: true)

  Example:
    ```
      export default [{
        name: 'Default styling',
        component: (
          <Component>Lorem ipsum</Component>
        ),
        options: {
          noPadding: true,
          darkBackground: true
        }
      },
    ```
*/

import Rhythm from './Rhythm';

const children = [
  <div key="1">abc</div>,
  <div key="2">123</div>,
  <div key="3">
    <section>9990</section>
    <div>3758</div>
    <div>2389</div>
  </div>
];


module.exports = [{
  name: 'default',
  component: (
    <Rhythm>{children}</Rhythm>
  )
}, {
  name: 'small size',
  component: (
    <Rhythm size="small">{children}</Rhythm>
  )
}, {
  name: 'large size',
  component: (
    <Rhythm size="large">{children}</Rhythm>
  )
}, {
  name: 'deep',
  component: (
    <Rhythm deep>{children}</Rhythm>
  )
}, {
  name: 'size/deep',
  component: (
    <Rhythm deep size="small">{children}</Rhythm>
  )
}, {
  name: 'size/deep/tagName/class',
  component: (
    <Rhythm tagName="section" deep size="large" className="red">{children}</Rhythm>
  )
}];
