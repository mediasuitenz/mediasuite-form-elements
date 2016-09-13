import Ember from 'ember'
const { get, set, computed } = Ember

export default Ember.Component.extend({
  classNames: ['element-group-wrap'],
  classNameBindings: ['useButtonStyle:button-style-radios'],
  radioButtonsName: computed('name', function () {
    return get(this, 'name') || get(this, 'elementId')
  })
})
