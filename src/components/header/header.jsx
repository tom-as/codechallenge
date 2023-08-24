import HeaderCard from './headerCard'

const Header = () => {

  /*
      TODO: GUARDAR TODAS LAS PROPS EN UN .JSON PARA QUE SEA MAS FACIL DE MODIFICAR, QUE EL CODIGO SEA MAS REUTILIZABLE Y LIMPIO.
      DESPUES, HACER UN MAP PARA RECORRER EL JSON Y CREAR UN HEADERCARD POR CADA OBJETO DEL JSON.
  */
  return (
    <div className='flex justify-between pt-5 px-40'>
      <HeaderCard title="ELEGI UN AUTO" img='src\assets\finger.webp' desc="Acorde a tus intereses"></HeaderCard>
      
      <HeaderCard title="RETIRA EL AUTO" img='src\assets\cred.webp' desc="Combina un lugar de encuentro con el propietario"></HeaderCard>
      
      <HeaderCard title="VIAJA SEGURO" img='src\assets\car.webp' desc="Cocoche cuenta con un seguro todo riesgo y retiene un deposito en la tarjeta"></HeaderCard>

      <HeaderCard title="REALIZA EL PAGO" img='src\assets\card.webp' desc="Abonas el costo del alquiler"></HeaderCard>

    </div>
  )
}
export default Header