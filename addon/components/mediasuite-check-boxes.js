import Ember from 'ember'
const { computed } = Ember

export default Ember.Component.extend({
  tagName: 'fieldset',
  classNames: ['check-boxes'],
  isChecked: function (option) {
    let initialState = Ember.A(this.get('initialState'))
    return (initialState.indexOf(option.value) !== -1)
  },
  // This is supposed to update whenever the checked status changes on each
  // item, but it is currently broken @see https://github.com/emberjs/ember.js/issues/12475
  // Workaround: set options to a new reference (e.g. clone array)
  checkboxes: computed('options', 'options@each.checked', function () {
    return this.get('options').map(option => {
      return Ember.ObjectProxy.create({
        content: option,
        checked: option.checked ? true : this.isChecked(option)
      })
    })
  }),
  selected: computed.filterBy('checkboxes', 'checked', true),
  selectedValues: computed.mapBy('selected', 'content.value'),
  actions: {
    update () {
      this.get('update')(this.get('selectedValues'))
    }
  }
})
