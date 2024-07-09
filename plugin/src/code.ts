figma.showUI(__html__, { themeColors: true, height: 300 });

figma.ui.onmessage = (msg) => {
  console.log("got this from ui", msg);
  figma.ui.postMessage("hi");
};
