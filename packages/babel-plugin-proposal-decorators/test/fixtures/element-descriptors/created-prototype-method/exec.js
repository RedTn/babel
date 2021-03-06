function pushElement(e) {
  return function (c) { c.elements.push(e); return c };
}

function method() {}

@pushElement({
  kind: "method",
  placement: "prototype",
  key: "foo",
  descriptor: {
    enumerable: true,
    configurable: true,
    writable: true,
    value: method,
  }
})
class A {}

expect(A).not.toHaveProperty("foo");

expect(Object.getOwnPropertyDescriptor(A.prototype, "foo")).toEqual({
  enumerable: true,
  configurable: true,
  writable: true,
  value: method,
});
