import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    return {
      isChecked: false,
      errors: [{ message: 'You should have checked this!' }]
    }
  }
})
