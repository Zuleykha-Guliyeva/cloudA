import { RouterProvider } from "react-router-dom";
import router from "router/router";
import { useStore } from "./store/store.config";
import LoaderComponent from "core/shared/loader/loader.component";
import "./App.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { ConfigProvider } from "antd";
import { themeConfig } from "core/configs/theme.config";
import useGlobalStyles from "assets/styles/style";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();
function App() {
  const loader = useStore("loader");
  useGlobalStyles();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={themeConfig}>
          <div className='App'>
            <RouterProvider router={router} />
            {loader ? <LoaderComponent /> : null}
          </div>
          <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            closeButton={false}
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme='light'
            style={{
              minHeight: 'auto',
              maxHeight: '80vh',
            }}
          />
        </ConfigProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
