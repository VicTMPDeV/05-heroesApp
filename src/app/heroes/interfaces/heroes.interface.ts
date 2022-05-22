export interface Hero {
    id?:              string; //Cuando lo traigo del servicio viene, pero al crear uno nuevo, de momento no lo tenemos
    default:          boolean;
    superhero:        string;
    publisher:        Publisher;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    alt_img?:         string; //Puede ser que no tengamos la imagen cuando creemos un heroe nuevo, y será una url
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}
