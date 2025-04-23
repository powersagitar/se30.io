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
            <Card className="h-full w-full p-8">
              <div className="flex items-center justify-between">
                <Avatar>
                  <AvatarImage
                    src={
                      profile.github
                        ? getAvatarFromGitHub(profile.github).toString()
                        : ''
                    }
                  />
                  <AvatarFallback className="font-medium uppercase">
                    {profile.firstName.charAt(0)}
                    {profile.lastName.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <h3 className="text-accent-foreground font-semibold uppercase">
                  {profile.firstName} {profile.lastName}
                </h3>
              </div>

              {profile.bio && (
                <p>
                  <i>{profile.bio}</i>
                </p>
              )}
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
