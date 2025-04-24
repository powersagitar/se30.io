'use client';

import { profiles } from '@/data/profiles';
import { getAvatarFromGitHub } from '@/lib/profiles/avatars';
import { getRandomInt } from '@/lib/utils';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

export default function ProfileCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
        startIndex: getRandomInt(profiles.length),
      }}
      plugins={[
        AutoScroll({ stopOnMouseEnter: true, stopOnInteraction: false }),
      ]}
    >
      <CarouselContent>
        {profiles.map((profile, idx) => (
          <CarouselItem key={'profile-carousel-' + idx} className="basis-1/3">
            <Card className="flex h-full flex-row items-center p-6">
              <Avatar>
                <AvatarImage
                  src={
                    profile.github
                      ? getAvatarFromGitHub(profile.github).toString()
                      : ''
                  }
                  alt={`Profile picture of ${profile.firstName} ${profile.lastName}.`}
                />
                <AvatarFallback className="font-medium uppercase">
                  {profile.firstName.charAt(0)}
                  {profile.lastName.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <div>
                <h3 className="text-accent-foreground font-semibold uppercase">
                  {profile.firstName} {profile.lastName}
                </h3>

                {profile.bio && (
                  <p>
                    <i>{profile.bio}</i>
                  </p>
                )}
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
