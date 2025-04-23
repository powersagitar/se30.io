import { Profile } from '@/lib/profiles/types';

export const profiles: Profile[] = [
  {
    firstName: 'Mohan',
    lastName: 'Dong',
    bio: 'Design. Develop. Deliver.',
    email: 'contact@powerium.io',
    portfolio: {
      displayName: 'powerium.io',
      href: new URL('https://www.powerium.io'),
    },
    github: 'https://github.com/powersagitar',
    linkedin: 'https://www.linkedin.com/in/powersagitar',
  },
  {
    firstName: 'a',
    lastName: 'b',
    bio: 'a long long long long long long long long long long long bio',
  },
  {
    firstName: 'b',
    lastName: 'c',
  },
  {
    firstName: 'c',
    lastName: 'd',
  },
  { firstName: 'd', lastName: 'e' },
  { firstName: 'e', lastName: 'f' },
  { firstName: 'f', lastName: 'g' },
];
