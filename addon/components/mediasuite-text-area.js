import Ember from 'ember'
const { computed } = Ember

export default Ember.Component.extend({
  classNames: ['element-wrap'],
  inputId: computed('elementId', function () {
    return `textarea-${this.get('elementId')}`
  })
})
