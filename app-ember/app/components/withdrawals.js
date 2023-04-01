import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class WithdrawalsComponent extends Component {
    @service store;

    get transactions() {
        return this.store.peekAll('transaction').filter(transaction => transaction.amount < 0);
    }
}
