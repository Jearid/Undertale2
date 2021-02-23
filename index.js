import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Dog from "./Dog/Dog.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Blackscreen from "./Blackscreen/Blackscreen.js";
import UndertaleLogo from "./UndertaleLogo/UndertaleLogo.js";
import FlowerBed from "./FlowerBed/FlowerBed.js";
import TorielOnChairUwu from "./TorielOnChairUwu/TorielOnChairUwu.js";
import LoadGame from "./LoadGame/LoadGame.js";
import NewGame from "./NewGame/NewGame.js";
import ErrorMessagesAndAys from "./ErrorMessagesAndAys/ErrorMessagesAndAys.js";
import InheritedCharacterAssets from "./InheritedCharacterAssets/InheritedCharacterAssets.js";
import Player from "./Player/Player.js";
import MapCover from "./MapCover/MapCover.js";
import Map from "./Map/Map.js";
import Sprite2 from "./Sprite2/Sprite2.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Dog: new Dog({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 102,
    size: 50,
    visible: false,
    layerOrder: 1
  }),
  Sprite1: new Sprite1({
    x: 0,
    y: -80,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Blackscreen: new Blackscreen({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  UndertaleLogo: new UndertaleLogo({
    x: 5,
    y: 50,
    direction: 90,
    costumeNumber: 1,
    size: 49.99999999999998,
    visible: false,
    layerOrder: 7
  }),
  FlowerBed: new FlowerBed({
    x: 13,
    y: -105,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  TorielOnChairUwu: new TorielOnChairUwu({
    x: 16,
    y: -103,
    direction: 90,
    costumeNumber: 10,
    size: 20,
    visible: false,
    layerOrder: 4
  }),
  LoadGame: new LoadGame({
    x: 19,
    y: -49,
    direction: 90,
    costumeNumber: 1,
    size: 75,
    visible: false,
    layerOrder: 5
  }),
  NewGame: new NewGame({
    x: 6,
    y: -57.46581750320186,
    direction: 90,
    costumeNumber: 1,
    size: 75,
    visible: false,
    layerOrder: 9
  }),
  ErrorMessagesAndAys: new ErrorMessagesAndAys({
    x: 0,
    y: 28,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  InheritedCharacterAssets: new InheritedCharacterAssets({
    x: -36,
    y: -110,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  Player: new Player({
    x: 120,
    y: -44,
    direction: 90,
    costumeNumber: 2,
    size: 20,
    visible: true,
    layerOrder: 14
  }),
  MapCover: new MapCover({
    x: 21,
    y: -20,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: true,
    layerOrder: 11
  }),
  Map: new Map({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 13
  }),
  Sprite2: new Sprite2({
    x: 138,
    y: 13,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 12
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
