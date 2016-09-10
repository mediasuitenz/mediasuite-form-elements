import Ember from 'ember'
const { computed, get, set } = Ember

export default Ember.Component.extend({
  name: '',
  computedValue: computed('value', 'options', function () {
    const value = get(this, 'value')
    return value == null ? null : get(this, 'options').find(option => option.value === value)
  }),
  options: computed('value', 'disabled', function () {
    return [
      {
        value: true,
        label: 'Yes',
        disabled: this.get('disabled')
      },
      {
        value: false,
        label: 'No',
        disabled: this.get('disabled')
      }
    ]
  }),
  actions: {
    onChange (selectedValue) {
      get(this, 'update')(get(selectedValue, 'value'))
    }
  }
})
