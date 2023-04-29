class Square {

}

class Circle {

}

class Triangle {

}

describe('shapes', () => {
    it('should create a square object', () => {
      const shape = new Square();
      expect(shape).toBeInstanceOf(Square);
    });

    it( 'should create a circle object', () => {
        const shape = new Circle();
        expect(shape).toBeInstanceOf(Circle);
    });

    it ('should create a triangle object', () => {
        const shape = new Triangle();
        expect(shape).toBeInstanceOf(Triangle);
    });


  });


