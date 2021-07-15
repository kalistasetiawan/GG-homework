import Avatar from './avatar';
import Datalist from './datalist';
import Header from './header';

function List () {
    
    return (
        <div className="List">
            <Header />
            <div class="outer" id="outer">
                <div class="box">
                    <Avatar />
                    <Datalist />
                    <button>Select</button>
                </div>
          </div>
        </div>
    );
}

export default List;