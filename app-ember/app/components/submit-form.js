import Component from '@glimmer/component';
import { action } from '@ember/object';
import { v4 as uuidv4 } from 'ember-uuid';
import { tracked } from '@glimmer/tracking';

export default class SubmitFormComponent extends Component {
  @tracked accountId = '';

  @action
  generateUUID() {
    const newUUID = uuidv4();
    this.accountId = newUUID;
  }

  submitTransaction(accountId, amount) {
    console.log(accountId, amount);
  }
}
