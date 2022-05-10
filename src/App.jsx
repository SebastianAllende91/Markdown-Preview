import Editor from "./components/Editor";
import Preview from "./components/Preview";
import useMarkdown from "./hooks/useMarkdown";

function App() {
  const { text, markdown, changeText } = useMarkdown();

  return (
    <div>
      <h1 className="title">Markdown Preview</h1>
      <div className="container">
        <Editor text={text} changeText={changeText} />
        <Preview markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
