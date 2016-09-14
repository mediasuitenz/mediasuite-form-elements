import Ember from 'ember'
const { computed, get, set } = Ember

export default Ember.Component.extend({
  tagName: 'fieldset',
  classNames: ['check-boxes', 'group-element-wrap'],
  selected: computed.filterBy('options', 'checked', true),
  didReceiveAttrs () {
    this._super(...arguments)
    set(this, 'clonedOptions', JSON.parse(JSON.stringify(get(this, 'options'))))
  },
  actions: {
    onUpdate (option, isChecked) {
      set(option, 'checked', isChecked)
      get(this, 'update')(get(this, 'clonedOptions'))
    }
  }
})
