import { Action } from "@reduxjs/toolkit"

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

export class ImageRequestBody {
    file: File
    text: string
    constructor(text:string, file:File) {
        this.file = file
        this.text = text
    }
}

export interface ActionWithPayLoad extends Action {
    type: string;
    payload?: string | Object;
  }