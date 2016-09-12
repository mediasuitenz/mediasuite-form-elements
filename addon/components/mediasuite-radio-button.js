import Ember from 'ember'
const { computed, get } = Ember

export default Ember.Component.extend({
  classNames: ['element-wrap', 'radio-button'],
  classNameBindings: ['isChecked:is-checked'],
  inputID: computed('elementId', function () {
    return `input-${get(this, 'elementId')}`
  }),
  disabled: false,
  isDisabled: computed('disabled', function () {
    return get(this, 'disabled') ? 'disabled' : ''
  }),
  value: ''
})
