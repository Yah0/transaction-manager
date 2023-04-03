import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TransactionTileComponent extends Component {
  @service store;
  @tracked balance = 0;

  get amount() {
    return this.args.transaction.amount;
  }

  get accountId() {
    return this.args.transaction.account_id;
  }

  get account() {
    console.log(this.args.transaction);
    return this.store.findRecord('account', this.args.transaction.account_id);
  }

  get isDeposit() {
    return this.amount > 0;
  }

  get transactionType() {
    return this.isDeposit ? 'Deposit' : 'Withdrawal';
  }
}
