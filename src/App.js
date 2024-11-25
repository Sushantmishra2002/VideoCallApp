// // import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Components/Homepage';
import VideoPage from './Components/VodeoPage';

// function App() {
//   const router = createBrowserRouter([
//     {
//       path:"/",
//       element: <HomePage/>,
//     },
//     {
//       path:"/room/:id",
//       element: <VideoPage/>,
//     }
//   ])
//   return (
//     <div className="App">
//         <RouterProvider router = {router}/>
//     </div>
//   );
// }

// export default App;











// import './App.css';
// // import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// // import HomePage from './Components/HomePage';
// import VideoPage from './Components/VideoPage'; // Corrected import

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/room/:id',
            element: <VideoPage />,
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
