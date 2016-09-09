import Ember from 'ember'
const { computed, get, set } = Ember

export default Ember.Component.extend({
  classNames: ['currency-field'],
  inputID: computed('elementId', function () {
    return `input-${get(this, 'elementId')}`
  }),
  value: null,
  init () {
    this._super(...arguments)
    const initialValue = (get(this, 'initialValue') / 100).toFixed(2)
    set(this, 'value', initialValue)
  },

  actions: {
    update (value) {
      if (!value) return get(this, 'update')(0)
      get(this, 'update')(value * 100)
    },
    toFixed (value) {
      return parseFloat(value, 10).toFixed(2)
    }
  }
})
