/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MapCover extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./MapCover/costumes/costume1.svg", {
        x: 241.56328704236017,
        y: 137.72584749951073
      }),
      new Costume("costume2", "./MapCover/costumes/costume2.svg", {
        x: 226.5,
        y: 183.5
      }),
      new Costume("costume3", "./MapCover/costumes/costume3.svg", {
        x: 279.5,
        y: 201.5
      })
    ];

    this.sounds = [new Sound("pop", "./MapCover/sounds/pop.wav")];

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
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRunning() {
    while (true) {
      if (
        "" +
          String(this.stage.vars.temporaryGameSaveData)[30 - 1] +
          String(this.stage.vars.temporaryGameSaveData)[31 - 1] ==
        0
      ) {
        this.visible = true;
        this.costume = "costume2";
        this.effects.ghost = 0;
      } else {
        if (
          "" +
            String(this.stage.vars.temporaryGameSaveData)[30 - 1] +
            String(this.stage.vars.temporaryGameSaveData)[31 - 1] ==
          1
        ) {
          this.visible = true;
          this.costume = "costume3";
          this.effects.ghost = 100;
        } else {
          null;
        }
      }
      yield;
    }
  }

  *whenIReceiveDreamEnd() {
    this.visible = false;
  }
}
