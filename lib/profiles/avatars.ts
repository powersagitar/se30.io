import { GitHubProfile } from './types';

// https://stackoverflow.com/a/36380674/20143641
export function getAvatarFromGitHub(
  profile: GitHubProfile,
  size?: number
): URL {
  if (size) {
    return new URL(profile + `.png?size=${size}`);
  } else {
    return new URL(profile + '.png');
  }
}
