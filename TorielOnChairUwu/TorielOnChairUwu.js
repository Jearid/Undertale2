/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TorielOnChairUwu extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_00",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_00.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_002",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_002.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_003",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_003.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_004",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_004.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_005",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_005.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_006",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_006.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_007",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_007.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_008",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_008.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_009",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_009.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0010",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0010.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0011",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0011.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0012",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0012.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0013",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0013.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0014",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0014.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0015",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0015.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0016",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0016.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0017",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0017.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0018",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0018.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0019",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0019.png",
        { x: 220, y: 220 }
      ),
      new Costume(
        "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0020",
        "./TorielOnChairUwu/costumes/e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_0020.png",
        { x: 220, y: 220 }
      ),
      new Costume("21", "./TorielOnChairUwu/costumes/21.png", {
        x: 220,
        y: 220
      }),
      new Costume("22", "./TorielOnChairUwu/costumes/22.png", {
        x: 220,
        y: 220
      }),
      new Costume("23", "./TorielOnChairUwu/costumes/23.png", {
        x: 220,
        y: 220
      }),
      new Costume("24", "./TorielOnChairUwu/costumes/24.png", {
        x: 220,
        y: 220
      }),
      new Costume("25", "./TorielOnChairUwu/costumes/25.png", {
        x: 220,
        y: 220
      }),
      new Costume("26", "./TorielOnChairUwu/costumes/26.png", {
        x: 220,
        y: 220
      }),
      new Costume("27", "./TorielOnChairUwu/costumes/27.png", {
        x: 220,
        y: 220
      }),
      new Costume("28", "./TorielOnChairUwu/costumes/28.png", {
        x: 220,
        y: 220
      }),
      new Costume("29", "./TorielOnChairUwu/costumes/29.png", {
        x: 220,
        y: 220
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Toriel_Gif" },
        this.whenIReceiveTorielGif
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "New_Game" },
        this.whenIReceiveNewGame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Showmenu" },
        this.whenIReceiveShowmenu
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(16, -103);
    this.visible = false;
  }

  *whenIReceiveTorielGif() {
    while (true) {
      this.costume = "e6b3e01cfc6c2c43a822363929790cec92bc568fr1-220-220_00";
      for (let i = 0; i < 28; i++) {
        yield* this.wait(0.25);
        this.costumeNumber += 1;
        yield;
      }
      yield* this.wait(5);
      this.costume = 28;
      yield* this.wait(0.25);
      this.costume = 27;
      yield* this.wait(0.25);
      this.costume = 26;
      yield* this.wait(0.25);
      this.costume = 25;
      yield* this.wait(0.25);
      this.costume = 24;
      yield* this.wait(0.25);
      this.costume = 23;
      yield* this.wait(0.25);
      this.costume = 22;
      yield* this.wait(0.25);
      this.costume = 21;
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

  *whenIReceiveShowmenu() {
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 25; i++) {
      yield* this.wait(0.05);
      this.effects.ghost += -4;
      yield;
    }
    this.broadcast("Toriel_Gif");
  }
}
