window.onload = () => {
  const hydraCanvas = document.getElementById("hydra-canvas");
  const hydra = new Hydra({
    canvas: hydraCanvas,
    detectAudio: false,
  });

  hydra.setResolution(1280, 720);

  hydraScene();
};

function hydraScene() {
  // osc(40, 0.2, 1)
  //   .modulateScale(osc(40, 0, 1).kaleid(8))
  //   .repeat(2, 4)
  //   .modulate(o0, 0.05)
  //   .modulateKaleid(shape(4, 0.1, 1))
  //   .out(o0);

  solid(0, 0, 0).out(o1);
  src(o1)
    .blend(o0, () => Math.max(0.9, mouse.y / 700))
    .out(o2);
  shape(1, 1)
    .mult(noise(1000, 0.5).blend(o0, 0.6).luma())
    .add(
      shape(2, 0.01)
        .rotate(1, 1)
        .scrollX([0.2, 50, 0.8])
        .scrollY([0.1, -1, 0.3])
    )
    .diff(o2)
    .out();
}
