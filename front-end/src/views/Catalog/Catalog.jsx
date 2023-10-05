import { FormattedMessage } from 'react-intl';

export const Catalog = () => {

    return (
        <div className='bg-gray-50 min-h-screen'>
            <h2 className='pt-7 text-center text-2xl font-semibold'>
                <FormattedMessage
                    id='catalogo.titulo'
                    defaultMessage='Catalogo Razonado'
                />
            </h2>
            <div className='p-7 sm:p-12 md:mx-8 text-justify'>
                <p>
                    <FormattedMessage
                        id='catalogo.text'
                        defaultMessage='Se presentó el 13 de octubre, en el Museo Xul Solar, los dos tomos de Xul Solar. Catálogo razonado: obra completa. El catálogo contiene la totalidad de la obra de Xul Solar dirigida no solo a una comunidad interesada en su obra, sino a un gran público atraído en su vida y creaciones.  Se registraron más de 1900 obras que a través de ella se puede reconstruir su obra, pinturas y dibujos que van desde 1913 hasta 1963. La presentación estuvo a cargo del profesor Jorge Schwartz, director del Museo Lasar Sagall en San Pablo, Brasil, la crítica y curadora Ana María Battistozzi y la Dra. Patricia Artundo.'
                    />
                    <br />
                    <br />
                    <FormattedMessage
                        id='catalogo.text2'
                        defaultMessage='La autora de esta magnífica obra es la Doctora en Letras por la Universidade de São Paulo y Licenciada en Historia de las Artes por la Universidad de Buenos Aires, Patricia M. Artundo nacida en Salta en 1957. En la actualidad es docente-investigadora en la Facultad de Filosofía y Letras de la UBA dónde ha dictado seminarios de doctorado, de maestría y cursos de posgrado en el Área de Posgrado de esa facultad, así mismo es investigadora del Instituto de Teoría del Arte Julio E. Payró. Además es autora y organizadora de numerosos y valiosos libros de historia del arte argentino y curadora de varias exposiciones en la Argentina y en el exterior. Entre 2001 y 2016 se desempeñó como Curadora de Libros Especiales y Manuscritos de la Fundación Pan Klub-Museo Xul Solar y entre 2010 y 2016 dirigió el Proyecto Xul Solar: Catálogo razonado. El equipo que colaboró en esta notable tarea fueron las investigadoras Candelaria Artundo y María Sofía Frigerio, además de la participación de Verónica Tejeiro, Cecilia De Bonnet y María Liz Sosa.'
                    />
                    <br />
                    <br />
                    <FormattedMessage
                        id='catalogo.text3'
                        defaultMessage='Sabemos de la importancia de los catálogos razonados y de la larga tradición internacional que existe al respecto, en la bibliografía del arte argentino es escasa su presencia, aun cuando en los últimos años algunas investigaciones han revisado el género “catálogo razonado”. En este contexto, Fundación Pan Klub asumió el desafío de llevar a cabo la catalogación sistemática de las obras de Xul Solar, no solo para colaborar en la difusión de su producción –una de las más singulares y representativas del arte argentino del siglo XX– sino también para facilitar nuevas lecturas acerca de ella. Xul Solar. Catálogo razonado: obra completa, es el resultado de la concreción de un proyecto sin antecedentes equiparables en la historiografía del arte argentino.'
                    />
                    <br />
                    <br />
                    <FormattedMessage
                        id='catalogo.text4'
                        defaultMessage='Destinado a catalogar la totalidad de la obra de Xul Solar según normas y criterios que cumplen con los estándares internacionales, con su realización el catálogo da respuesta a una comunidad no solo ávida de este tipo de publicaciones sino también particularmente interesada en su obra. Se trata del registro documental más completo de su producción, casi 1.900 obras que permiten reconstruir el universo de sus creaciones: sus pinturas y dibujos desde 1913 a 1963, su método de trabajo, sus investigaciones en torno a diversas problemáticas, el pan ajedrez, el I Ching, las lenguas artificiales, el esoterismo, la astrología, su teatro de títeres para adultos, entre muchas otras áreas del conocimiento y de la praxis artística en las que el artista volcó sus esfuerzos a lo largo de cincuenta años.'
                    />
                    <br />
                    <br />
                    <FormattedMessage
                        id='catalogo.text5'
                        defaultMessage='Xul Solar. Catálogo razonado: obra completa está organizado en dos tomos que reúnen el total de la obra del artista documentada hasta el presente. Cada uno de los distintos núcleos organizados –Obras (1913-1962); Dibujos; Ilustraciones para libros y revistas; Objetos y objetos modificados y Estudios, bocetos, obras inacabadas y obras desestimadas– son presentados en orden cronológico.'
                    />
                    <br />
                    <br />
                    <FormattedMessage
                        id='catalogo.text6'
                        defaultMessage='El tomo 1 reúne toda su producción pictórica: 1305 entradas de catálogo que proponen un recorrido que muchas veces escapa a las clasificaciones cerradas y exhibe la complejidad que posee su obra. Por su parte, el tomo 2 agrupa una producción diferente en cuanto a técnica, soporte y materiales elegidos y permite observar la variedad de intereses que lo guiaron. En él, por primera vez se hace público un importante capítulo –Estudios, bocetos, obras inacabadas y obras desestimadas– que permite conocer su método de trabajo, reconstruir obras, indagar las vías a través de las cuales se produce el pasaje desde una primera idea a una obra finalizada o el lugar central que ocupan sus Pan tree como ejemplo de investigación en torno a la práctica mágica, etc. Pero lo más importante es que en el interior de ambos tomos se encuentran referencias cruzadas que en un ida y vuelta remiten de una obra a otra que no necesariamente se encuentra en el mismo tomo. Por eso, la forma de organización y de presentación del Catálogo razonado es más el resultado de la necesidad de facilitar el manejo de un importante volumen de obras que el de una categorización o jerarquización de su producción.'
                    />
                </p>
                <br />
                <p>
                    Xul Solar. Catálogo razonado: obra completa
                    <br />
                    Xul Solar, catálogo razonado: obra completa / Alejandro Xul 
                    <br />
                    Solar ... [et al.]. - 1a ed. -
                    <br />
                    Ciudad Autónoma de Buenos Aires: Fundación Pan Klub, 2016.
                    <br />
                    v. 1. 588 p.; 23 x 31 cm. ISBN 978-950-99762-7-6
                    <br />
                    v. 2, 256 p.; 23 x 31 cm. ISBN 978-950-99762-6-3
                </p>

            </div>

        </div>
    )
}