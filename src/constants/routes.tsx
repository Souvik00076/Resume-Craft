import { Dashboard } from "../pages";
import { EditResume } from "../components";
import { Home } from "../components";
/*
 *
 *<Right><Route path='/' element={<Home />} />
          <Route path='/about' element={<><Header/><About /></>} />
          <Route path='/resumebuild' element={<><Header/><Input /></>} />
          <Route path='/selecttheme' element={<><Header/><Selecttheme /></>} />
          <Route path='/theme-professional/download' element={<Professional />} />
          <Route path='/theme-creative/download' element={<Creative />} />
          <Route path='/theme-classic/download' element={<Classic />} />
          <Route path='/theme-minimalist/download' element={<Minimalist />} />
          <Route path='/theme-modern/download' element={<Modern />} />
          <Route path='*' element={<Pagenotfount404 />} />
 */
export const routes = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "edit-resume",
        element: <EditResume />,
      },
    ],
  },
];
