import './Components.css'

const Footer = (playlist) => {

    const showPlaylist = () => {
        console.log(playlist);
    }

    return (
        <div className="footer_container">
            <p>Hello</p>
            <button onClick={showPlaylist}>Log the playlist</button>
        </div>
    )
}

export default Footer