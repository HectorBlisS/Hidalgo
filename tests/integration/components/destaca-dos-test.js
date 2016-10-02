import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('destaca-dos', 'Integration | Component | destaca dos', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{destaca-dos}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#destaca-dos}}
      template block text
    {{/destaca-dos}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
