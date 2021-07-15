import gif from './gif';

function Gif (props) {
    return (
        <img className="Gif" 
        src={gif.url} 
        alt={gif.title} />
    )
}

export default Gif;