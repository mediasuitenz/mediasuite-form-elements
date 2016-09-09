import Ember from 'ember'
const { computed } = Ember

export default Ember.Component.extend({
  name: '',
  value: false,
  options: computed('name', 'value', 'disabled', function () {
    return [
      {
        name: this.get('name'),
        value: true,
        label: 'Yes',
        checked: this.get('value') === true,
        disabled: this.get('disabled')
      },
      {
        name: this.get('name'),
        value: false,
        label: 'No',
        checked: this.get('value') === false,
        disabled: this.get('disabled')
      }
    ]
  }),
  actions: {
    onChange (selectedValue) {
      this.get('onChange')(selectedValue)
    }
  }
})
