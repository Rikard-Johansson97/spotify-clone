export type PlayerTypes = {
    connect: any
    disconnect: any
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
  }
  
  type SpotifyPlaylistContext = {
    timestamp: number;
    context: {
      uri: string;
      metadata: {
        name: string;
        uri: string;
        url: string;
        current_item: {
          name: string;
          uri: string;
          url: string;
          uid: string;
          content_type: string;
          artists: Array<{
            name: string;
            uri: string;
            url: string;
          }>;
          images: Array<{
            url: string;
            height: number;
            width: number;
            size: string;
          }>;
          estimated_duration: number;
          group: {
            name: string;
            uri: string;
            url: string;
          };
        };
        previous_items: any[];
        next_items: Array<{
          name: string;
          uri: string;
          url: string;
          uid: string;
          content_type: string;
          artists: Array<{
            name: string;
            uri: string;
            url: string;
          }>;
          images: Array<{
            url: string;
            height: number;
            width: number;
            size: string;
          }>;
          estimated_duration: number;
          group: {
            name: string;
            uri: string;
            url: string;
          };
        }>;
      };
    };
  };
  

  export type CurrentTrack = {
    id: string
    uri: string
    type: string
    uid: string
    linked_from: {
      uri: any
      id: any
    }
    media_type: string
    track_type: string
    name: string
    duration_ms: number
    artists: Array<{
      name: string
      uri: string
      url: string
    }>
    album: {
      name: string
      uri: string
      images: Array<{
        url: string
        height: number
        width: number
        size: string
      }>
    }
    is_playable: boolean
  }
  