(() => {
  const inputControls = document.querySelectorAll(
    ".controls .control input[type=radio]"
  );

  const panels = document.querySelectorAll(".panel");

  const diretionControls = document.querySelectorAll(
    ".controls .control button"
  );
  const activeControl = document.querySelector("#activePanel");

  const minRange = parseInt(activeControl.getAttribute("min"));
  const maxRange = parseInt(activeControl.getAttribute("max"));
  let newActive = 0;

  var controlAccess = (control) => {
    return control.addEventListener("click", () => {
      let currentActive = parseInt(activeControl.getAttribute("value"));

      if (
        control.dataset.carouselDirection === "previous" &&
        currentActive >= minRange
      ) {
        if (currentActive === minRange) return;
        else newActive = currentActive - 1;
      }

      if (
        control.dataset.carouselDirection === "next" &&
        currentActive <= maxRange
      ) {
        if (currentActive === maxRange) return;
        else newActive = currentActive + 1;
      }

      activeControl.setAttribute("value", newActive);

      setRadioItem(currentActive, newActive, inputControls, panels);
    });
  };

  diretionControls.forEach(controlAccess);
})();

function setRadioItem(currentActive, newActive, inputControls, panels) {
  inputControls[newActive - 1].checked = true;
  inputControls[currentActive - 1].checked = false;

  setPanels(currentActive, newActive, panels);
}

function setPanels(currentActive, newActive, panels) {
  panels[newActive - 1].style.display = "block";
  panels[currentActive - 1].style.display = "none";
}
