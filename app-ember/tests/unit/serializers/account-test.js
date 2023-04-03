import { module, test } from 'qunit';

import { setupTest } from 'app-ember/tests/helpers';

module('Unit | Serializer | account', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('account');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('account', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
