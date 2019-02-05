describe('fizzBuzz', function(){
  var fizzbuzz;
  beforeEach(function() {
    fizzbuzz = new fizzBuzz();
  });
  
  describe('knows when a number is', function() {
    
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);  
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);  
    });
    
    it('divisible by 15', function() {
    expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });  
    
  describe('knows when a numberis NOT', function() {

      it('divisible by 3', function() {
        expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
      });

      it('divisible by 5', function() {
        expect(fizzbuzz.isDivisibleByFive(3)).toBe(false);
      });

      it('divisible by 15', function() {
        expect(fizzbuzz.isDivisibleByFifteen(14)).toBe(false);
      });
    });
  });
