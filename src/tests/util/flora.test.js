const flora = require('../../util/flora');

describe('flora', () => {
  it('converts number mojo to flora', () => {
    const result = flora.mojo_to_flora(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to flora', () => {
    const result = flora.mojo_to_flora('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to flora string', () => {
    const result = flora.mojo_to_flora_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to flora string', () => {
    const result = flora.mojo_to_flora_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number flora to mojo', () => {
    const result = flora.flora_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string flora to mojo', () => {
    const result = flora.flora_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = flora.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = flora.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = flora.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = flora.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = flora.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = flora.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
