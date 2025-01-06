import { Suspense, useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";

import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Properties from "./pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Property from "./pages/Property/Property";
import Contact from "./components/Contact/contact";
import ContactForm from "./components/ContactForm/ContactForm";
import UserDetailContext from "./context/UserDetailContext";
import Bookings from "./pages/Bookings/Bookings";
import Favourites from "./pages/Favorites/Favourites";

import UploadProperty from "./pages/UploadProperty/UploadProperty";
import Leads from "./pages/Leads/Leads";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import EnquiryForm from "./pages/EnquiryForm/EnquiryForm";
import AdminDashboard from "./pages/AdminPage/AdminPage";

function App() {
  const queryClient = new QueryClient();

  // State to store user details
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });

  // Automatically fetch token from localStorage (if available) on app load
  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    if (savedToken) {
      setUserDetails((prev) => ({ ...prev, token: savedToken }));
    }
  }, []);

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {/* Public Routes */}
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} /> {/* Home Page */}
                <Route path="/properties">
                  <Route index element={<Properties />} />
                  <Route path=":propertyId" element={<Property />} />
                </Route>
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/contact-form" element={<ContactForm />} />
                <Route path="/login-page" element={<LoginPage />} />
                <Route path="/enquiry-form" element={<EnquiryForm />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/bookings" element={<Bookings />} />

                {/* Private Routes */}
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <AdminDashboard />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/upload-property"
                  element={
                    <PrivateRoute>
                      <UploadProperty />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/leads"
                  element={
                    <PrivateRoute>
                      <Leads />
                    </PrivateRoute>
                  }
                />
                {/* Fallback route */}
                <Route path="*" element={<Website />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;