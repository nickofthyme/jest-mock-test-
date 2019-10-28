import * as testModule from './hello';

describe('test hello', function () {
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should NOT mock message in foo', function () {
    const actual = testModule.foo();

    expect(actual).toBe('Hello world');
  });

  it('should mock message in foo', function () {
    jest.spyOn(testModule, 'message').mockReturnValue('my message');
    const actual = testModule.foo();

    expect(actual).toBe('my message');
    expect(testModule.message).toHaveBeenCalledTimes(1);
  });
});
