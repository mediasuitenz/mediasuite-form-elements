import Ember from 'ember'
const { computed } = Ember

export default Ember.Component.extend({
  classNames: ['element-wrap'],
  inputID: computed('elementId', function () {
    return `input-${this.get('elementId')}`
  })
})
