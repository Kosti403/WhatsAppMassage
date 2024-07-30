import ReactDOM from "react-dom/client";
import App from "./router.tsx";
import "./index.scss";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider
    theme={{
      components: {
        Select: {
          colorBorder: 'none',
          colorPrimary: "#adadad",
          colorTextBase: "#000",
          algorithm: true,
        },
      },
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);
