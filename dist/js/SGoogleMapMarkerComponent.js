Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _coffeekrakenSGoogleMapComponentBase = require('coffeekraken-s-google-map-component-base');

var _coffeekrakenSGoogleMapComponentBase2 = _interopRequireDefault(_coffeekrakenSGoogleMapComponentBase);

var _whenAttribute = require('coffeekraken-sugar/js/dom/whenAttribute');

var _whenAttribute2 = _interopRequireDefault(_whenAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @name 		SGoogleMapInfoWindowComponent
 * @extends 	SGoogleMapComponentBase
 * Provide a simple, declarative and powerful webcomponent wrapper to create google info window inside an s-google-map-marker component.
 *
 * @styleguide  	Objects / Google Map
 * @example 	html
 * <s-google-map api-key="..." center="{lat: -25.363, lng: 131.044}">
 * 	<s-google-map-marker api-key="..." position="{lat: -25.363, lng: 131.044}">
 * 		<s-google-map-info-window>
 *   		<!-- info window content here... -->
 * 		</s-google-map-info-window>
 * 	</s-google-map-marker>
 * </s-google-map>
 * @see 	https://www.npmjs.com/package/google-maps
 * @see 	https://developers.google.com/maps/documentation/javascript/
 * @author 	Olivier Bossel <olivier.bossel@gmail.com>
 */

var SGoogleMapInfoWindowComponent = function (_SGoogleMapComponentB) {
	_inherits(SGoogleMapInfoWindowComponent, _SGoogleMapComponentB);

	function SGoogleMapInfoWindowComponent() {
		_classCallCheck(this, SGoogleMapInfoWindowComponent);

		return _possibleConstructorReturn(this, (SGoogleMapInfoWindowComponent.__proto__ || Object.getPrototypeOf(SGoogleMapInfoWindowComponent)).apply(this, arguments));
	}

	_createClass(SGoogleMapInfoWindowComponent, [{
		key: 'shouldAcceptComponentProp',


		/**
   * Should accept component props
   * @definition 		SWebComponent.shouldAcceptComponentProp
   * @protected
   */
		value: function shouldAcceptComponentProp(prop) {
			return true;
		}

		/**
   * Component will mount
   * @definition 		SWebComponent.componentWillMount
   * @protected
   */

	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			_get(SGoogleMapInfoWindowComponent.prototype.__proto__ || Object.getPrototypeOf(SGoogleMapInfoWindowComponent.prototype), 'componentWillMount', this).call(this);
		}

		/**
   * Mount component
   * @definition 		SWebComponent.componentMount
   * @protected
   */

	}, {
		key: 'componentMount',
		value: function componentMount() {
			_get(SGoogleMapInfoWindowComponent.prototype.__proto__ || Object.getPrototypeOf(SGoogleMapInfoWindowComponent.prototype), 'componentMount', this).call(this);

			// get the map instance to use for this marker.
			// this is grabed from the parent node that need to be a google-map component
			if (!this.marker || !this.map) {
				throw 'The "' + this._componentNameDash + '" component has to be a direct child of a "SGoogleMapMarkerComponent"';
			}

			// init info window
			this._infoWindow = new this.google.maps.InfoWindow({
				content: this.innerHTML
			});

			// listen for marker click
			this.marker.addEventListener('click', this._onMarkerClick.bind(this));
		}

		/**
   * Component unmount
   * @definition 		SWebComponent.componentUnmount
   * @protected
   */

	}, {
		key: 'componentUnmount',
		value: function componentUnmount() {
			_get(SGoogleMapInfoWindowComponent.prototype.__proto__ || Object.getPrototypeOf(SGoogleMapInfoWindowComponent.prototype), 'componentUnmount', this).call(this);
		}

		/**
   * Component will receive props
   * @definition 		SWebComponent.componentWillReceiveProps
   * @protected
   */

	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps, previousProps) {
			if (!this._marker) return;
			this._marker.setOptions(nextProps);
		}

		/**
   * Render the component
   * Here goes the code that reflect the this.props state on the actual html element
   * @definition 		SWebComponent.render
   * @protected
   */

	}, {
		key: 'render',
		value: function render() {
			_get(SGoogleMapInfoWindowComponent.prototype.__proto__ || Object.getPrototypeOf(SGoogleMapInfoWindowComponent.prototype), 'render', this).call(this);
		}

		/**
   * On click on marker
   * @param 		{MouseEvent} 		e 		The click event
   */

	}, {
		key: '_onMarkerClick',
		value: function _onMarkerClick(e) {
			// open the info window
			this._infoWindow.open(this.map, this.marker);
		}

		/**
   * Access the google map instance
   * @type 	{Google.Map}
   */

	}, {
		key: 'map',
		get: function get() {
			return this.parentNode.marker.map;
		}

		/**
   * Access the google map marker instance
   * @type 	{Google.Map.Marker}
   */

	}, {
		key: 'marker',
		get: function get() {
			return this.parentNode.marker;
		}
	}], [{
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   * @protected
   */
		get: function get() {
			return {

				/**
     * @name 	Google Map Info Window API
     * Support all the google map info window API properties
     * @prop
     * @type 	{Google.Map.Marker}
     * @see 	https://developers.google.com/maps/documentation/javascript/3.exp/reference#MarkerOptions 	Google Map Marker Options
     */

			};
		}

		/**
   * Mount dependencies
   * @definition 		SWebComponent.mountDependencies
   * @protected
   */

	}, {
		key: 'mountDependencies',
		get: function get() {
			return [function () {
				return (0, _whenAttribute2.default)(this.parentNode, 'inited');
			}];
		}

		/**
   * Physical props
   * @definition 		SWebComponent.physicalProps
   * @protected
   */

	}, {
		key: 'physicalProps',
		get: function get() {
			return [];
		}
	}]);

	return SGoogleMapInfoWindowComponent;
}(_coffeekrakenSGoogleMapComponentBase2.default);

exports.default = SGoogleMapInfoWindowComponent;