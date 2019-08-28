test('devo conhecer as principais diretivas do JEST', () => {
    let num =  null;
    expect(num).toBe(null);
    num = 10;
    expect(num).not.toBe(null);
    expect(num).toBe(10);
    expect(num).toEqual(10);
    expect(num).toBeGreaterThan(9);
    expect(num).toBeLessThan(11);
});

test('Devo saber como trabalhar com objetos', () => {

});