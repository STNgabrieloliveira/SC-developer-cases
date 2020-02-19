const problema2 = require('../src/problema2');

test('S = {[()]}', () => {
    expect(problema2.solution('{[()]}')).toBe(true);
});
