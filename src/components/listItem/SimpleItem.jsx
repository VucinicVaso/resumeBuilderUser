import styles from "./SimpleItemStyle.module.css";

const SimpleItem = ({ label, subLabel, actionLabel, actionSubLabel }) => {

    return (
        <div className={ '${styles.list-item}' }>
            
            <div className={ '${styles.item-labels}' }>
                <span className={ '${styles.label}' }>{ label }</span>

                <span className={ '${styles.sub-label}' }>{ subLabel }</span>
            </div>

            <div className={'${styles.item-actions} text-end'}>
                <span className={ '${styles.action-label}' }>{ actionLabel }</span>
                
                <span className={ '${styles.action-sub-label}' }>{ actionSubLabel }</span>
            </div>
        
        </div>
    );

}

export default SimpleItem;