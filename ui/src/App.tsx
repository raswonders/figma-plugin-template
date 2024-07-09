import { useEffect } from "react";

function App() {
  const onClick = () => {
    parent.postMessage({ pluginMessage: { type: "hello" } }, "*");
  };

  useEffect(() => {
    const listener = (e: MessageEvent) => {
      console.log("got this from plugin", e.data.pluginMessage);
    };
    window.addEventListener("message", listener);
    return () => {
      window.removeEventListener("message", listener);
    };
  }, []);

  return (
    <>
      <h1>Figma plugin template</h1>
      <button onClick={onClick}>say hello</button>
    </>
  );
}

export default App;
