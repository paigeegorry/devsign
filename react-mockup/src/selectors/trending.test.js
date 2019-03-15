import { getQuotes } from './trending';

describe('trending selector', () => {
  it('can get a quote from state', () => {
    const state = {
      trending: {
        quotes: [
          {
            'quote': 'Ah, be creative. Instead of making sandwhiches with bread, use Pop-Tarts. Instead of chewing gum, chew bacon.',
            'character': 'Dr. Nick',
            'image': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084',
            'characterDirection': 'Right'
          },
          {
            'quote': 'My eyes! The goggles do nothing!',
            'character': 'Rainier Wolfcastle',
            'image': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRainierWolfcastle.png?1497567511035',
            'characterDirection': 'Right'
          }
        ]
      }
    };

    const quote = getQuotes(state);
    expect(quote).toEqual([
      {
        'quote': 'Ah, be creative. Instead of making sandwhiches with bread, use Pop-Tarts. Instead of chewing gum, chew bacon.',
        'character': 'Dr. Nick',
        'image': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084',
        'characterDirection': 'Right'
      },
      {
        'quote': 'My eyes! The goggles do nothing!',
        'character': 'Rainier Wolfcastle',
        'image': 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRainierWolfcastle.png?1497567511035',
        'characterDirection': 'Right'
      }
    ]);
  });
});
