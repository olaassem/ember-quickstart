import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PeopleListComponent extends Component {
  // The @action decorator indicates we want to use this method as an action in our template, in response to user interaction.
  @action
  showPerson(person) {
    alert(`The person's name is ${person}!`);
  }
}