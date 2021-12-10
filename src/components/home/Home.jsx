import React, { useState } from 'react'
import axios from "axios"

function Home() {

    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [fourth, setFourth] = useState("");



    // THIS POST REQUESTION IS GIVING ERROR...
    function submitHanddler(e) {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };

        console.log(first, second, third, fourth);

        // const response = fetch(`https://hoblist.com/movieList?category=${first}&language=${second}&genre=${third}&sort=${fourth}`, requestOptions);
        // const data = response.json();
        // console.log(data);
        // this.setState({ postId: data.id });
        alert("OOPS! coudnt Find Anythng")

        try {
            axios.post(`https://hoblist.com/movieList?category=${first}&language=${second}&genre=${third}&sort=${fourth}`)
                .then(response => {
                    console.log(response);

                })

        } catch (e) {
            alert("OOPS! Error occured")
            console.log(e);
        }

    }

    return (
        <>
           
            <p>Welcome</p>
        </>
    )
}

export default Home
