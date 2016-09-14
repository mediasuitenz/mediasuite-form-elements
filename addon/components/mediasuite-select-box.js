import Ember from 'ember'
const { computed } = Ember

export default Ember.Component.extend({
  classNames: ['element-wrap'],
  classNameBindings: ['multiple:multiple'],
  inputId: computed('elementId', function () {
    return `input-${this.get('elementId')}`
  })
})
