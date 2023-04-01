import { module, test } from 'qunit';

import { setupTest } from 'app-ember/tests/helpers';

module('Unit | Model | submitted transaction', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('submitted-transaction', {});
    assert.ok(model);
  });
});
