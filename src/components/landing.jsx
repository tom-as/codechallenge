import Header from './header/header';
import Destacados from './destacados/DestacadosMain';

const Landing = (props) => {
  return (
    <main className='h-screen font-nunito'>

      <div className='flex flex-col h-screen'>
        
          <Header />
          <Destacados datos={props.datos} />

      </div>
      
    </main>
  );
};

export default Landing;
