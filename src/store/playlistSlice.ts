import { createAsyncThunk, createSlice, SliceCaseReducers } from '@reduxjs/toolkit'

const initialState = {
  status: {
    isLoading: false,
    isError: null as unknown
  },
  albumList: [] as unknown
}

const playListSlice = createSlice<typeof initialState, SliceCaseReducers<typeof initialState>>({
  name: 'playlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlaylist.fulfilled, (state, action) => {
        state.status.isLoading = false
        state.status.isError = null
        state.albumList = action.payload
      })
      .addCase(getPlaylist.pending, (state) => {
        state.status.isLoading = true
        state.status.isError = null
      })
      .addCase(getPlaylist.rejected, (state, action) => {
        state.status.isLoading = false
        state.status.isError = action.payload
      })
  }
})

export const getPlaylist = createAsyncThunk(
  "getPlaylist",
  async (spotifyApi : any, thunkAPI: any) => {
    try {
      const data = await spotifyApi.getUserPlaylists();
      return data.body.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export default playListSlice.reducer
