export default {
  'layout': r => require.ensure([], () => r(require('./demos/layout.vue')), 'layout.vue'),
  'field': r => require.ensure([], () => r(require('./demos/field.vue')), 'field.vue')
};
