import { create } from 'zustand';
import { WishlistEntry } from '../types/wishlist';

interface WishlistState {
    wishlist: Map<number, WishlistEntry>;
    addToWishlist: (id: number, title: string, poster_path: string) => void;
    removeFromWishlist: (movieId: number) => void;
}


export const useWishlistStore = create<WishlistState>((set) => ({
    wishlist: new Map(),
    addToWishlist: (id: number, title: string, poster_path: string) => {
        set(state => {
            const newWishlistMap = new Map(state.wishlist);

            const entry = {
                id,
                title,
                poster_path,
            } as WishlistEntry;
            newWishlistMap.set(id, entry);

            return {
                wishlist: newWishlistMap,
            };
        });
    },
    removeFromWishlist: (movieId: number) => {
        set(state => {
            const newWishlistMap = new Map(state.wishlist);
            newWishlistMap.delete(movieId);
            return {
                wishlist: newWishlistMap,
            };
        });
    },
}));
