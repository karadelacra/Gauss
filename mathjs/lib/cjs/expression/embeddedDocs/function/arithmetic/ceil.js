"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ceilDocs = void 0;
var ceilDocs = exports.ceilDocs = {
  name: 'ceil',
  category: 'Arithmetic',
  syntax: ['ceil(x)'],
  description: 'Round a value towards plus infinity. If x is complex, both real and imaginary part are rounded towards plus infinity.',
  examples: ['ceil(3.2)', 'ceil(3.8)', 'ceil(-4.2)'],
  seealso: ['floor', 'fix', 'round']
};