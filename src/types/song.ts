export type Songs = {
    collaborative: boolean
    description: string
    external_urls: {
      spotify: string
    }
    followers: {
      href: any
      total: number
    }
    href: string
    id: string
    images: Array<{
      height: any
      url: string
      width: any
    }>
    name: string
    owner: {
      display_name: string
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      type: string
      uri: string
    }
    primary_color: string
    public: boolean
    snapshot_id: string
    tracks: {
      href: string
      items: Array<{
        added_at: string
        added_by: {
          external_urls: {
            spotify: string
          }
          href: string
          id: string
          type: string
          uri: string
        }
        is_local: boolean
        primary_color: any
        track: {
          album: {
            album_type: string
            artists: Array<{
              external_urls: {
                spotify: string
              }
              href: string
              id: string
              name: string
              type: string
              uri: string
            }>
            available_markets: Array<string>
            external_urls: {
              spotify: string
            }
            href: string
            id: string
            images: Array<{
              height: number
              url: string
              width: number
            }>
            name: string
            release_date: string
            release_date_precision: string
            total_tracks: number
            type: string
            uri: string
          }
          artists: Array<{
            external_urls: {
              spotify: string
            }
            href: string
            id: string
            name: string
            type: string
            uri: string
          }>
          available_markets: Array<string>
          disc_number: number
          duration_ms: number
          episode: boolean
          explicit: boolean
          external_ids: {
            isrc: string
          }
          external_urls: {
            spotify: string
          }
          href: string
          id: string
          is_local: boolean
          name: string
          popularity: number
          preview_url?: string
          track: boolean
          track_number: number
          type: string
          uri: string
        }
        video_thumbnail: {
          url: any
        }
      }>
      limit: number
      next: any
      offset: number
      previous: any
      total: number
    }
    type: string
    uri: string
  }
  

export type Song = {
        album: {
          album_type: string
          artists: Array<{
            external_urls: {
              spotify: string
            }
            href: string
            id: string
            name: string
            type: string
            uri: string
          }>
          available_markets: Array<string>
          external_urls: {
            spotify: string
          }
          href: string
          id: string
          images: Array<{
            height: number
            url: string
            width: number
          }>
          name: string
          release_date: string
          release_date_precision: string
          total_tracks: number
          type: string
          uri: string
        }
        artists: Array<{
          external_urls: {
            spotify: string
          }
          href: string
          id: string
          name: string
          type: string
          uri: string
        }>
        available_markets: Array<string>
        disc_number: number
        duration_ms: number
        episode: boolean
        explicit: boolean
        external_ids: {
          isrc: string
        }
        external_urls: {
          spotify: string
        }
        href: string
        id: string
        is_local: boolean
        name: string
        popularity: number
        preview_url?: string
        track: boolean
        track_number: number
        type: string
        uri: string
}