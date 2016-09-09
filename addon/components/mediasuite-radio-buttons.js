import Ember from 'ember'
const { get, set } = Ember

export default Ember.Component.extend({
  classNames: ['element-group-wrap'],
  classNameBindings: ['useButtonStyle:button-style-radios'],
  actions: {
    //todo: wtf is going on here!!!
    onChange (selectedValue) {
      get(this, 'onChange')(selectedValue)
      get(this, 'options').forEach(function (option) {
        set(option, 'checked', option.value === selectedValue)
      })
    }
  }
})
