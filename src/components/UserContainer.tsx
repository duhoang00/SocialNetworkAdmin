import { FunctionComponent, useState } from "react";
import { useGetUserQuery } from "../request/UserRequest";
import { GET_USER } from "../fetching/UserQuery"

export const UserContainer: FunctionComponent = () => {
    const [userDetailID, setUserDetailID] = useState(1)
    const [queryID, setQueryID] = useState(1)

    const { loading, error, data } = useGetUserQuery(GET_USER, queryID);
    if (loading) return <h1>Loading post detail...</h1>;
    if (error) return <h1>Something went wrong</h1>;

    return (
        <>
            <h1 className="title is-3">User information</h1>
            <div className="">
                <label className="label">ID</label>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" defaultValue={data?.user.id} type="number" onChange={(e) => { setUserDetailID(parseInt(e.target.value)) }} />
                    </div>
                    <div className="control">
                        <button className="button is-success" onClick={(e) => { setQueryID(userDetailID); }} >Check</button>
                    </div>

                </div>

                <div className="field">
                    <label className="label">Username</label>
                    <input className="input" defaultValue={data?.user.username} />
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <input className="input" defaultValue={data?.user.email} />
                </div>
                <label className="label">Address Geo </label>
                <div className="field">
                    <label className="label">Lat</label>
                    <input className="input" defaultValue={data?.user.address.geo.lat} />
                </div>
                <div className="field">
                    <label className="label">Lng</label>
                    <input className="input" defaultValue={data?.user.address.geo.lng} />
                </div>
            </div>
        </>
    )
}