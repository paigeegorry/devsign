import reducer from './trending';
import { FETCH_QUOTES } from '../actions/trending';

jest.mock('../services/simpsonsApi.js');

describe('simpsons reducer', () => {
  it('can fetch quotes from state', () => {
    const state = {
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
      ],
      loading: false
    };

    const reducerQuotes = reducer(state, {
      type: FETCH_QUOTES,
      payload: [
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
    });
    expect(reducerQuotes).toEqual({ loading: false,
      quotes: [{
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
      ] });
  });
});
