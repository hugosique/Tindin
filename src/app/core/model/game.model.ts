export interface GameResponse {
    games: Game[]
    game: Game[]
}

export interface GameStudio {
    name: string,
    locationCity: string,
    locationCountry: string,
    page: number,
    perPage: number
}
export interface Game {
    _id: string, /*Attr privado (_) Não alterável*/
    title: string,
    description: string,
    resume: string,
    photos: {
        name: string,
        url: string
    },
    videos: {
        type: string[],
        url: string
    },
    rating: number,
    mediumPrice: number,
    studio: GameStudio[],
    totalVotes: number,
    releaseYear: number,
    highlight: boolean,
    genres: string[],
    platforms: string[],
    tags: string[],
    createdAt: Date,
    updatedAt: Date
}