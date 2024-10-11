import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const userProfile = create(persist((set) => ({
    user: {
        id: "",
        fio: "",
    },
    setUser: (user) => set({ user }),
}),
    {
        name: 'my-store',
        getStorage: () => localStorage,
        serialize: (state) => JSON.stringify(state),
        deserialize: (serializedState) => JSON.parse(serializedState),
    }))
