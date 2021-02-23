/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Dog extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "ea9429c02e1c66e3c6dc40e714922697",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e714922697.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e7149226972",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e7149226972.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e7149226973",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e7149226973.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e7149226974",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e7149226974.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e7149226975",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e7149226975.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e7149226976",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e7149226976.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e7149226977",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e7149226977.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e7149226978",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e7149226978.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e7149226979",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e7149226979.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269710",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269710.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269711",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269711.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269712",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269712.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269713",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269713.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269714",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269714.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269715",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269715.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269716",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269716.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269717",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269717.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269718",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269718.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269719",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269719.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269720",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269720.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269721",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269721.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269722",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269722.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269723",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269723.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269724",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269724.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269725",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269725.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269726",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269726.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269727",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269727.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269728",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269728.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269729",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269729.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269730",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269730.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269731",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269731.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269732",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269732.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269733",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269733.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269734",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269734.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269735",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269735.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269736",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269736.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269737",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269737.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269738",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269738.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269739",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269739.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269740",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269740.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269741",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269741.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269742",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269742.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269743",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269743.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269744",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269744.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269745",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269745.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269746",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269746.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269747",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269747.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269748",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269748.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269749",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269749.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269750",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269750.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269751",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269751.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269752",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269752.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269753",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269753.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269754",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269754.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269755",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269755.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269756",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269756.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269757",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269757.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269758",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269758.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269759",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269759.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269760",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269760.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269761",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269761.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269762",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269762.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269763",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269763.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269764",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269764.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269765",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269765.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269766",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269766.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269767",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269767.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269768",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269768.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269769",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269769.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269770",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269770.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269771",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269771.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269772",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269772.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269773",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269773.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269774",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269774.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269775",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269775.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269776",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269776.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269777",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269777.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269778",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269778.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269779",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269779.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269780",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269780.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269781",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269781.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269782",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269782.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269783",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269783.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269784",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269784.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269785",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269785.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269786",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269786.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269787",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269787.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269788",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269788.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269789",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269789.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269790",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269790.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269791",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269791.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269792",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269792.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269793",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269793.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269794",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269794.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269795",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269795.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269796",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269796.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269797",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269797.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269798",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269798.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e71492269799",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e71492269799.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "ea9429c02e1c66e3c6dc40e714922697100",
        "./Dog/costumes/ea9429c02e1c66e3c6dc40e714922697100.png",
        { x: 400, y: 300 }
      ),
      new Costume(
        "Annoying_Dog_sprite (1)",
        "./Dog/costumes/Annoying_Dog_sprite (1).png",
        { x: 215, y: 204 }
      ),
      new Costume(
        "Annoying_Dog_sprite (1)2",
        "./Dog/costumes/Annoying_Dog_sprite (1)2.png",
        { x: 218, y: 200 }
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
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.stage.costume = "BlackBackground";
    this.costume = "Annoying_Dog_sprite (1)";
    for (let i = 0; i < 10; i++) {
      this.costume = "Annoying_Dog_sprite (1)";
      yield* this.wait(0.25);
      this.costume = "Annoying_Dog_sprite (1)2";
      yield* this.wait(0.25);
      yield;
    }
    this.broadcast("Blackscreen");
  }

  *whenIReceiveUndertale2logo() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (
        this.stage.vars.gameSaveData == 0 ||
        "" == this.stage.vars.gameSaveData
      ) {
        this.stage.vars.gameSaveData = "0000000000 000000 000000 000000";
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      yield* this.wait(0);
      yield;
    }
  }
}
