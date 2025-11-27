import { create } from 'zustand';
import { WishlistEntry } from '../types/wishlist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';

interface WishlistState {
    wishlist: {[key: number]: WishlistEntry};
    addToWishlist: (id: number, title: string, poster_path: string, backdrop_path: string) => void;
    removeFromWishlist: (movieId: number) => void;
}


export const useWishlistStore = create<WishlistState>()(persist(
    (set) => ({
        wishlist: {},
        addToWishlist: (id: number, title: string, poster_path: string, backdrop_path: string) => {
            set(state => {
                const newWishlist = { ...state.wishlist };

                const entry = {
                    id,
                    title,
                    poster_path,
                    backdrop_path,
                } as WishlistEntry;
                newWishlist[id] = entry;

                return {
                    wishlist: newWishlist,
                };
            });
        },
        removeFromWishlist: (movieId: number) => {
            set(state => {
                const newWishlist = { ...state.wishlist };
                delete newWishlist[movieId];
                return {
                    wishlist: newWishlist,
                };
            });
        },
    }), {
    name: 'wishlist-store',
    storage: createJSONStorage(() => AsyncStorage),
}))
