const computeNewRadiusDown = (x) => {
  //convert array of css property values for radius to an integer
  let radius = x
    .split("")
    .filter((item) => /\d/.test(item))
    .join("");

  radius = parseInt(radius) - 5;

  console.log("scrolling Down", radius);
  return radius;
};

const computeNewRadiusUp = (x) => {
  let radius = x
    .split("")
    .filter((item) => /\d/.test(item))
    .join("");

  radius = parseInt(radius) + 5;

  console.log("scrolling up", radius);
  return radius;
};

window.onload = () => {
  const topSquare = document.getElementById("upper-header-overlay");
  const bottomSquare = document.getElementById("lower-header");
  //get scroll postition reference
  let scrollPos = 0;
  document.addEventListener("scroll", () => {
    let topIndicator = document.body.getBoundingClientRect().top;
    if (topIndicator > scrollPos) {
      let style = window.getComputedStyle(topSquare).getPropertyValue("border-bottom-right-radius");
      let newRadius = computeNewRadiusUp(style);
      topSquare.style.setProperty("--border-radius", newRadius + "px");
      bottomSquare.style.setProperty("--border-radius", newRadius + "px");
    } else {
      //scrolling down

      let style = window.getComputedStyle(topSquare).getPropertyValue("border-bottom-right-radius");
      let newRadius = computeNewRadiusDown(style);
      topSquare.style.setProperty("--border-radius", newRadius + "px");
      bottomSquare.style.setProperty("--border-radius", newRadius + "px");
    }

    scrollPos = document.body.getBoundingClientRect().top;
    console.log(scrollPos);
  });
};
