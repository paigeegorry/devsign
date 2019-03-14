import { getHums } from './hums';

describe('hums selector', () => {
  it('can get a list of hums', () => {
    const state = {
      hums: {
        hums: [
          { id: 1234, handle: 'yolo', hum: 'this is my first hum', img: '../assets/user-image.png' },
          { id: 1235, handle: 'yol0', hum: 'this is my second hum', img: '../assets/user-image.png' },
          { id: 1236, handle: 'y0lo', hum: 'this is my third hum', img: '../assets/user-image.png' },
          { id: 1237, handle: 'y0l0', hum: 'this is my fourth hum', img: '../assets/user-image.png' }
        ]
      }
    };

    const hums = getHums(state);
    expect(hums).toEqual([
      { id: 1234, handle: 'yolo', hum: 'this is my first hum', img: '../assets/user-image.png' },
      { id: 1235, handle: 'yol0', hum: 'this is my second hum', img: '../assets/user-image.png' },
      { id: 1236, handle: 'y0lo', hum: 'this is my third hum', img: '../assets/user-image.png' },
      { id: 1237, handle: 'y0l0', hum: 'this is my fourth hum', img: '../assets/user-image.png' }
    ]);
  });
});
