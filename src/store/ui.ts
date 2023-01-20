class Ui {
	public isMenuOpen = false;
	public isSearchOpen = false;

	public toggleMenu() {
		this.isMenuOpen = !this.isMenuOpen;
	}

	public toggleSearch() {
		this.isSearchOpen = !this.isSearchOpen;
	}
}

export const ui = new Ui();
