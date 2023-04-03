import ApplicationAdapter from './application';

export default class AccountAdapter extends ApplicationAdapter {
  namespace = '';

  urlForQueryRecord(query) {
    console.log(query);
    const { accountId } = query;
    return `${this.namespace}/${accountId}`;
  }
}
