import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import AppHeader from "./layouts/navigation/AppHeader.tsx";
import Alert from "./layouts/alert/Alert.tsx";
import Routes from "./components/routing/Routes.tsx";

import { setAdminAuthToken, setUserAuthToken } from "./utils/headers.ts";
import { loadUser } from "./redux/actions/user.ts";
import { loadAdmin } from "./redux/actions/admin.ts";

if (localStorage.admin__token) setAdminAuthToken(localStorage.admin__token);
if (localStorage.user__token) setUserAuthToken(localStorage.user__token);

const App: FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => dispatch<any>(loadUser()), [dispatch]);
  React.useEffect(() => dispatch<any>(loadAdmin()), [dispatch]);

  return (
    <BrowserRouter>
    <>
      <AppHeader />
      <main className='app'>
        <Routes />
        <Alert />
      </main>
    </>
    </BrowserRouter>
  );
};

export default App;
