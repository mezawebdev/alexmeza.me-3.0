interface ILoadingScreen {
    //What happens when loading starts
    displayLoadingUI: () => void;
    //What happens when loading stops
    hideLoadingUI: () => void;
    //default loader support. Optional!
    loadingUIBackgroundColor: string;
    loadingUIText: string;
}

export default class CustomLoadingScreen implements ILoadingScreen {
    //optional, but needed due to interface definitions
    public loadingUIBackgroundColor: string;

    constructor(public loadingUIText: string) {

    }

    public displayLoadingUI(): void {
        alert(this.loadingUIText);
    }

    public hideLoadingUI(): void {
        alert("Loaded!");
    }
}