/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class UndertaleLogo extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "maxresdefault (4)",
        "./UndertaleLogo/costumes/maxresdefault (4).jpg",
        { x: 480, y: 270 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Undertale2Logo" },
        this.whenIReceiveUndertale2logo
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "New_Game" },
        this.whenIReceiveNewGame
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 150;
    this.goto(5, 0);
    this.visible = false;
  }

  *whenIReceiveUndertale2logo() {
    this.visible = true;
    yield* this.wait(1);
    for (let i = 0; i < 50; i++) {
      yield* this.wait(0.000001);
      this.size += -2;
      yield;
    }
    yield* this.wait(0.5);
    this.broadcast("Showmenu");
    for (let i = 0; i < 25; i++) {
      yield* this.wait(0.05);
      this.y += 2;
      yield;
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
