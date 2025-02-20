import { BrowserRouter, Route, Routes } from "react-router-dom";
import { JSX } from "react";
import MainPage from "../../pages/main-page/main-page";
import AdoptPage from "../../pages/adopt-page/adopt-page";
import Error404Page from "../../pages/error404-page/error404-page";
import LoginPage from "../../pages/login-page/login-page";
import ServicesPage from "../../pages/services-page/services-page";
import StoriesPage from "../../pages/stories-page/stories-page";
import ViewMorePetsPage from "../../pages/viewMorePets-page/viewMorePets-page";
import ViewMoreSickPetsPage from "../../pages/viewMoreSickPets-page/viewMoreSickPets-page";
import AboutPetForAdopt from "../../pages/aboutPetForAdopt/aboutPetForAdopt";
import { AppRoute } from "../../const";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.Adopt} element={<AdoptPage />} />
        <Route path={AppRoute.Services} element={<ServicesPage />} />
        <Route path={AppRoute.Stories} element={<StoriesPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Error404} element={<Error404Page />} />
        <Route path={AppRoute.ViewMorePets} element={<ViewMorePetsPage />} />
        <Route path="/view-more-pets" element={<ViewMorePetsPage />} />
        <Route
          path={AppRoute.ViewMoreSickPetsPage}
          element={<ViewMoreSickPetsPage />}
        />
        <Route path={AppRoute.AboutPet} element={<AboutPetForAdopt />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
