/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NewGame extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Load_Game", "./NewGame/costumes/Load_Game.svg", {
        x: 51.75000000000003,
        y: 19
      })
    ];

    this.sounds = [new Sound("pop", "./NewGame/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Showmenu" },
        this.whenIReceiveShowmenu
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
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
    if (!(this.stage.vars.gameSaveData == "0000000000 000000 000000 000000")) {
      this.broadcast("AYS");
    } else {
      this.broadcast("New_Game");
      this.effects.ghost = 0;
      this.visible = true;
      for (let i = 0; i < 25; i++) {
        yield* this.wait(0.05);
        this.effects.ghost += 4;
        yield;
      }
      this.visible = false;
      for (let i = 0; i < 25; i++) {
        yield* this.wait(0.05);
        this.effects.ghost += -4;
        yield;
      }
      this.stage.vars.running = 1;
      this.broadcast("Running");
      this.stage.vars.movable = 1;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.wait(0);
      yield;
    }
  }
}
