import "./Button.css"

function doSomething(){
    console.log("Hey!!! I got clicked");
}

export default function Button(){
    return(
        <>
            <button className="btn" onClick={doSomething}>Click Me!</button>
        </>
    )
}