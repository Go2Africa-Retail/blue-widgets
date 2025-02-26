/** @type {import('./getData').default} */
import getData from './getData'
import extend from './extend'

/**
 * The base Widget class from which other widgets are extended.
 * @class
 * @param {HTMLElement} el - The DOM node of the Widget instance.
 * @param {Object} [opts] - Optional options to be passed to the constructor.
 * @param {string} [ref] - The reference of the widget in the registry.
 */
var Widget = function (el, opts, ref) {
  this.el = el
  this.ref = ref

  var datasetOptions = ref ? {} : getData(this.el)
  this.options = extend(this.getOptions(), opts, datasetOptions)
}

/**
 * Returns the default widget options.
 * @returns {Object} The default widget options.
 */
Widget.prototype.getOptions = function () {
  return {}
}

/**
 * Lifecycle method: Fires when all widgets in the current `parse` cycle have been created.
 */
Widget.prototype.onWidgetsReady = function () {
  return false
}

/**
 * Lifecycle method: Fires when a widget is destroyed.
 */
Widget.prototype.beforeRemove = function () {
  return false
}

export default Widget
