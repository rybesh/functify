"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _defineProperty = require("babel-runtime/helpers/define-property")["default"];

var _slicedToArray = require("babel-runtime/helpers/sliced-to-array")["default"];

var _Symbol$iterator = require("babel-runtime/core-js/symbol/iterator")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _Set = require("babel-runtime/core-js/set")["default"];

var _Object$keys = require("babel-runtime/core-js/object/keys")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = functify;

var Functified = (function () {
    function Functified(iterable) {
        _classCallCheck(this, Functified);

        this.iterable = iterable;
        this.isFunctified = true;
    }

    _createClass(Functified, [{
        key: _Symbol$iterator,
        value: _regeneratorRuntime.mark(function value() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value;

            return _regeneratorRuntime.wrap(function value$(context$2$0) {
                while (1) switch (context$2$0.prev = context$2$0.next) {
                    case 0:
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        context$2$0.prev = 3;
                        _iterator = _getIterator(this.iterable);

                    case 5:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            context$2$0.next = 12;
                            break;
                        }

                        value = _step.value;
                        context$2$0.next = 9;
                        return value;

                    case 9:
                        _iteratorNormalCompletion = true;
                        context$2$0.next = 5;
                        break;

                    case 12:
                        context$2$0.next = 18;
                        break;

                    case 14:
                        context$2$0.prev = 14;
                        context$2$0.t0 = context$2$0["catch"](3);
                        _didIteratorError = true;
                        _iteratorError = context$2$0.t0;

                    case 18:
                        context$2$0.prev = 18;
                        context$2$0.prev = 19;

                        if (!_iteratorNormalCompletion && _iterator["return"]) {
                            _iterator["return"]();
                        }

                    case 21:
                        context$2$0.prev = 21;

                        if (!_didIteratorError) {
                            context$2$0.next = 24;
                            break;
                        }

                        throw _iteratorError;

                    case 24:
                        return context$2$0.finish(21);

                    case 25:
                        return context$2$0.finish(18);

                    case 26:
                    case "end":
                        return context$2$0.stop();
                }
            }, value, this, [[3, 14, 18, 26], [19,, 21, 25]]);
        })
    }, {
        key: "custom",

        // fn(iterable) -> generator function
        value: function custom(fn) {
            var generator = fn(this.iterable);
            return Functified.fromGenerator(generator);
        }
    }, {
        key: "distinct",

        // alias dedupe, unique
        value: function distinct() {
            var iterable = this.iterable;
            var memory = new _Set();
            return Functified.fromGenerator(_regeneratorRuntime.mark(function callee$2$0() {
                var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, value;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            _iteratorNormalCompletion2 = true;
                            _didIteratorError2 = false;
                            _iteratorError2 = undefined;
                            context$3$0.prev = 3;
                            _iterator2 = _getIterator(iterable);

                        case 5:
                            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                context$3$0.next = 14;
                                break;
                            }

                            value = _step2.value;

                            if (memory.has(value)) {
                                context$3$0.next = 11;
                                break;
                            }

                            memory.add(value);
                            context$3$0.next = 11;
                            return value;

                        case 11:
                            _iteratorNormalCompletion2 = true;
                            context$3$0.next = 5;
                            break;

                        case 14:
                            context$3$0.next = 20;
                            break;

                        case 16:
                            context$3$0.prev = 16;
                            context$3$0.t0 = context$3$0["catch"](3);
                            _didIteratorError2 = true;
                            _iteratorError2 = context$3$0.t0;

                        case 20:
                            context$3$0.prev = 20;
                            context$3$0.prev = 21;

                            if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                                _iterator2["return"]();
                            }

                        case 23:
                            context$3$0.prev = 23;

                            if (!_didIteratorError2) {
                                context$3$0.next = 26;
                                break;
                            }

                            throw _iteratorError2;

                        case 26:
                            return context$3$0.finish(23);

                        case 27:
                            return context$3$0.finish(20);

                        case 28:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[3, 16, 20, 28], [21,, 23, 27]]);
            }));
        }
    }, {
        key: "filter",
        value: function filter(callback) {
            var iterable = this.iterable;
            return Functified.fromGenerator(_regeneratorRuntime.mark(function callee$2$0() {
                var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, value;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            _iteratorNormalCompletion3 = true;
                            _didIteratorError3 = false;
                            _iteratorError3 = undefined;
                            context$3$0.prev = 3;
                            _iterator3 = _getIterator(iterable);

                        case 5:
                            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                                context$3$0.next = 13;
                                break;
                            }

                            value = _step3.value;

                            if (!callback(value)) {
                                context$3$0.next = 10;
                                break;
                            }

                            context$3$0.next = 10;
                            return value;

                        case 10:
                            _iteratorNormalCompletion3 = true;
                            context$3$0.next = 5;
                            break;

                        case 13:
                            context$3$0.next = 19;
                            break;

                        case 15:
                            context$3$0.prev = 15;
                            context$3$0.t0 = context$3$0["catch"](3);
                            _didIteratorError3 = true;
                            _iteratorError3 = context$3$0.t0;

                        case 19:
                            context$3$0.prev = 19;
                            context$3$0.prev = 20;

                            if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
                                _iterator3["return"]();
                            }

                        case 22:
                            context$3$0.prev = 22;

                            if (!_didIteratorError3) {
                                context$3$0.next = 25;
                                break;
                            }

                            throw _iteratorError3;

                        case 25:
                            return context$3$0.finish(22);

                        case 26:
                            return context$3$0.finish(19);

                        case 27:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[3, 15, 19, 27], [20,, 22, 26]]);
            }));
        }
    }, {
        key: "flatten",
        value: function flatten() {
            var iterable = this.iterable;
            return Functified.fromGenerator(_regeneratorRuntime.mark(function callee$2$0() {
                var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, value;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            _iteratorNormalCompletion4 = true;
                            _didIteratorError4 = false;
                            _iteratorError4 = undefined;
                            context$3$0.prev = 3;
                            _iterator4 = _getIterator(iterable);

                        case 5:
                            if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                                context$3$0.next = 16;
                                break;
                            }

                            value = _step4.value;

                            if (!value[_Symbol$iterator]) {
                                context$3$0.next = 11;
                                break;
                            }

                            return context$3$0.delegateYield(functify(value).flatten(), "t0", 9);

                        case 9:
                            context$3$0.next = 13;
                            break;

                        case 11:
                            context$3$0.next = 13;
                            return value;

                        case 13:
                            _iteratorNormalCompletion4 = true;
                            context$3$0.next = 5;
                            break;

                        case 16:
                            context$3$0.next = 22;
                            break;

                        case 18:
                            context$3$0.prev = 18;
                            context$3$0.t1 = context$3$0["catch"](3);
                            _didIteratorError4 = true;
                            _iteratorError4 = context$3$0.t1;

                        case 22:
                            context$3$0.prev = 22;
                            context$3$0.prev = 23;

                            if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
                                _iterator4["return"]();
                            }

                        case 25:
                            context$3$0.prev = 25;

                            if (!_didIteratorError4) {
                                context$3$0.next = 28;
                                break;
                            }

                            throw _iteratorError4;

                        case 28:
                            return context$3$0.finish(25);

                        case 29:
                            return context$3$0.finish(22);

                        case 30:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[3, 18, 22, 30], [23,, 25, 29]]);
            }));
        }
    }, {
        key: "groupBy",
        value: function groupBy() {
            var _this = this;

            for (var _len = arguments.length, predicates = Array(_len), _key = 0; _key < _len; _key++) {
                predicates[_key] = arguments[_key];
            }

            if (predicates.length > 1) {
                return functify(predicates.map(function (fn) {
                    return _this.filter(fn);
                }));
            }
        }
    }, {
        key: "groupByMap",
        value: function groupByMap(map) {
            var _this2 = this;

            return functify(functify(map).map(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2);

                var name = _ref2[0];
                var fn = _ref2[1];
                return [name, _this2.filter(fn)];
            }));
        }
    }, {
        key: "loop",

        // be careful with this one
        // could combine this with with take
        // consider using 2 as the default number of loops
        value: function loop() {
            var n = arguments[0] === undefined ? Infinity : arguments[0];

            var iterable = this.iterable;
            return Functified.fromGenerator(_regeneratorRuntime.mark(function callee$2$0() {
                var i, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, value;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            i = 0;

                        case 1:
                            if (!(i++ < n)) {
                                context$3$0.next = 30;
                                break;
                            }

                            _iteratorNormalCompletion5 = true;
                            _didIteratorError5 = false;
                            _iteratorError5 = undefined;
                            context$3$0.prev = 5;
                            _iterator5 = _getIterator(iterable);

                        case 7:
                            if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                                context$3$0.next = 14;
                                break;
                            }

                            value = _step5.value;
                            context$3$0.next = 11;
                            return value;

                        case 11:
                            _iteratorNormalCompletion5 = true;
                            context$3$0.next = 7;
                            break;

                        case 14:
                            context$3$0.next = 20;
                            break;

                        case 16:
                            context$3$0.prev = 16;
                            context$3$0.t0 = context$3$0["catch"](5);
                            _didIteratorError5 = true;
                            _iteratorError5 = context$3$0.t0;

                        case 20:
                            context$3$0.prev = 20;
                            context$3$0.prev = 21;

                            if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
                                _iterator5["return"]();
                            }

                        case 23:
                            context$3$0.prev = 23;

                            if (!_didIteratorError5) {
                                context$3$0.next = 26;
                                break;
                            }

                            throw _iteratorError5;

                        case 26:
                            return context$3$0.finish(23);

                        case 27:
                            return context$3$0.finish(20);

                        case 28:
                            context$3$0.next = 1;
                            break;

                        case 30:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[5, 16, 20, 28], [21,, 23, 27]]);
            }));
        }
    }, {
        key: "map",
        value: function map(callback) {
            var iterable = this.iterable;
            return Functified.fromGenerator(_regeneratorRuntime.mark(function callee$2$0() {
                var _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, value;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            _iteratorNormalCompletion6 = true;
                            _didIteratorError6 = false;
                            _iteratorError6 = undefined;
                            context$3$0.prev = 3;
                            _iterator6 = _getIterator(iterable);

                        case 5:
                            if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
                                context$3$0.next = 12;
                                break;
                            }

                            value = _step6.value;
                            context$3$0.next = 9;
                            return callback(value);

                        case 9:
                            _iteratorNormalCompletion6 = true;
                            context$3$0.next = 5;
                            break;

                        case 12:
                            context$3$0.next = 18;
                            break;

                        case 14:
                            context$3$0.prev = 14;
                            context$3$0.t0 = context$3$0["catch"](3);
                            _didIteratorError6 = true;
                            _iteratorError6 = context$3$0.t0;

                        case 18:
                            context$3$0.prev = 18;
                            context$3$0.prev = 19;

                            if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
                                _iterator6["return"]();
                            }

                        case 21:
                            context$3$0.prev = 21;

                            if (!_didIteratorError6) {
                                context$3$0.next = 24;
                                break;
                            }

                            throw _iteratorError6;

                        case 24:
                            return context$3$0.finish(21);

                        case 25:
                            return context$3$0.finish(18);

                        case 26:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
            }));
        }
    }, {
        key: "skip",
        value: function skip(n) {
            var iterable = this.iterable;
            return Functified.fromGenerator(_regeneratorRuntime.mark(function callee$2$0() {
                var i, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, value;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            i = 0;
                            _iteratorNormalCompletion7 = true;
                            _didIteratorError7 = false;
                            _iteratorError7 = undefined;
                            context$3$0.prev = 4;
                            _iterator7 = _getIterator(iterable);

                        case 6:
                            if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                                context$3$0.next = 17;
                                break;
                            }

                            value = _step7.value;

                            if (!(i < n)) {
                                context$3$0.next = 12;
                                break;
                            }

                            i++;
                            context$3$0.next = 14;
                            break;

                        case 12:
                            context$3$0.next = 14;
                            return value;

                        case 14:
                            _iteratorNormalCompletion7 = true;
                            context$3$0.next = 6;
                            break;

                        case 17:
                            context$3$0.next = 23;
                            break;

                        case 19:
                            context$3$0.prev = 19;
                            context$3$0.t0 = context$3$0["catch"](4);
                            _didIteratorError7 = true;
                            _iteratorError7 = context$3$0.t0;

                        case 23:
                            context$3$0.prev = 23;
                            context$3$0.prev = 24;

                            if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
                                _iterator7["return"]();
                            }

                        case 26:
                            context$3$0.prev = 26;

                            if (!_didIteratorError7) {
                                context$3$0.next = 29;
                                break;
                            }

                            throw _iteratorError7;

                        case 29:
                            return context$3$0.finish(26);

                        case 30:
                            return context$3$0.finish(23);

                        case 31:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[4, 19, 23, 31], [24,, 26, 30]]);
            }));
        }
    }, {
        key: "skipWhile",
        value: function skipWhile(predicate) {
            var iterable = this.iterable;
            return Functified.fromGenerator(_regeneratorRuntime.mark(function callee$2$0() {
                var skip, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, value;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            skip = true;
                            _iteratorNormalCompletion8 = true;
                            _didIteratorError8 = false;
                            _iteratorError8 = undefined;
                            context$3$0.prev = 4;
                            _iterator8 = _getIterator(iterable);

                        case 6:
                            if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
                                context$3$0.next = 15;
                                break;
                            }

                            value = _step8.value;

                            if (!predicate(value)) {
                                skip = false;
                            }

                            if (skip) {
                                context$3$0.next = 12;
                                break;
                            }

                            context$3$0.next = 12;
                            return value;

                        case 12:
                            _iteratorNormalCompletion8 = true;
                            context$3$0.next = 6;
                            break;

                        case 15:
                            context$3$0.next = 21;
                            break;

                        case 17:
                            context$3$0.prev = 17;
                            context$3$0.t0 = context$3$0["catch"](4);
                            _didIteratorError8 = true;
                            _iteratorError8 = context$3$0.t0;

                        case 21:
                            context$3$0.prev = 21;
                            context$3$0.prev = 22;

                            if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
                                _iterator8["return"]();
                            }

                        case 24:
                            context$3$0.prev = 24;

                            if (!_didIteratorError8) {
                                context$3$0.next = 27;
                                break;
                            }

                            throw _iteratorError8;

                        case 27:
                            return context$3$0.finish(24);

                        case 28:
                            return context$3$0.finish(21);

                        case 29:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[4, 17, 21, 29], [22,, 24, 28]]);
            }));
        }
    }, {
        key: "take",
        value: function take(n) {
            // using an explicit iterator supports pausable iteratables
            var iterator = _getIterator(this.iterable);
            var self = this;
            return Functified.fromGenerator(_regeneratorRuntime.mark(function callee$2$0() {
                var i, result;
                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            i = 0;

                            if (!(self.hasOwnProperty("startValue") && self.isPausable)) {
                                context$3$0.next = 5;
                                break;
                            }

                            context$3$0.next = 4;
                            return self.startValue;

                        case 4:
                            i++;

                        case 5:
                            if (!(i < n)) {
                                context$3$0.next = 16;
                                break;
                            }

                            result = iterator.next();

                            if (!result.done) {
                                context$3$0.next = 11;
                                break;
                            }

                            return context$3$0.abrupt("break", 16);

                        case 11:
                            context$3$0.next = 13;
                            return result.value;

                        case 13:
                            i++;

                        case 14:
                            context$3$0.next = 5;
                            break;

                        case 16:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this);
            }));
        }
    }, {
        key: "takeUntil",
        value: function takeUntil(predicate) {
            var iterator = _getIterator(this.iterable);
            var self = this;
            return Functified.fromGenerator(_regeneratorRuntime.mark(function callee$2$0() {
                var result;
                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            if (!(self.hasOwnProperty("startValue") && self.isPausable)) {
                                context$3$0.next = 3;
                                break;
                            }

                            context$3$0.next = 3;
                            return self.startValue;

                        case 3:
                            if (!true) {
                                context$3$0.next = 18;
                                break;
                            }

                            result = iterator.next();

                            if (!result.done) {
                                context$3$0.next = 9;
                                break;
                            }

                            return context$3$0.abrupt("break", 18);

                        case 9:
                            if (!predicate(result.value)) {
                                context$3$0.next = 14;
                                break;
                            }

                            // save the value so we can yield if takeUntil is called again
                            self.startValue = result.value;
                            return context$3$0.abrupt("break", 18);

                        case 14:
                            context$3$0.next = 16;
                            return result.value;

                        case 16:
                            context$3$0.next = 3;
                            break;

                        case 18:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this);
            }));
        }
    }, {
        key: "zip",
        value: function zip() {
            return Functified.zip(this.iterable);
        }
    }, {
        key: "every",

        // reducing functions
        value: function every(callback) {
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
                for (var _iterator9 = _getIterator(this.iterable), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                    var value = _step9.value;

                    if (!callback(value)) {
                        return false;
                    }
                }
            } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
                        _iterator9["return"]();
                    }
                } finally {
                    if (_didIteratorError9) {
                        throw _iteratorError9;
                    }
                }
            }

            return true;
        }
    }, {
        key: "reduce",
        value: function reduce(callback, initialValue) {
            var accum = initialValue;
            var iterator = _getIterator(this.iterable);

            if (accum === undefined) {
                var result = iterator.next();
                if (result.done) {
                    throw "not enough values to reduce";
                } else {
                    accum = result.value;
                }
            }

            while (true) {
                var result = iterator.next();
                if (result.done) {
                    break;
                } else {
                    accum = callback(accum, result.value);
                }
            }

            return accum;
        }
    }, {
        key: "some",
        value: function some(callback) {
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
                for (var _iterator10 = _getIterator(this.iterable), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                    var value = _step10.value;

                    if (callback(value)) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError10 = true;
                _iteratorError10 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion10 && _iterator10["return"]) {
                        _iterator10["return"]();
                    }
                } finally {
                    if (_didIteratorError10) {
                        throw _iteratorError10;
                    }
                }
            }

            return false;
        }
    }, {
        key: "toArray",
        value: function toArray() {
            var result = [];
            var _iteratorNormalCompletion11 = true;
            var _didIteratorError11 = false;
            var _iteratorError11 = undefined;

            try {
                for (var _iterator11 = _getIterator(this.iterable), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                    var value = _step11.value;

                    result.push(value);
                }
            } catch (err) {
                _didIteratorError11 = true;
                _iteratorError11 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion11 && _iterator11["return"]) {
                        _iterator11["return"]();
                    }
                } finally {
                    if (_didIteratorError11) {
                        throw _iteratorError11;
                    }
                }
            }

            return result;
        }
    }, {
        key: "toPausable",
        value: function toPausable() {
            var iterator = _getIterator(this.iterable);
            var functified = Functified.fromGenerator(_regeneratorRuntime.mark(function callee$2$0() {
                var result;
                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            if (!true) {
                                context$3$0.next = 10;
                                break;
                            }

                            result = iterator.next();

                            if (!result.done) {
                                context$3$0.next = 6;
                                break;
                            }

                            return context$3$0.abrupt("break", 10);

                        case 6:
                            context$3$0.next = 8;
                            return result.value;

                        case 8:
                            context$3$0.next = 0;
                            break;

                        case 10:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this);
            }));
            functified.isPausable = true;
            return functified;
        }
    }, {
        key: "toString",
        value: function toString() {
            var i = 0;
            var result = "[";
            result += this.reduce(function (str, n) {
                return str + (i++ > 0 ? ", " + n : "" + n);
            }, "");
            result += "]";
            return result;
        }
    }], [{
        key: "fromGenerator",

        // static methods
        value: function fromGenerator(generator) {
            return functify(_defineProperty({}, _Symbol$iterator, generator));
        }
    }, {
        key: "range",
        value: function range(start, stop) {
            var step = arguments[2] === undefined ? 1 : arguments[2];

            if (arguments.length === 1) {
                stop = start;
                start = 0;
            }
            return Functified.fromGenerator(_regeneratorRuntime.mark(function callee$2$0() {
                var i;
                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            i = start;

                            if (!(step > 0)) {
                                context$3$0.next = 10;
                                break;
                            }

                        case 2:
                            if (!(i < stop)) {
                                context$3$0.next = 8;
                                break;
                            }

                            context$3$0.next = 5;
                            return i;

                        case 5:
                            i += step;
                            context$3$0.next = 2;
                            break;

                        case 8:
                            context$3$0.next = 20;
                            break;

                        case 10:
                            if (!(step < 0)) {
                                context$3$0.next = 19;
                                break;
                            }

                        case 11:
                            if (!(i > stop)) {
                                context$3$0.next = 17;
                                break;
                            }

                            context$3$0.next = 14;
                            return i;

                        case 14:
                            i += step;
                            context$3$0.next = 11;
                            break;

                        case 17:
                            context$3$0.next = 20;
                            break;

                        case 19:
                            throw "step should not equal 0";

                        case 20:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this);
            }));
        }
    }, {
        key: "zip",
        value: function zip(iterables) {
            return Functified.fromGenerator(_regeneratorRuntime.mark(function callee$2$0() {
                var iterators, vector, _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, iterator, result;

                return _regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                    while (1) switch (context$3$0.prev = context$3$0.next) {
                        case 0:
                            iterators = iterables.map(function (iterable) {
                                if (iterable[_Symbol$iterator]) {
                                    return _getIterator(iterable);
                                } else {
                                    throw "can't zip a non-iterable";
                                }
                            });

                        case 1:
                            if (!true) {
                                context$3$0.next = 37;
                                break;
                            }

                            vector = [];
                            _iteratorNormalCompletion12 = true;
                            _didIteratorError12 = false;
                            _iteratorError12 = undefined;
                            context$3$0.prev = 6;
                            _iterator12 = _getIterator(iterators);

                        case 8:
                            if (_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done) {
                                context$3$0.next = 19;
                                break;
                            }

                            iterator = _step12.value;
                            result = iterator.next();

                            if (!result.done) {
                                context$3$0.next = 15;
                                break;
                            }

                            return context$3$0.abrupt("return");

                        case 15:
                            vector.push(result.value);

                        case 16:
                            _iteratorNormalCompletion12 = true;
                            context$3$0.next = 8;
                            break;

                        case 19:
                            context$3$0.next = 25;
                            break;

                        case 21:
                            context$3$0.prev = 21;
                            context$3$0.t0 = context$3$0["catch"](6);
                            _didIteratorError12 = true;
                            _iteratorError12 = context$3$0.t0;

                        case 25:
                            context$3$0.prev = 25;
                            context$3$0.prev = 26;

                            if (!_iteratorNormalCompletion12 && _iterator12["return"]) {
                                _iterator12["return"]();
                            }

                        case 28:
                            context$3$0.prev = 28;

                            if (!_didIteratorError12) {
                                context$3$0.next = 31;
                                break;
                            }

                            throw _iteratorError12;

                        case 31:
                            return context$3$0.finish(28);

                        case 32:
                            return context$3$0.finish(25);

                        case 33:
                            context$3$0.next = 35;
                            return vector;

                        case 35:
                            context$3$0.next = 1;
                            break;

                        case 37:
                        case "end":
                            return context$3$0.stop();
                    }
                }, callee$2$0, this, [[6, 21, 25, 33], [26,, 28, 32]]);
            }));
        }
    }, {
        key: "keys",
        value: function keys(obj) {
            return functify(_Object$keys(obj));
        }
    }, {
        key: "values",
        value: function values(obj) {
            return functify(_Object$keys(obj).map(function (key) {
                return obj[key];
            }));
        }
    }, {
        key: "entries",
        value: function entries(obj) {
            return functify(_Object$keys(obj)).map(function (key) {
                return [key, obj[key]];
            });
        }
    }]);

    return Functified;
})();

function functify(iterable) {
    return new Functified(iterable);
}

;

functify.fromGenerator = Functified.fromGenerator;
functify.range = Functified.range;
functify.zip = Functified.zip;
functify.keys = Functified.keys;
functify.values = Functified.values;
functify.entries = Functified.entries;
module.exports = exports["default"];
// finished
