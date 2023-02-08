import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayOut } from "../layOut/LayOut";
import {
  BascketBuyPage,
  ManagementLoginPage,
  PageHome,
  PaymentMassagePage,
  ProductManagementPage,
  SingleCategoryPage,
  SingleProductPage,
} from "../Pages/indexPage";
import { ProtectedRoateManagement } from "./ProtectedRouatManagement";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route path="/PaymentMassagePage" element={<PageHome />} />
          <Route
            path="/ManagementLoginPage"
            element={<ManagementLoginPage />}
          />
           <Route
            index
            element={<PaymentMassagePage />}
          />
          <Route path="/BascketBuyPage"  element={<BascketBuyPage />} />
          <Route path="/SingleCategoryPage" element={<SingleCategoryPage />}>
            <Route path=":CategoryId" element={<SingleCategoryPage />} />
          </Route>
          <Route path="/SingleProductPage" element={<SingleProductPage />}>
            <Route path=":ProductId" element={<SingleProductPage />} />
          </Route>
        </Route>
        <Route
          path="/ProductManagementPage"
          element={
            <ProtectedRoateManagement>
              <ProductManagementPage />
            </ProtectedRoateManagement>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
