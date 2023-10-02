const Visits = () => {
    return (
      <div className="flex justify-center items-center">
        <div className="bg-gray-100 rounded p-4">
          <h1 className="text-center text-2xl font-bold">Visitar el museo</h1>
  
          <h2 className="bg-orange-200 rounded-full text-center text-lg font-semibold py-2">
            Horarios del Museo
          </h2>
          <p className="text-center">
            Martes a Viernes de 12:00 a 20:00 hs.
            <br />
            Sábados de 12:00 a 19:00 hs.
            <br />
            Domingos, Lunes y Feriados: Cerrado
          </p>
          <h2 className="bg-orange-200 rounded-full text-center text-lg font-semibold py-2">
            Costo de las entradas
          </h2>
          <p className="text-center">
            General: $ 1200.
            <br />
            Jubilados, docentes y estudiantes con acreditación: $ 600.
            <br />
            Menores de 5 años: sin cargo
          </p>
          <h2 className="bg-orange-200 rounded-full text-center text-lg font-semibold py-2">
            Visitas guiadas colección permanente
          </h2>
          <p className="text-center">
            Miércoles y Sábados 16:00 hs
          </p>
        </div>
      </div>
    );
  };
  
  export default Visits;
  