const { add, multiply } = require('./app');

test('Unit Test: Addition', () => {
    expect(add(2, 3)).toBe(5);
});

test('Integration Test: Multiple functions', () => {
    expect(add(multiply(2, 3), 4)).toBe(10);
});

test('System Test: Complete calculation', () => {
    const result = add(10, multiply(2, 5));
    expect(result).toBe(20);
});