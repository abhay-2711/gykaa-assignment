export const getColumnCount = () => {
  
  const viewportWidth = window.innerWidth;

  if (viewportWidth >= 2480) {
    return 30;
  } else if (viewportWidth >= 2340) {
    return 28;
  } else if (viewportWidth >= 2180) {
    return 26;
  } else if (viewportWidth >= 2040) {
    return 24;
  } else if (viewportWidth >= 1900) {
    return 22;
  } else if (viewportWidth >= 1760) {
    return 20;
  } else if (viewportWidth >= 1620) {
    return 18;
  } else if (viewportWidth >= 1480) {
    return 16;
  } else if (viewportWidth >= 1300) {
    return 16;
  } else if (viewportWidth >= 1120) {
    return 14;
  } else if (viewportWidth >= 940) {
    return 12;
  } else {
    return 10;
  }
}