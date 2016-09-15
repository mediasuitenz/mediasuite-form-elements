import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    const options = [
      {value: 1, label: 'Parzival'},
      {value: 2, label: 'Art3mus'},
      {value: 3, label: 'Aech'},
      {value: 4, label: 'Shoto'},
      {value: 5, label: 'Daito', disabled: true}
    ]
    return {
      options: options,
      errors: [{message: 'They\'re all great'}],
      selected: options[1]
    }
  },
  actions: {
    favouriteCharacterChanged (value) {
      alert(`Gunter ${value.label} selected`)
      Ember.set(this, 'controller.model.selected', value)
    }
  }
})
