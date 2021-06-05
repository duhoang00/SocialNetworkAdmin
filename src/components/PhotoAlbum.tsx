import { FunctionComponent, useState } from "react";
import { useGetPhotoAlbumQuery } from "../request/MediaRequest";
import { GET_PHOTO_ALBUM } from "../fetching/MediaQuery"

export const PhotoAlbum: FunctionComponent = () => {
    const [photoAlbumID, setPhotoAlbumID] = useState(1)
    const [queryID, setQueryID] = useState(1)

    const { loading, error, data } = useGetPhotoAlbumQuery(GET_PHOTO_ALBUM, queryID);
    if (loading) return <h1>Loading post detail...</h1>;
    if (error) return <h1>Something went wrong!</h1>;

    const renderData = data.photo.album;

    return (
        <>
            <h1 className="title is-3">Photo album information</h1>
            <div className="">
                <label className="label">ID</label>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" defaultValue={renderData.id} type="number" onChange={(e) => { setPhotoAlbumID(parseInt(e.target.value)) }} />
                    </div>
                    <div className="control">
                        <button className="button is-success" onClick={(e) => { setQueryID(photoAlbumID) }} >Check</button>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Title</label>
                    <input className="input" defaultValue={renderData.title} />
                </div>

                <div className="field">
                    <label className="label">User ID</label>
                    <input className="input" defaultValue={renderData.user.id} />
                </div>
            </div>
        </>
    )
}