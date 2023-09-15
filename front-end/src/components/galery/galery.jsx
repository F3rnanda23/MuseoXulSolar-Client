import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import images from "./links";
import fir1 from '../../imagenes/gallery/fir1.png'
import fir2 from '../../imagenes/gallery/fir2.png'


const Gallery = () => {

  function slideLeft() {
    const slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft - 500
  }

  function slideRight() {
    const slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (

    <div className="relative flex flex-col bg-gray-100 mt-10">
      <div>
        <img src={fir2} alt="xul" className='w-9 h-11 ml-[230px] mt-5' />
      </div>
      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' size={40} onClick={slideLeft} />

        <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {images.map((image) => (
            <img className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              key={image.name} src={image.img} alt={image.name} />

          ))}
        </div>

        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' size={40} onClick={slideRight} />

      </div>
      <div>
        <img src={fir1} alt="xul" className='w-9 h-9 mb-5 ml-auto mr-[250px]' />
      </div>
    </div>
  );
}

export default Gallery;