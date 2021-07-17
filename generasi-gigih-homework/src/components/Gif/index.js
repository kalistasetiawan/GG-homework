// import gif from './gif';
import gifs from './gifs';

function data () {

    return (
        gifs.map((value) => {
            if (value.rating === 'g') {
                return (
                <img className="Gif" src={value.url} alt={value.title} rating={value.rating} />
                );
            }
        })
    )
}

export default data;