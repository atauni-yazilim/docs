import "./Social.css";
import iconList from "./IconList.json";
import IconItem from "./IconItem/IconItem";

const Social = () => {
    return (
        <div className = "social">
            {
                iconList.map((icon, index) => (
                    <IconItem
                        key = {`${icon.title}_${index}`}
                        url = {icon.url}
                        title = {icon.title}
                    />
                ))
            }
        </div>
    )
}

export default Social;