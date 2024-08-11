const Userdata = ({ userDetails }) => {
    const { username, name, emailId } = userDetails
    return (
        <div>
            <p>{username}</p>
            <p>{name}</p>
            <p>{emailId}</p>
        </div>
    )
}
export default Userdata
