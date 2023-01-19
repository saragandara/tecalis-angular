export interface Game {
  id:                           number;
  slug:                         string;
  name:                         string;
  description:                  string;
  released:                     Date;
  tba:                          boolean;
  background_image:             string;
  background_image_additional:  string;
  website:                      string;
  rating:                       number;
  rating_top:                   number;
  rating_percentaje:            number;
  ratings:                      Rating[];
  ratings_count:                number;
  reviews_text_count:           number;
  added:                        number;
  metacritic:                   number;
  playtime:                     number;
  suggestions_count:            number;
  updated:                      Date;
  user_game:                    null;
  reviews_count:                number;
  genres:                       Genre[];
  tags:                         Genre[];
  esrb_rating:                  EsrbRating;
  short_screenshots:            ShortScreenshot[];
  platforms:                    PlatformElement[];
}

export interface Rating {
  id:      number;
  title:   Title;
  count:   number;
  percent: number;
}

export enum Title {
  Exceptional = "exceptional",
  Meh = "meh",
  Recommended = "recommended",
  Skip = "skip",
}

export interface Genre {
  id:               number;
  name:             string;
  slug:             string;
  games_count:      number;
  image_background: string;
}

export interface EsrbRating {
  id:   number;
  name: string;
  slug: string;
}

export interface ShortScreenshot {
  id:    number;
  image: string;
}

export interface PlatformElement {
  platform:     PlatformPlatform;
  released_at:  Date;
  requirements: Requirements;
}

export interface PlatformPlatform {
  id:               number;
  name:             string;
  slug:             string;
  image:            null;
  year_end:         null;
  year_start:       number | null;
  games_count:      number;
  image_background: string;
}

export interface Requirements {
  minimum?:     string;
  recommended?: string;
}
