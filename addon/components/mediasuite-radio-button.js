import Ember from 'ember'
const { computed, set, get } = Ember

export default Ember.Component.extend({
  classNames: ['element-wrap', 'radio-button'],
  classNameBindings: ['isChecked:is-checked'],
  inputID: computed('elementId', function () {
    return `input-${this.get('elementId')}`
  }),
  disabled: false,
  isDisabled: computed('disabled', function () {
    return this.get('disabled') ? 'disabled' : ''
  }),
  isChecked: computed('value', 'option', function () {
    return get(this, 'value') === get(this, 'option')
  }),
  value: ''
})
