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
      <h1 className="text-3xl">Figma plugin template</h1>
      <button className="border rounded p-1 mt-2"onClick={onClick}>say hello</button>
    </>
  );
}

export default App;
