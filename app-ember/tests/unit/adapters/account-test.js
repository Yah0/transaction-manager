import { module, test } from 'qunit';

import { setupTest } from 'app-ember/tests/helpers';

module('Unit | Adapter | account', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:account');
    assert.ok(adapter);
  });
});
