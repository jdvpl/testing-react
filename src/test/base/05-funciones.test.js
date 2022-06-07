import { getUser } from "../../base/05-funciones";

describe('Get user functions', () => {
  test('should retunr an object', () => { 
    const userTest={
      uid:'123',
      username:'jdvpl'
    }
    const user=getUser();
    expect(user).toEqual(userTest);
  });
});
