import Ember from 'ember'
const {computed, observer} = Ember

export default Ember.Component.extend({
  classNames: ['element-wrap', 'checkbox'],
  classNameBindings: ['useButtonStyle', 'checked'],
  inputID: computed('elementId', function () {
    return `input-${this.get('elementId')}`
  }),
  observeCheckbox: observer('checked', function () {
    const update = this.get('update')
    if (update) {
      update(this.get('checked'))
    }
  })
})
