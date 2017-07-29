
export class AppColorsService {
  foregroundPrimary: string;
  foregroundComplement: string;
  backgroundPrimary: string;
  backgroundComplement: string;
  accents: string;

  constructor() {
    this.foregroundPrimary =    "#FC7753";
    this.foregroundComplement = "#66D7D1";
    this.backgroundPrimary =    "#403D58";
    this.backgroundComplement = "#F2EFEA";
    this.accents =              "#DBD56E";
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
