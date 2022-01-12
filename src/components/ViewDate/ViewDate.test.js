
test('year must be greater than 2019', () => {
   const year = new Date().getFullYear();

    expect(year).toBeGreaterThanOrEqual(2020);
  });


  
  test('year must be defined', () => {
   const year = new Date().getFullYear();

    expect(year).toBeDefined();
  });