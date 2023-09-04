interface ILoadingScreen {
  displayLoadingUI: () => void;
  hideLoadingUI: () => void;
  loadingUIBackgroundColor: string;
  loadingUIText: string;
}

export default class CustomLoadingScreen implements ILoadingScreen {
  public loadingUIBackgroundColor: string;

  constructor(public loadingUIText: string) {}

  public displayLoadingUI(): void {
    alert(this.loadingUIText);
  }

  public hideLoadingUI(): void {
    alert('Loaded!');
  }
}
