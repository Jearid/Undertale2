/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class LoadGame extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Load_Game", "./LoadGame/costumes/Load_Game.svg", {
        x: 71.25,
        y: 41.75
      })
    ];

    this.sounds = [new Sound("pop", "./LoadGame/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Showmenu" },
        this.whenIReceiveShowmenu
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "New_Game" },
        this.whenIReceiveNewGame
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveShowmenu() {
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 25; i++) {
      yield* this.wait(0.05);
      this.effects.ghost += -4;
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.gameSaveData == "0000000000 000000 000000 000000") {
      this.broadcast("Load_Error");
    } else {
      null;
    }
  }

  *whenIReceiveNewGame() {
    this.effects.ghost = 0;
    this.visible = true;
    for (let i = 0; i < 25; i++) {
      yield* this.wait(0.05);
      this.effects.ghost += 4;
      yield;
    }
    this.visible = false;
  }
}
