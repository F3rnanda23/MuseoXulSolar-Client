import { FormattedMessage } from 'react-intl';

const SearchBar = ({ setSearch, search, setShowResults, onSearch }) => {

    function handleClick() {
        onSearch(search)
        setShowResults(true)
    }

    return (
        <div>
            <div className='flex items-center justify-center bg-orange-200 h-16'>

                <input placeholder="Busca tu actividad, evento o visita..." onChange={(e) => setSearch(e.target.value)}
                    className='w-3/4 h-4/5 bg-orange-100 border-gray-300 rounded'
                    type="text" />

                <button
                    onClick={handleClick}
                    type="button"
                    className="ainline-block h-10 ml-2 text-orange-200 bg-gray-200 bg-opacity-80 rounded bg-primary-100 px-10 pb-2 pt-2.5 text-sm font-bold uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:scale-105 hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200">
                    <FormattedMessage
                        id='nav.buscar'
                        defaultMessage='Buscar'
                    />
                </button>
            </div>

        </div>

    );
}

export default SearchBar;