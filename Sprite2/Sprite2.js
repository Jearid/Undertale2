/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 60,
        y: 44
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Dream_End" },
        this.whenIReceiveDreamEnd
      )
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (
        "" +
          String(this.stage.vars.temporaryGameSaveData)[30 - 1] +
          String(this.stage.vars.temporaryGameSaveData)[31 - 1] ==
        0
      ) {
        this.visible = true;
        this.effects.ghost = 100;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveDreamEnd() {
    this.stage.vars.temporaryGameSaveData = "0000000000 000000 000000 000001";
  }
}
