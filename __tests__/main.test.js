const { reverse } = require('../src/main')

test('reverse', () => {
    expect(reverse('hello')).toBe('olleh');
});