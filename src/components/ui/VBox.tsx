import type { ComponentPropsWithRef } from "react";


const VBox = (props: ComponentPropsWithRef<"div">) => {
    return ( 
        <div {...props} className={`${props.className} flex flex-col`} />
    )
}

export default VBox;