export type Playlists = {
  playlist: {
    getPlaylist: any;
    status: {
      isLoading: boolean
      isError: any
    }
    albumList?: Array<{
      collaborative: boolean
      description: string
      external_urls: {
        spotify: string
      }
      href: string
      id: string
      images: Array<{
        height?: number
        url: string
        width?: number
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
      primary_color: any
      public: boolean
      snapshot_id: string
      tracks: {
        href: string
        total: number
      }
      type: string
      uri: string
    }>
  }
}
