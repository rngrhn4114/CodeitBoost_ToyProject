import title from "../assets/logo.png"
import "./Banner.css"

const Banner = () => {
    return (
    <div className="container">
        <img src={title} alt="Title" className="title-logo"></img>
        <button className="groupCreate">그룹 만들기</button>
    </div>
    )
}

export default Banner