export type OuterApiResponse = {
    amiibo: InnerApiResponse[]
}

export type InnerApiResponse = {
    amiiboSeries: string,
    character: string,
    gameSeries: string,
    head: string,
    image: string,
    name: string,
    release: {
        au: string,
        eu: string,
        jp: string,
        na: string
    },
    tail: string,
    type: string
}