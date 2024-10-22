/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

const BanRoutes = ['/not-found'];
function MainRoutes() {
  const [open, setOpen] = useState(true);
  const url = useLocation();
  const pathName = url.pathname;
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 2400);
  });
  return (
    <div>
      {/* {open && <Landing></Landing>} */}
      {!open && (
        <div className="1stkj">
          {/* {!BanRoutes.includes(pathName) && <Appbar />} */}
          <React.Suspense>
            <Routes>
              {/* <Route exact path='/' element={<UserPage/>}></Route>
              <Route exact path='/addteam' element={<Createteam />}></Route>
              <Route exact path='/live-score' element={<Livescore />}></Route>
              <Route exact path='/dashboard' element={<Dashboard />}></Route>
              <Route exact path='/squad' element={<SquadPage />}></Route>
              <Route
                exact
                path='/manager-setting'
                element={<Setttingpage />}
              ></Route>
              <Route
                exact
                path='/tournaments'
                element={<Tournaments />}
              ></Route>
              <Route
                exact
                path='/offical-team'
                element={<OfficalPage />}
              ></Route>
              <Route exact path='/jersey' element={<JerseyPage />}></Route>
              <Route exact path='/matchs' element={<MatchPage />}></Route>
              <Route exact path='/live' element={<Matchlist />}></Route>
              <Route
                exact
                path='/transfer-request'
                element={<TransferPage />}
              ></Route>
              <Route
                exact
                path='/team-manager-request'
                element={<Notimanage />}
              ></Route>
              <Route
                exact
                path='/teammanager'
                element={<TeamManager />}
              ></Route>
              <Route
                exact
                path='/notification'
                element={<NotificationList />}
              ></Route>
              <Route
                exact
                path='/notificationManager'
                element={<NotificationManager />}
              ></Route>
              <Route
                exact
                path='/forget-password'
                element={<ForgotPassword />}
              ></Route>
              <Route
                exact
                path='/manager'
                element={<ManagerPage></ManagerPage>}
              ></Route>
              <Route
                exact
                path='/admin/:key'
                element={<AdminPage></AdminPage>}
              ></Route>
              <Route
                exact
                path='/favourites/:key'
                element={<FavouritePage></FavouritePage>}
              ></Route>
              <Route
                exact
                path='/account'
                element={<AccountPage></AccountPage>}
              ></Route>
              <Route exact path='/news' element={<NewsPage></NewsPage>}></Route>
              <Route
                exact
                path='/not-found'
                element={<NotFound></NotFound>}
              ></Route> */}
              {/* <Route exact path="*" element={<Navigate to="/not-found" />} /> */}
            </Routes>
          </React.Suspense>
        </div>
      )}
    </div>
  );
}

export default MainRoutes;
