// authReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Session} from '@supabase/supabase-js';


export interface AuthState {
  user: Session | null;
}


const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Session>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
