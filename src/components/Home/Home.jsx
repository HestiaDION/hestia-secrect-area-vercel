import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Footer from '../Footer/Footer.jsx';

export default function Home({ onLogout }) {

  return (
    <>
      <Header onLogout={onLogout}/>
      <Main/>
      <Dashboard/>
      <Footer/>
    </>
  )
}
