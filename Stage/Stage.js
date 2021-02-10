import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.myVariable = 0;
    this.vars.length = 1;
    this.vars.possibleWordsStuff = [
      "bo ",
      "bop ",
      "be ",
      "skdoo ",
      "bep ",
      "bey ",
      "bada ",
      "boop ",
      "doo ",
      "beep "
    ];
    this.vars.output = [];

    this.watchers.possibleWordsStuff = new Watcher({
      label: "possible words stuff",
      style: "normal",
      visible: true,
      value: () => this.vars.possibleWordsStuff,
      x: 240,
      y: 180,
      width: 100,
      height: 360
    });
    this.watchers.output = new Watcher({
      label: "output",
      style: "normal",
      visible: false,
      value: () => this.vars.output,
      x: 240,
      y: 180,
      width: 480,
      height: 360
    });
  }
}
