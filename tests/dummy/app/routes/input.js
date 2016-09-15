import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    return {
      firstName: undefined,
      lastName: undefined
    }
  },

  setupController (controller) {
    Ember.set(controller, 'form', {})
  }
})
