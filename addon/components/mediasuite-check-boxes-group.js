/**
 * Creates a group of checkboxes, each of which is contained by a parent checkbox
 * that will tick/untick all of its children
 * @param group  {Object}   An object containing the following properties:
 *                           - name     {String}
 *                           - checked  {Boolean} if this entire group should be checked
 *                           - disabled {Boolean}
 *                           - options  {Array}   An array of checkbox options to pass to the check-boxes component
 * @param update {Function} Update to be called when the group object has been updated
 */
import Ember from 'ember'
const { set } = Ember

export default Ember.Component.extend({
  classNames: ['check-boxes-group'],
  classNameBindings: ['useButtonStyleCheckboxes:rounded-wrapper', 'useButtonStyleCheckboxes:margin-btm-20'],
  actions: {
    updateGroup (group) {
      // Set internal checkboxes to the state of the parent checkbox
      let groupChecked = this.get('group.checked')
      let groupOptions = this.get('group.options')
      groupOptions.forEach(option => {
        set(option, 'checked', groupChecked)
      })
      // Hack because computed properties with @each broken
      // @see https://github.com/emberjs/ember.js/issues/12475
      this.set('group.options', JSON.parse(JSON.stringify(groupOptions)))
      this.get('update')()
    },
    updateOptions (checkedValues) {
      // If all checkboxes checked, set parent to checked
      // If not all, set parent to unchecked
      let groupOptions = this.get('group.options')
      let allChecked = true
      groupOptions.forEach(option => {
        if (checkedValues.indexOf(option.value) < 0) {
          set(option, 'checked', false)
          allChecked = false
        } else {
          set(option, 'checked', true)
        }
      })
      this.set('group.checked', allChecked)
      this.get('update')()
    }
  }
})
