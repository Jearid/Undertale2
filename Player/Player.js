/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Down_Idle", "./Player/costumes/Down_Idle.svg", {
        x: 50.66666666666666,
        y: 77.33333333333336
      }),
      new Costume("Right_Idle", "./Player/costumes/Right_Idle.svg", {
        x: 43.91669499999995,
        y: 74.91671499999994
      }),
      new Costume("Left_Idle", "./Player/costumes/Left_Idle.svg", {
        x: 43.916715161399964,
        y: 74.91670553769994
      }),
      new Costume("Up_Idle", "./Player/costumes/Up_Idle.svg", {
        x: 52.64583333333334,
        y: 80.35416666666669
      }),
      new Costume("Down_Walk1", "./Player/costumes/Down_Walk1.svg", {
        x: 51.54147499999999,
        y: 78.668735
      }),
      new Costume("Down_Walk2", "./Player/costumes/Down_Walk2.svg", {
        x: 52.02086499999996,
        y: 79.40026763157887
      }),
      new Costume("Up_Walk1", "./Player/costumes/Up_Walk1.svg", {
        x: 52.479134999999985,
        y: 80.09973236842104
      }),
      new Costume("Up_Walk2", "./Player/costumes/Up_Walk2.svg", {
        x: 52.479101339200014,
        y: 80.09971712282106
      }),
      new Costume("Right_Walk1", "./Player/costumes/Right_Walk1.svg", {
        x: 43.90178571428581,
        y: 72.30882352941191
      }),
      new Costume("Right_Walk2", "./Player/costumes/Right_Walk2.svg", {
        x: 43.90178571428581,
        y: 72.30882352941191
      }),
      new Costume("Left_Walk1", "./Player/costumes/Left_Walk1.svg", {
        x: 44.46428571428575,
        y: 73.23529411764713
      }),
      new Costume("Left_Walk2", "./Player/costumes/Left_Walk2.svg", {
        x: 44.46428571428575,
        y: 73.23529411764713
      })
    ];

    this.sounds = [new Sound("pop", "./Player/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "w" }, this.whenKeyWPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Running" },
        this.whenIReceiveRunning
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Running" },
        this.whenIReceiveRunning2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Background" },
        this.whenIReceiveBackground
      )
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.keyPressed("w") && this.stage.vars.running == 1) {
        this.stage.vars.playerState = "Up";
        this.stage.vars.playerIow = "Walking";
        while (!!(this.keyPressed("w") && this.stage.vars.running == 1)) {
          yield* this.wait(0.25);
          this.costume = "Up_Idle";
          yield* this.wait(0.25);
          this.costume = "Up_Walk1";
          yield* this.wait(0.25);
          this.costume = "Up_Idle";
          yield* this.wait(0.25);
          this.costume = "Up_Walk2";
          yield;
        }
      } else {
        if (this.keyPressed("a") && this.stage.vars.running == 1) {
          this.stage.vars.playerState = "Left";
          this.stage.vars.playerIow = "Walking";
          while (!!(this.keyPressed("a") && this.stage.vars.running == 1)) {
            yield* this.wait(0.25);
            this.costume = "Left_Idle";
            yield* this.wait(0.25);
            this.costume = "Left_Walk1";
            yield* this.wait(0.25);
            this.costume = "Left_Idle";
            yield* this.wait(0.25);
            this.costume = "Left_Walk2";
            yield;
          }
        } else {
          if (this.keyPressed("s") && this.stage.vars.running == 1) {
            this.stage.vars.playerState = "Down";
            this.stage.vars.playerIow = "Walking";
            while (!!(this.keyPressed("s") && this.stage.vars.running == 1)) {
              yield* this.wait(0.25);
              this.costume = "Down_Idle";
              yield* this.wait(0.25);
              this.costume = "Down_Walk1";
              yield* this.wait(0.25);
              this.costume = "Down_Idle";
              yield* this.wait(0.25);
              this.costume = "Down_Walk2";
              yield;
            }
          } else {
            if (this.keyPressed("d") && this.stage.vars.running == 1) {
              this.stage.vars.playerState = "Right";
              this.stage.vars.playerIow = "Walking";
              while (!!(this.keyPressed("d") && this.stage.vars.running == 1)) {
                yield* this.wait(0.25);
                this.costume = "Right_Idle";
                yield* this.wait(0.25);
                this.costume = "Right_Walk1";
                yield* this.wait(0.25);
                this.costume = "Right_Idle";
                yield* this.wait(0.25);
                this.costume = "Right_Walk2";
                yield;
              }
            }
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.stage.vars.running == 1) {
        if (
          !(
            this.keyPressed("w") ||
            this.keyPressed("a") ||
            this.keyPressed("s") ||
            this.keyPressed("d")
          )
        ) {
          if (this.stage.vars.playerState == "Up") {
            while (
              !(
                this.keyPressed("w") ||
                this.keyPressed("a") ||
                this.keyPressed("s") ||
                this.keyPressed("d")
              )
            ) {
              this.costume = "Up_Idle";
              yield;
            }
          } else {
            if (this.stage.vars.playerState == "Right") {
              while (
                !(
                  this.keyPressed("w") ||
                  this.keyPressed("a") ||
                  this.keyPressed("s") ||
                  this.keyPressed("d")
                )
              ) {
                this.costume = "Right_Idle";
                yield;
              }
            } else {
              if (this.stage.vars.playerState == "Down") {
                while (
                  !(
                    this.keyPressed("w") ||
                    this.keyPressed("a") ||
                    this.keyPressed("s") ||
                    this.keyPressed("d")
                  )
                ) {
                  this.costume = "Down_Idle";
                  yield;
                }
              } else {
                if (this.stage.vars.playerState == "Left") {
                  while (
                    !(
                      this.keyPressed("w") ||
                      this.keyPressed("a") ||
                      this.keyPressed("s") ||
                      this.keyPressed("d")
                    )
                  ) {
                    this.costume = "Left_Idle";
                    yield;
                  }
                }
              }
            }
          }
        }
      }
      yield;
    }
  }

  *whenKeySPressed() {
    if (
      this.stage.vars.running == 1 &&
      !this.touching(this.sprites["MapCover"].andClones()) &&
      this.stage.vars.movable == 1
    ) {
      this.y += -1;
    }
  }

  *whenKeyWPressed() {
    if (
      this.stage.vars.running == 1 &&
      !this.touching(this.sprites["MapCover"].andClones()) &&
      this.stage.vars.movable == 1
    ) {
      this.y += 1;
    }
  }

  *whenKeyDPressed() {
    if (
      this.stage.vars.running == 1 &&
      !this.touching(this.sprites["MapCover"].andClones()) &&
      this.stage.vars.movable == 1
    ) {
      this.x += 1;
    }
  }

  *whenKeyAPressed() {
    if (
      this.stage.vars.running == 1 &&
      !this.touching(this.sprites["MapCover"].andClones()) &&
      this.stage.vars.movable == 1
    ) {
      this.x += -1;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.stage.vars.running == 0) {
        this.visible = false;
        this.goto(-48, -2);
        this.stage.vars.playerState = "Left";
        this.size = 15;
        this.stage.vars.movable = 0;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.stage.vars.running == 1) {
        this.visible = true;
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    this.stage.vars.running = 0;
  }

  *whenIReceiveRunning() {}

  *whenIReceiveRunning2() {
    while (true) {
      if (
        this.touching(this.sprites["Sprite2"].andClones()) &&
        "" +
          String(this.stage.vars.temporaryGameSaveData)[30 - 1] +
          String(this.stage.vars.temporaryGameSaveData)[31 - 1] ==
          0
      ) {
        this.stage.vars.movable = 0;
        this.visible = false;
        this.stage.vars.running = 0;
        this.size = 15;
        yield* this.broadcastAndWait("Dream_End");
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    this.stage.vars.temporaryGameSaveData = "0000000000 000000 000000 000000";
  }

  *whenIReceiveBackground() {
    this.stage.vars.movable = 1;
    this.stage.vars.running = 1;
    this.stage.vars.playerState = "Down";
    this.goto(-105, 72);
    this.size = 20;
  }
}
