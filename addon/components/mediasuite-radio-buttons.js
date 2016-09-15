import Ember from 'ember'
const { get, computed } = Ember

export default Ember.Component.extend({
  classNames: ['element-group-wrap'],
  classNameBindings: ['useButtonStyle:button-style-radios'],
  radioButtonsName: computed('name', function () {
    return get(this, 'name') || get(this, 'elementId')
  })
})
