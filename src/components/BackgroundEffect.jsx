import React, { useEffect } from "react";
let p5;

export default function BackgroundEffect() {
  let canvas;
  let p5Instance;

  const sketch = (p) => {
    let CIRCLE_W = 20;
    let ACTUAL_W = CIRCLE_W * 0.72;
    let MIN_W = 0;
    let CIRCLE_DIST = CIRCLE_W / 2;
    let COLS = p.windowWidth / CIRCLE_DIST + 1;
    let ROWS = p.windowHeight / CIRCLE_DIST + 1;
    let GREATER = Math.max(p.windowWidth, p.windowHeight);
    let dots = [];
    let beacon;

    p.setup = function () {
      canvas = p.createCanvas(p.windowWidth, document.body.scrollHeight);
      canvas.position(0, 0);
      canvas.style("z-index", "-1");
      canvas.style("height", "full");
      p.noStroke();

      for (var ci = 0; ci < COLS; ++ci) {
        for (var ri = 0; ri < ROWS; ++ri) {
          var dot = new Dot(ci * CIRCLE_DIST, ri * CIRCLE_DIST);
          dots.push(dot);
        }
      }
    };

    p.draw = function () {
      p.background("#000000");
      beacon = new p5.Vector(p.mouseX || p.touchX, p.mouseY || p.touchY);

      p.fill("#37365299");
      dots.forEach(function (dot) {
        dot.render();
      });
    };

    var Dot = function (posX, posY) {
      this.position = new p5.Vector(posX, posY);
    };

    Dot.prototype = {
      render: function () {
        var w = this.calcWidth();
        p.ellipse(this.position.x, this.position.y, w, w);
      },

      calcWidth: function () {
        var delta = Math.max(p5.Vector.dist(beacon, this.position), 0);

        delta *= p.map(
          p.noise(this.position.x, this.position.y, p.frameCount),
          0,
          1,
          0.7,
          1.2
        );

        if (delta > GREATER / 2) {
          delta = GREATER / 2;
        }

        return p.map(delta, 0, GREATER / 2, ACTUAL_W, MIN_W);
      },
    };
  };

  useEffect(() => {
    import("p5").then((module) => {
      p5 = module.default;
      p5Instance = new p5(sketch);
    });

    function handleResize() {
      if (canvas) {
        canvas.size(window.innerWidth, document.body.scrollHeight);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      if (p5Instance) {
        p5Instance.remove();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
}
