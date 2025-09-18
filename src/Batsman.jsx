import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const [foures, setFoures] = useState(0);

    const handleSingle = ()=> {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleSixes = () => {
        const updatedSix = runs + 6;
        const sixCount = sixes + 1;
        setRuns(updatedSix)
        setSixes(sixCount)
    }

    const handleFour = () => {
        const updatedFour = runs + 4;
        setRuns(updatedFour);
    }
    return(
        <div className="style">
            <h5>Player: Bangla Batsman</h5>
            <p><small>Six: {sixes}</small></p>
            
            {
                runs >= 50 && <p>Your Score: 50</p>
            }

            <h2>Score: {runs}</h2>
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSixes}>Six</button>
        </div>
    )
}