export interface Option {
    val: "idea" | "char";
    display: string;
  }

export class OptionClass implements Option {
    val: "idea" | "char"
    display: string
    constructor(val:"idea" | "char", display: string) {
        this.val = val
        this.display = display
    }
}