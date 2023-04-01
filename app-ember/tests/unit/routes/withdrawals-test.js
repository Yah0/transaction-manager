import { module, test } from 'qunit';
import { setupTest } from 'app-ember/tests/helpers';

module('Unit | Route | withdrawals', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:withdrawals');
    assert.ok(route);
  });
});
