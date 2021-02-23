/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Main", "./Stage/costumes/Main.svg", { x: 239.8917, y: 180 }),
      new Costume("BlackBackground", "./Stage/costumes/BlackBackground.svg", {
        x: 239.89170000000001,
        y: 180
      })
    ];

    this.sounds = [];

    this.triggers = [];

    this.vars.gameSaveData = "0000000000 000000 000000 000000";
    this.vars.playerState = "Right";
    this.vars.running = 1;
    this.vars.playerIow = "Walking";
    this.vars.temporaryGameSaveData = "0000000000 000000 000000 000001";
    this.vars.area = 0;
    this.vars.movable = 1;
  }
}
