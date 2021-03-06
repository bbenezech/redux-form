'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _plain = require('../structure/plain');

var _plain2 = _interopRequireDefault(_plain);

var _immutable = require('../structure/immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _defaultShouldValidate = require('../defaultShouldValidate');

var _defaultShouldValidate2 = _interopRequireDefault(_defaultShouldValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('defaultShouldValidate', function () {

  it('should validate when initialRender is true', function () {
    (0, _expect2.default)((0, _defaultShouldValidate2.default)({
      initialRender: true
    })).toBe(true);
  });

  var describeDefaultShouldValidate = function describeDefaultShouldValidate(structure) {
    var fromJS = structure.fromJS;


    it('should validate if values have changed', function () {
      (0, _expect2.default)((0, _defaultShouldValidate2.default)({
        initialRender: false,
        structure: structure,
        values: fromJS({
          foo: 'fooInitial'
        }),
        nextProps: {
          values: fromJS({
            foo: 'fooChanged'
          })
        }
      }), true);
    });

    it('should not validate if values have not changed', function () {
      (0, _expect2.default)((0, _defaultShouldValidate2.default)({
        initialRender: false,
        structure: structure,
        values: fromJS({
          foo: 'fooInitial'
        }),
        nextProps: {
          values: fromJS({
            foo: 'fooInitial'
          })
        }
      }), false);
    });
    it('should validate if field validator keys have changed', function () {
      (0, _expect2.default)((0, _defaultShouldValidate2.default)({
        initialRender: false,
        structure: structure,
        values: fromJS({
          foo: 'fooValue'
        }),
        nextProps: {
          values: fromJS({
            foo: 'fooValue'
          })
        },
        lastFieldValidatorKeys: [],
        fieldValidatorKeys: ['foo']
      }), true);
    });

    it('should not validate if field validator keys have not changed', function () {
      (0, _expect2.default)((0, _defaultShouldValidate2.default)({
        initialRender: false,
        structure: structure,
        values: fromJS({
          foo: 'fooInitial'
        }),
        nextProps: {
          values: fromJS({
            foo: 'fooInitial'
          })
        },
        lastFieldValidatorKeys: ['foo'],
        fieldValidatorKeys: ['foo']
      }), false);
    });
  };

  describeDefaultShouldValidate(_plain2.default);
  describeDefaultShouldValidate(_immutable2.default);
});