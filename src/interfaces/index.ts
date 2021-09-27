import { Action } from "@reduxjs/toolkit";

//--------------------------USER
export interface UserCredentials {
  email: string;
  password: string;
}

export interface NewUserCred {
    username?: string
    email?: string
    password?: string
    pronouns?: string
}

export class NewUserClass implements NewUserCred {
    username?: string
    email?: string
    password?: string
    pronouns?: string
    constructor(username: string, email: string, password: string, pronouns: string) {
        this.username = username
        this.email = email
        this.password = password
        this.pronouns = pronouns
    }
}

//---------------------------------SELECT
export interface Option {
    val: string;
    display: string;
  }
}

//--------------------------SELECT
export interface Option {
  val: string;
  display: string;
}

export class OptionClass implements Option {
    val: string
    display: string
    constructor(val:string, display: string) {
        this.val = val
        this.display = display
    }
}


//---------------------------------API
export class ImageRequestBody {
  file: File;
  text: string;
  constructor(text: string, file: File) {
    this.file = file;
    this.text = text;
  }
}


//---------------------------------REDUX
export interface ActionWithPayLoad extends Action {
  type: string;
  payload?: string | Object;
}
