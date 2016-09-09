import Ember from 'ember'
const { computed } = Ember

export default Ember.Component.extend({
  classNames: ['form-field', 'element-wrap'],
  type: 'text',
  inputID: computed('elementId', function () {
    return `input-${this.get('elementId')}`
  }),
  actions: {
    localupdate () {
      debugger
    }
  }
})
