export default {
  'quickstart': r => require.ensure([], () => r(require('./docs/quickstart.md')), 'quickstart.md'),
  'changelog': r => require.ensure([], () => r(require('./docs/changelog.md')), 'changelog.md'),
  'layout': r => require.ensure([], () => r(require('./docs/layout.md')), 'layout.md'),
  'field': r => require.ensure([], () => r(require('./docs/field.md')), 'field.md') 
};
