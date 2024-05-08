import { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error Fetching dog images',error);
                setIsLoading(false);
            });
    }, []);

    return(
        <div>
            {isLoading ? <p>Loading...</p> : (<img src={data.message} alt="A Random Dog" />)}
        </div>
    );
}

export default App;
