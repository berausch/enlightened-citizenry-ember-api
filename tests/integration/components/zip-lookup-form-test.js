import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('zip-lookup-form', 'Integration | Component | zip lookup form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{zip-lookup-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#zip-lookup-form}}
      template block text
    {{/zip-lookup-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
