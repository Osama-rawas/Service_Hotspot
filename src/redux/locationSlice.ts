import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define a type for the slice state
export type CounterState = {
  republic: string;
  Governorate: string;
  district: string;
  city: string;
  error: string;
  loading: boolean;
};

// Define the initial state using that type
const initialState: CounterState = {
  republic: "",
  Governorate: "",
  district: "",
  city: "",
  error: "",
  loading: false,
};

// تغيير النوع إلى كائن يحتوي على `latitude` و`longitude`
export const setLocation = createAsyncThunk(
  "location/setLocation",
  async ({ latitude, longitude }: { latitude: number; longitude: number }) => {
    const response = await axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    );
    return response.data;
  }
);

export const locationSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    show: (state) => {
      console.log(state.Governorate);
      console.log(state.city);
      console.log(state.district);
      console.log(state.republic);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(setLocation.pending, (state) => {
        state.loading = true;
      })
      .addCase(setLocation.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        // تحديث الحالة بالقيم الجديدة
        console.log(action.payload);
        state.republic = action.payload.localityInfo.administrative[0].name;
        state.Governorate = action.payload.localityInfo.administrative[1].name;
        state.district = action.payload.localityInfo.administrative[2].name;
        state.city = action.payload.localityInfo.administrative[3].name;
      })
      .addCase(setLocation.rejected, (state) => {
        state.loading = false;
        state.error = "Error occurred while fetching location";
      });
  },
});

// لا حاجة لتعريف setLocation ضمن actions هنا لأننا نستخدم createAsyncThunk
export const { show } = locationSlice.actions;

export default locationSlice.reducer;
