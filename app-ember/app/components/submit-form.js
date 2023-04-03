import Component from '@glimmer/component';
import { action } from '@ember/object';
import { v4 as uuidv4 } from 'ember-uuid';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SubmitFormComponent extends Component {
  @service store;

  @tracked accountId = '';
  @tracked amount = 0;

  isValidUUID(uuid) {
    const uuidRegex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(uuid);
  }

  @action
  generateRandomUUID() {
    this.accountId = uuidv4();
  }

  @action
  async onSubmit() {
    const accountId = this.accountId;
    const amount = this.amount;

    let account = this.store.peekRecord('account', accountId);
    if (account) {
      account.balance += amount;
    }

    // Create a new submitted-transaction record
    let submittedTransaction = this.store.createRecord('transaction', {
      account_id: accountId,
      amount: amount,
    });

    try {
      // Save the new submitted transaction to the server
      let response = await submittedTransaction.save();

      // Update the submitted transaction with the response data
      submittedTransaction.setProperties({
        id: response.id,
        created_at: response.created_at,
      });

      // Clear the form
      this.accountId = '';
      this.amount = '';
    } catch (error) {
      console.error(error);
    }
  }
}
