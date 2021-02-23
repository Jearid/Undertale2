/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ErrorMessagesAndAys extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("NDOLE", "./ErrorMessagesAndAys/costumes/NDOLE.svg", {
        x: 129.99999999999994,
        y: 77
      }),
      new Costume("AYS", "./ErrorMessagesAndAys/costumes/AYS.svg", {
        x: 129.49999999999994,
        y: 77
      })
    ];

    this.sounds = [new Sound("pop", "./ErrorMessagesAndAys/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Load_Error" },
        this.whenIReceiveLoadError
      ),
      new Trigger(Trigger.BROADCAST, { name: "AYS" }, this.whenIReceiveAys)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 28);
    this.visible = false;
  }

  *whenthisspriteclicked() {
    if (this.costumeNumber == 1) {
      this.visible = false;
    }
  }

  *whenIReceiveLoadError() {
    this.costume = "NDOLE";
    this.visible = true;
  }

  *whenIReceiveAys() {
    this.costume = "AYS";
    this.visible = true;
  }
}
