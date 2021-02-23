/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Blackscreen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Blackscreen", "./Blackscreen/costumes/Blackscreen.svg", {
        x: 239.98885,
        y: 180
      }),
      new Costume("Whitescreen", "./Blackscreen/costumes/Whitescreen.svg", {
        x: 239.98885,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Blackscreen/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Blackscreen" },
        this.whenIReceiveBlackscreen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "New_Game" },
        this.whenIReceiveNewGame
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
    this.effects.ghost = 100;
  }

  *whenIReceiveBlackscreen() {
    this.costume = "Blackscreen";
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 50; i++) {
      yield* this.wait(0.05);
      this.effects.ghost += -2;
      yield;
    }
    yield* this.wait(5);
    this.broadcast("Undertale2Logo");
    this.visible = false;
    this.stage.costume = "BlackBackground";
  }

  *whenIReceiveNewGame() {
    this.costume = "Blackscreen";
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 50; i++) {
      yield* this.wait(0.05);
      this.effects.ghost += -2;
      yield;
    }
    yield* this.wait(5);
    this.visible = false;
    this.stage.costume = "BlackBackground";
  }

  *whenIReceiveDreamEnd() {
    this.costume = "Whitescreen";
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 50; i++) {
      yield* this.wait(0.05);
      this.effects.ghost += -2;
      yield;
    }
    yield* this.broadcastAndWait("Background");
    for (let i = 0; i < 50; i++) {
      yield* this.wait(0.05);
      this.effects.ghost += 2;
      yield;
    }
    this.visible = false;
  }
}
