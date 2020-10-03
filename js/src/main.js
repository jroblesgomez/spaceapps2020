(function() {
    window.Orbits = Orbits({
        renderer: {
            earthimg: "./images/índice.jpg"
        },
        physics: {

        },
        ui: {
            canvas: "CANVAS_BOARD",
            satmass: 15,
            satmasslbl: 15,
            earthmass: 100,
            earthmasslbl: 100,
            initx: 0,
            initxlbl: 0,
            inity: 1.5,
            initylbl: 1.5,
            timesteplbl: 0.01,
            timestep: 0.01,
            defaultsatmass: 15,
            defaultearthmass: 100,
            defaultinitx: 0,
            defaultinity: 1.5,
            defaulttimestep: .01
        },
        settings: {
            earth: {
                x: 310,
                y: 290,
                r: 10,
                r2: 10 * 10,
                m: 50
            }
        }
    });

    setInterval(function() {
        Renderer.redraw();
        for (var i = 30; i > -1; i--) {
            Physics.reCalc();
        }
        Physics.reCalc(true);
    }, 25);

    sats.push(new Sat({ x: 310, y: 180, u: 1.5, v: 0, m: 25, c: "#FF0000" }));
    sats.push(new Sat({ x: 310, y: 400, u: -1.5, v: 0, m: 25, c: "#FFFF00" }));
    sats.push(new Sat({ x: 200, y: 290, u: 0, v: 1.5, m: 25, c: "#FF00FF" }));
    sats.push(new Sat({ x: 420, y: 290, u: 0, v: -1.5, m: 25, c: "#00FFFF" }));
})();