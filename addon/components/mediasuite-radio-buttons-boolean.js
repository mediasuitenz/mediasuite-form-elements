import Ember from 'ember'
const { computed, get } = Ember

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
        disabled: get(this, 'disabled')
      },
      {
        value: false,
        label: 'No',
        disabled: get(this, 'disabled')
      }
    ]
  }),
  actions: {
    onChange (selectedValue) {
      get(this, 'update')(get(selectedValue, 'value'))
    }
  }
})
