'use strict';

var _web = require('./web.server');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('Started', function () {
  var webServer = null;

  beforeAll(function () {
    webServer = new _web2.default();
  });

  test('should start and trigger a callback', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var promise;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            promise = webServer.start();
            _context.next = 3;
            return expect(promise).resolves.toBeUndefined();

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));

  test('should stop and trigger a callback', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var promise;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            promise = webServer.stop();
            _context2.next = 3;
            return expect(promise).resolves.toBeUndefined();

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  })));
});