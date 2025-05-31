import styles from "./ScrollingListStyle.module.css";

const ScrollingList = ({ items }) => {

    return (
        <div className="container">
            <div className={`${styles.scrollingList} container`}>

               { items }

            </div>
        </div>
    );

}

export default ScrollingList;