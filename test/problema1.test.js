const problema1 = require('../src/problema1');

test('[1, 1, 2, 4, 6, 5, 3]', () => {
    const { media, mediana } = problema1.solution([1, 1, 2, 4, 6, 5, 3]);
    expect(media).toBe(3.14);
    expect(mediana).toBe(3);
});
