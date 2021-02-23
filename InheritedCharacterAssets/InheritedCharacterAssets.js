/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class InheritedCharacterAssets extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Charcter assets",
        "./InheritedCharacterAssets/costumes/Charcter assets.png",
        { x: 401, y: 138.5 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
