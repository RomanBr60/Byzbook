import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPost } from '../../api'

export const fetchRouterData = createAsyncThunk('routes/fetchData', async () => {
    const response = await getPost ('/cnt');
    return response;
});

const routesSlice = createSlice({
  name: 'routes',
  initialState: { 
    api: [],
    status: '',
    error: undefined },
  reducers: {
    
    /*todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    }*/

  },
  extraReducers: builder => { 
    builder.addCase (fetchRouterData.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
    })
    
    builder.addCase (fetchRouterData.rejected, (state, action) => {
        state.status = 'error'; //`error: ${JSON.stringify(action, null, 2)}`;
        state.error = action.error;
    })
  
    builder.addCase (fetchRouterData.fulfilled, (state, action) => {
        return {
          status: 'ready',
          error: undefined,
          ...action.payload
        }
    })

    }
});

export default routesSlice.reducer;
