// // import { configureStore } from "@reduxjs/toolkit";
// // import { persistStore, persistReducer } from "redux-persist";
// // import storage from "redux-persist/lib/storage";
// // import yourReducer from "./yourSlice"; // ✅ must exist

// // const persistConfig = {
// //   key: "root",
// //   storage,
// // };

// // const persistedReducer = persistReducer(persistConfig, yourReducer);

// // export const store = configureStore({
// //   reducer: {
// //     yourSlice: persistedReducer, // ✅ use a key
// //   },
// //   middleware: (getDefaultMiddleware) =>
// //     getDefaultMiddleware({ serializableCheck: false }),
// // });

// // export const persistor = persistStore(store);


// // store.js
// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import yourReducer from "./yourSlice"; // ✅ must have initialState

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, yourReducer);

// export const store = configureStore({
//   reducer: {
//     auth: persistedReducer, // 👈 renamed key to "auth" for clarity
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);



// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./authSlice"; // ✅ use authSlice instead of yourSlice

const persistConfig = {
  key: "auth",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer, // 👈 reducer key is "auth"
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
