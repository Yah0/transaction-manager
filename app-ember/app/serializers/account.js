import ApplicationSerializer from './application';

export default class AccountSerializer extends ApplicationSerializer {
  primaryKey = 'account_id';
}
