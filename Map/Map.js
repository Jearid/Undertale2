/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Map extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("00", "./Map/costumes/00.png", { x: 340, y: 120 }),
      new Costume("01", "./Map/costumes/01.png", { x: 480, y: 270 }),
      new Costume("02", "./Map/costumes/02.png", { x: 259, y: 194 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Running" },
        this.whenIReceiveRunning
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Dream_End" },
        this.whenIReceiveDreamEnd
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Background" },
        this.whenIReceiveBackground
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRunning() {
    if (
      "" +
        String(this.stage.vars.temporaryGameSaveData)[30 - 1] +
        String(this.stage.vars.temporaryGameSaveData)[31 - 1] ==
      0
    ) {
      this.visible = true;
      this.costume = 0;
    } else {
      if (
        "" +
          String(this.stage.vars.temporaryGameSaveData)[30 - 1] +
          String(this.stage.vars.temporaryGameSaveData)[31 - 1] ==
        1
      ) {
        this.visible = true;
        this.costume = 1;
      } else {
        null;
      }
    }
  }

  *whenIReceiveDreamEnd() {
    this.visible = false;
  }

  *whenIReceiveBackground() {
    if (
      "" +
        String(this.stage.vars.temporaryGameSaveData)[30 - 1] +
        String(this.stage.vars.temporaryGameSaveData)[31 - 1] ==
      0
    ) {
      this.visible = true;
      this.costume = 0;
    } else {
      if (
        "" +
          String(this.stage.vars.temporaryGameSaveData)[30 - 1] +
          String(this.stage.vars.temporaryGameSaveData)[31 - 1] ==
        1
      ) {
        this.visible = true;
        this.costume = 1;
      } else {
        null;
      }
    }
  }
}
