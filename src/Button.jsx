import "./Button.css"

function doSomething(){
    console.log("Hey!!! I got clicked");
}

function handleMouseOver(){
    console.log("Heyyyyy!!! It's over meeeeEEee... 3-)");
}

function handleDblClick(){
    console.log("Heyyyyy!!! got slapped twiceeee...");
}


export default function Button(){
    return(
        <>
            <button className="btn" onClick={doSomething}>Click Me!</button>
            <p onMouseOver={handleMouseOver}>Every small step you take today is quietly shaping a stronger tomorrow. Growth doesn’t always shout; sometimes it happens in the silent moments of effort and persistence. Trust your journey, even when it feels slow, because progress is still progress. Keep going—your future self will thank you for not giving up.</p>
            <button className="btn" onDoubleClick={handleDblClick}>Slap me Twice!</button>
        </>
    )
}