

const HBox = ( props ) => {

    return ( 
        <div {...props} className={`${props.className} flex flex-row`} />
    )
}

export default HBox;