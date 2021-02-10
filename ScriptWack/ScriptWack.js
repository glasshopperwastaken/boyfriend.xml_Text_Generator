import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ScriptWack extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "literally nothing",
        "./ScriptWack/costumes/literally nothing.svg",
        { x: 0, y: 0 }
      )
    ];

    this.sounds = [new Sound("Meow", "./ScriptWack/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.output = [];
    this.stage.watchers.output.visible = false;
    yield* this.askAndWait(
      "How long do you want the gibberish words to go on for? (MINIMUM 1 MAX 10)"
    );
    yield* this.generateboyfriendnonsense(this.answer);
    this.stage.vars.output.push(
      "Copy the text above and enjoy your boyfriend.xml non-sense!"
    );
    this.stage.watchers.output.visible = true;
  }

  *generateboyfriendnonsense(loopAmount) {
    if (loopAmount == 1) {
      this.stage.vars.output.push(
        this.stage.vars.possibleWordsStuff[
          this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
        ]
      );
    }
    if (loopAmount == 2) {
      this.stage.vars.output.push(
        "" +
          this.stage.vars.possibleWordsStuff[
            this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
          ] +
          this.stage.vars.possibleWordsStuff[
            this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
          ]
      );
    }
    if (loopAmount == 3) {
      this.stage.vars.output.push(
        "" +
          this.stage.vars.possibleWordsStuff[
            this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
          ] +
          ("" +
            this.stage.vars.possibleWordsStuff[
              this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
            ] +
            this.stage.vars.possibleWordsStuff[
              this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
            ])
      );
    }
    if (loopAmount == 4) {
      this.stage.vars.output.push(
        "" +
          this.stage.vars.possibleWordsStuff[
            this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
          ] +
          ("" +
            this.stage.vars.possibleWordsStuff[
              this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
            ] +
            ("" +
              this.stage.vars.possibleWordsStuff[
                this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
              ] +
              this.stage.vars.possibleWordsStuff[
                this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
              ]))
      );
    }
    if (loopAmount == 5) {
      this.stage.vars.output.push(
        "" +
          this.stage.vars.possibleWordsStuff[
            this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
          ] +
          ("" +
            this.stage.vars.possibleWordsStuff[
              this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
            ] +
            ("" +
              this.stage.vars.possibleWordsStuff[
                this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
              ] +
              ("" +
                this.stage.vars.possibleWordsStuff[
                  this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
                ] +
                this.stage.vars.possibleWordsStuff[
                  this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
                ])))
      );
    }
    if (loopAmount == 6) {
      this.stage.vars.output.push(
        "" +
          this.stage.vars.possibleWordsStuff[
            this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
          ] +
          ("" +
            this.stage.vars.possibleWordsStuff[
              this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
            ] +
            ("" +
              this.stage.vars.possibleWordsStuff[
                this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
              ] +
              ("" +
                this.stage.vars.possibleWordsStuff[
                  this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
                ] +
                ("" +
                  this.stage.vars.possibleWordsStuff[
                    this.random(1, this.stage.vars.possibleWordsStuff.length) -
                      1
                  ] +
                  this.stage.vars.possibleWordsStuff[
                    this.random(1, this.stage.vars.possibleWordsStuff.length) -
                      1
                  ]))))
      );
    }
    if (loopAmount == 7) {
      this.stage.vars.output.push(
        "" +
          this.stage.vars.possibleWordsStuff[
            this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
          ] +
          ("" +
            this.stage.vars.possibleWordsStuff[
              this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
            ] +
            ("" +
              this.stage.vars.possibleWordsStuff[
                this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
              ] +
              ("" +
                this.stage.vars.possibleWordsStuff[
                  this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
                ] +
                ("" +
                  this.stage.vars.possibleWordsStuff[
                    this.random(1, this.stage.vars.possibleWordsStuff.length) -
                      1
                  ] +
                  ("" +
                    this.stage.vars.possibleWordsStuff[
                      this.random(
                        1,
                        this.stage.vars.possibleWordsStuff.length
                      ) - 1
                    ] +
                    this.stage.vars.possibleWordsStuff[
                      this.random(
                        1,
                        this.stage.vars.possibleWordsStuff.length
                      ) - 1
                    ])))))
      );
    }
    if (loopAmount == 8) {
      this.stage.vars.output.push(
        "" +
          this.stage.vars.possibleWordsStuff[
            this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
          ] +
          ("" +
            this.stage.vars.possibleWordsStuff[
              this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
            ] +
            ("" +
              this.stage.vars.possibleWordsStuff[
                this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
              ] +
              ("" +
                this.stage.vars.possibleWordsStuff[
                  this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
                ] +
                ("" +
                  this.stage.vars.possibleWordsStuff[
                    this.random(1, this.stage.vars.possibleWordsStuff.length) -
                      1
                  ] +
                  ("" +
                    this.stage.vars.possibleWordsStuff[
                      this.random(
                        1,
                        this.stage.vars.possibleWordsStuff.length
                      ) - 1
                    ] +
                    ("" +
                      this.stage.vars.possibleWordsStuff[
                        this.random(
                          1,
                          this.stage.vars.possibleWordsStuff.length
                        ) - 1
                      ] +
                      this.stage.vars.possibleWordsStuff[
                        this.random(
                          1,
                          this.stage.vars.possibleWordsStuff.length
                        ) - 1
                      ]))))))
      );
    }
    if (loopAmount == 9) {
      this.stage.vars.output.push(
        "" +
          this.stage.vars.possibleWordsStuff[
            this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
          ] +
          ("" +
            this.stage.vars.possibleWordsStuff[
              this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
            ] +
            ("" +
              this.stage.vars.possibleWordsStuff[
                this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
              ] +
              ("" +
                this.stage.vars.possibleWordsStuff[
                  this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
                ] +
                ("" +
                  this.stage.vars.possibleWordsStuff[
                    this.random(1, this.stage.vars.possibleWordsStuff.length) -
                      1
                  ] +
                  ("" +
                    this.stage.vars.possibleWordsStuff[
                      this.random(
                        1,
                        this.stage.vars.possibleWordsStuff.length
                      ) - 1
                    ] +
                    ("" +
                      this.stage.vars.possibleWordsStuff[
                        this.random(
                          1,
                          this.stage.vars.possibleWordsStuff.length
                        ) - 1
                      ] +
                      ("" +
                        this.stage.vars.possibleWordsStuff[
                          this.random(
                            1,
                            this.stage.vars.possibleWordsStuff.length
                          ) - 1
                        ] +
                        this.stage.vars.possibleWordsStuff[
                          this.random(
                            1,
                            this.stage.vars.possibleWordsStuff.length
                          ) - 1
                        ])))))))
      );
    }
    if (loopAmount == 10) {
      this.stage.vars.output.push(
        "" +
          this.stage.vars.possibleWordsStuff[
            this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
          ] +
          ("" +
            this.stage.vars.possibleWordsStuff[
              this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
            ] +
            ("" +
              this.stage.vars.possibleWordsStuff[
                this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
              ] +
              ("" +
                this.stage.vars.possibleWordsStuff[
                  this.random(1, this.stage.vars.possibleWordsStuff.length) - 1
                ] +
                ("" +
                  this.stage.vars.possibleWordsStuff[
                    this.random(1, this.stage.vars.possibleWordsStuff.length) -
                      1
                  ] +
                  ("" +
                    this.stage.vars.possibleWordsStuff[
                      this.random(
                        1,
                        this.stage.vars.possibleWordsStuff.length
                      ) - 1
                    ] +
                    ("" +
                      this.stage.vars.possibleWordsStuff[
                        this.random(
                          1,
                          this.stage.vars.possibleWordsStuff.length
                        ) - 1
                      ] +
                      ("" +
                        this.stage.vars.possibleWordsStuff[
                          this.random(
                            1,
                            this.stage.vars.possibleWordsStuff.length
                          ) - 1
                        ] +
                        ("" +
                          this.stage.vars.possibleWordsStuff[
                            this.random(
                              1,
                              this.stage.vars.possibleWordsStuff.length
                            ) - 1
                          ] +
                          this.stage.vars.possibleWordsStuff[
                            this.random(
                              1,
                              this.stage.vars.possibleWordsStuff.length
                            ) - 1
                          ]))))))))
      );
    }
  }
}
