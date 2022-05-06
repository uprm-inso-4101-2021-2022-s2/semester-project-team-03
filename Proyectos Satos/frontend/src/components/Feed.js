import react from "react";
import "./Feed.css"
import Post from "./Post";
function Feed(){
    return(
        <div className="feed">

            <div className="feed__header">
             <h2>Sato Feed </h2>


 </div>
            <Post  image={"https://i.pinimg.com/originals/fa/54/0c/fa540c21fcfe453f5c77c1b15281d02c.jpg"} displayName={"Juan DelPueblo"} text={"This dog has been found near La Jibarita in Mayaguez"} />
            <Post image={"https://upload.wikimedia.org/wikipedia/commons/2/23/Mexican_Street_Dog.jpg"} verified={true} displayName={"Satos Rescue"} text={"This is a really kind dog and its looking for a home, he is very lovable"}/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>
    )

}
export default Feed;