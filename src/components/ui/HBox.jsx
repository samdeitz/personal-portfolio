

const HBox = ( props ) => {

    return ( 
        <div {...props} className={`${props.className} flex flex-row flex-wrap`} />
    )
}

export default HBox;