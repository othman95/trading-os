import { makeAutoObservable } from 'mobx';

class UiStore {
    isMenuOpen = false;
    isSearchOpen = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    toggleSearch(show) {
        this.isSearchOpen = show;
    }

    constructor() {
        makeAutoObservable(this);
    }
}

export const uiStore = new UiStore();
