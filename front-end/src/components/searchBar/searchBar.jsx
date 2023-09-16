const SearchBar = ({ setSearch, search, setShowResults, onSearch }) => {

    function handleClick() {
        console.log(search);
        onSearch(search)
        setShowResults(true)
    }

    return (
        <div>
            <div className='flex items-center justify-center bg-orange-200 h-16'>
                <img className='w-14 h-14 mr-10' src='https://res.cloudinary.com/dtsmy1ksn/image/upload/v1694823262/gl/buso_s6shhg.png' alt="Bs" />
                <input placeholder="Busca tu actividad, evento o visita..." onChange={(e) => setSearch(e.target.value)}
                    className='w-3/4 h-4/5 bg-orange-100 border-gray-300 rounded'
                    type="text" />

                <button
                    onClick={handleClick}
                    type="button"
                    className="ainline-block h-10 ml-2 text-orange-200 bg-gray-200 bg-opacity-80 rounded bg-primary-100 px-10 pb-2 pt-2.5 text-sm font-bold uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:scale-105 hover:bg-orange-200 hover:text-gray-200 hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                    Buscar
                </button>
            </div>

        </div>

    );
}

export default SearchBar;