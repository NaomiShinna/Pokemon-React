import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  );

  const Index = React.lazy(() => import("./pages/index"));
  const DetailPokemon = React.lazy(() => import("./pages/detailPokemon"));

  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route
            exact
            path="/:idPokemon"
            name="Detail Pokemon"
            element={<DetailPokemon />}
          />
          <Route path="*" name="Index" element={<Index />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
