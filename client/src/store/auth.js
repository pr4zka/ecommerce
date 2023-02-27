import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      token: "",
      profile: null,
      isAuth: false,
      tost: false,
       setToken: (token) => set((state) => ({ token, isAuth: true })),
       setProfile: (profile) => set((state) => ({ profile })),
       setTost: (tost) => set((state) => ({ tost })),
       logout: () =>  set(state => ({
          token: "",
          profile: null,
          isAuth: false,
       }))
    }),
    {
      name: "auth",
    }
  )
);
