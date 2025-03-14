import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css';
import './index.css';
import {QueryClient , QueryClientProvider} from 'react-query'
const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new QueryClient();

root.render(
  <React.StrictMode>
   <QueryClientProvider client={client}>

          <App />
   </QueryClientProvider>

  </React.StrictMode>
);

