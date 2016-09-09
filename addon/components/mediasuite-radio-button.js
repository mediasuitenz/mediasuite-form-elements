import Ember from 'ember'
const { computed, set } = Ember

export default Ember.Component.extend({
  classNames: ['element-wrap', 'radio-button'],
  classNameBindings: ['isChecked:is-checked'],
  inputID: computed('elementId', function () {
    return `input-${this.get('elementId')}`
  }),
  checked: false,
  disabled: false,
  isChecked: computed('checked', function () {
    return this.get('checked') ? 'checked' : ''
  }),
  isDisabled: computed('disabled', function () {
    return this.get('disabled') ? 'disabled' : ''
  }),
  value: '',
  click (e) {
    if (this.$(e.target).is('div')) return false
    if (!this.get('disabled')) {
      set(this, 'checked', true)
      this.get('onChange')(this.get('value'))
    }
  }
})
