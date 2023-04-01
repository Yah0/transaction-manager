import Component from '@glimmer/component';

export default class SubmitFormComponent extends Component {
  submitTransaction(accountId, amount) {
    console.log(accountId, amount);
  }
}
