function startHack() {
  const targets = document.getElementById("targets");
  const selectedTarget = targets.options[targets.selectedIndex].value;

  if (selectedTarget === "target1") {
    document.getElementById("result").innerHTML = "Hack misslyckades.";
  } else if (selectedTarget === "target2") {
    document.getElementById("result").innerHTML = "Hack lyckades!";
  } else if (selectedTarget === "target3") {
    document.getElementById("result").innerHTML = "Målet är skyddat med en stark säkerhet, hack misslyckades.";
  }
}
