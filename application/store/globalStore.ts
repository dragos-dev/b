import {makeAutoObservable} from "mobx";

export class GlobalStore {
    light: boolean = true

    constructor() {
        makeAutoObservable(this)
    }

    setLight(light: boolean) {
        localStorage.setItem('light', light.toString())
        this.light = light
    }
}