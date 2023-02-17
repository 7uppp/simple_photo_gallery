import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {getPhotos} from "./store/gallertSlice";

function App() {

    const dispatch = useDispatch();
    const photos = useSelector(state => state.gallery.photos);
    console.log(photos);

    useEffect(() => {
            dispatch(getPhotos())
        }
        , [dispatch])


    return (
        <div>
            <h1>Photo Gallery</h1>
            <p>This is a photo gallery made using redux toolkit and redux thunk</p>
            <hr/>
            <div className="gallery">
                {photos.map(photo =>
                    <img key={photo.id}
                         src={photo.download_url}
                         alt={photo.author}
                         width="400"
                         height="400"
                    />
                )}
            </div>
            <button>View More</button>
        </div>
    );
}

export default App;
