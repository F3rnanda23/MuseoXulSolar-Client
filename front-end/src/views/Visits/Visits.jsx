const Visits = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-gray-100 rounded p-4">
        <h1 className="text-center text-2xl font-bold">Visitar el museo</h1>
        <h2 className="bg-orange-200 rounded-full text-center text-lg font-semibold py-2">
          Horarios del Museo
        </h2>
        <p className="text-center bg-orange-100">
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
        <p className="text-center">Miércoles y Sábados 16:00 hs</p>
        <h2 className="bg-orange-200 rounded-full text-center text-lg font-semibold py-2">
          Grupos
        </h2>
        <p>
          Para reservas mandar mail a info@xulsolar.org.ar o telefónicamente al
          (011) 4824-3302/4821-5378
          <br />
          Para visitas guiadas instituciones educativas: jardín, primaria y
          secundaria
        </p>
        <h2 className="bg-orange-200 rounded-full text-center text-lg font-semibold py-2">
          Tienda
        </h2>
        <p>
          Ubicada en el interior del museo, se encuentra abierta durante los
          mismos horarios
        </p>
        <h2 className="bg-orange-200 rounded-full text-center text-lg font-semibold py-2">
          Informacion Util
        </h2>
        <p>
          Fotografías: está permitido tomar fotografías sin flash, de uso
          personal exclusivamente.
          <br />
          Comidas y bebidas: no se podrá ingresar al museo ni con bebidas ni con
          comidas.
          <br />
          Orientación: el equipo del museo podrá asistirte y responder a tus
          consultas. ¡Te esperamos!
        </p>
      </div>
    </div>
  );
};

export default Visits;
