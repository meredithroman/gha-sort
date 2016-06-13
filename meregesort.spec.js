describe('Merge Sort', function (){
  it('handles an empty array', function (){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('it handles an array of numbers', function(){
    expect( mergeSort( [32, 9, 57, 40, 95, 84, 33, 20, 92, 39, 83, 50, 90, 92, 93, 8] )).toEqual([8, 9, 20, 32, 33, 39, 40, 50, 57, 83, 84, 90, 92, 92, 93, 95])
  });

});