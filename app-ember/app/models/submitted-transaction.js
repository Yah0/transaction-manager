import Model, { attr } from '@ember-data/model';

export default class SubmittedTransactionModel extends Model {
  @attr('string') account_id;
  @attr('number') amount;
}
