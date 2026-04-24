import MallAIApp from "./MallApp.jsx";
import HotkeyGamePreview from "./HotkeyGamePreview.jsx";

export default function App() {
  const params = new URLSearchParams(window.location.search);

  if (params.get("demo") === "hotkeys") {
    return <HotkeyGamePreview />;
  }

  return <MallAIApp />;
}
