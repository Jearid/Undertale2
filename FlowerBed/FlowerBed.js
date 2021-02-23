/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class FlowerBed extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1475115227", "./FlowerBed/costumes/1475115227.png", {
        x: 320,
        y: 25
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "New_Game" },
        this.whenIReceiveNewGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Showmenu" },
        this.whenIReceiveShowmenu
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "New_Game" },
        this.whenIReceiveNewGame2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(13, -105);
    this.visible = false;
  }

  *whenIReceiveNewGame() {
    this.effects.ghost = 0;
    this.visible = true;
    for (let i = 0; i < 25; i++) {
      yield* this.wait(0.05);
      this.effects.ghost += 4;
      yield;
    }
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

  *whenIReceiveNewGame2() {
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
