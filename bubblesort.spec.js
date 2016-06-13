describe('Bubble Sort', function (){
  it('handles an empty array', function (){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('it handles an array of numbers', function(){
    expect( bubbleSort( [32, 9, 57, 40, 95, 84, 33, 20, 92, 39, 83, 50, 90, 92, 93, 8] )).toEqual([8, 9, 20, 32, 33, 39, 40, 50, 57, 83, 84, 90, 92, 92, 93, 95])
  });

/*  it('does the correct number of comparisons', function(){
    spyOn(window, 'bubbleSort').and.callThrough();
    bubbleSort([32, 9, 57, 40, 95, 84, 33, 20, 92, 39, 83, 50, 90, 92, 93, 8]);
    expect(bubbleSort.calls.count()).toEqual(120);
  });*/

  // it gives us an error if we pass it a string

  // check number of swaps -- <= 256

});