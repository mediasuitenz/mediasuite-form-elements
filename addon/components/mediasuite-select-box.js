import Ember from 'ember'
const { computed, set, get } = Ember

export default Ember.Component.extend({
  classNames: ['element-wrap'],
  classNameBindings: ['multiple:multiple'],
  inputId: computed('elementId', function () {
    return `input-${this.get('elementId')}`
  }),
  actions: {
    update: function(value) {
      if (value === undefined) value = null
      set(this, 'mutField', value)
    }
  }
})
