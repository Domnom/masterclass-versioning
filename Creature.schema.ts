/**
 * @import Enums
 */
import { LOCATIONS } from './location.enum';

class Creature
{
    name: string;
    location: LOCATIONS;

    constructor()
    {
        this.location = LOCATIONS.HOME;
    }
}