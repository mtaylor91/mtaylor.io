
export class AppColorsService {
  backgroundPrimary: string;
  backgroundComplement: string;
  foregroundPrimary: string;
  foregroundComplement: string;
  foregroundAccent: string;
  foregroundPlain: string;

  constructor() {
    this.backgroundPrimary =    "#040F16";
    this.backgroundComplement = "#FBFBFF";
    this.foregroundPrimary =    "#01BAEF";
    this.foregroundComplement = "#0B4F6C";
    this.foregroundAccent =     "#F46036";
    this.foregroundPlain =      "#FFFFFF";
  }

  getColor(selector, primary) {
    if (selector == "foreground") {
      if (primary) {
        return this.foregroundPrimary;
      } else {
        return this.foregroundComplement;
      }
    } else if (selector == "background") {
      if (primary) {
        return this.backgroundPrimary;
      } else {
        return this.backgroundComplement;
      }
    }
  }
}
