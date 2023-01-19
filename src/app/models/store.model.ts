import { Game } from './game.model';

export interface Store {
    id:               number;
    name:             string;
    description:      string;
    domain:           string;
    slug:             string;
    games_count:      number;
    image_background: string;
    games:            Game[];
}
