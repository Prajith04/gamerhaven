import React from 'react';
import './games.css';
import { useNavigate } from 'react-router-dom';
import gtav from './assets/gtav.jpeg';
import gtavi from './assets/gtavi.jpeg';
import gtaiv from './assets/gtaiv.jpeg';
import rdr from './assets/rdr.jpeg';
import rdr2 from './assets/rdr2.jpeg';
import maxpayne from './assets/maxpayne.jpeg';
import michael from './assets/michael.png';
import max from './assets/max.png';
import morgan from './assets/morgan.png';
import nicko from './assets/nicko.png';
import six from './assets/6.png';

const gamesData = {
    "rockstar": {
        "games": ['gtavi', 'gtav', 'gtaiv', 'rdr', 'rdr2', 'maxpayne'],
        "images": [gtavi, gtav, gtaiv, rdr, rdr2, maxpayne],
        'characters': [six, michael, nicko, morgan, morgan, max],
    }
    // Add other companies and their games here if needed
};

function Games({ company, setdetail, setimage }) {
    const games = gamesData[company.toLowerCase()]; // Get games and images for the specified company
    const navigate = useNavigate();

    if (!games) {
        return <div>No games found for the specified company.</div>;
    }

    const fetchGameDetails = async (game) => {
        try {
            const response = await fetch(`http://localhost:3000/games/${game}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const gameDetails = await response.json();
                setdetail(gameDetails.detail);  // Assuming the server returns the detail object
            } else {
                console.error('Failed to fetch game details');
            }
        } catch (error) {
            console.error('Error fetching game details:', error);
        }
    };

    return (
        <>
            <div className='company-name'>
                <h2 className='company-h2'>{company.toUpperCase()}</h2>
            </div>
            <div className='cards'>
                {games.games.map((game, index) => (
                    <a
                        href="/company/games/description"
                        key={index}
                        onClick={async (e) => {
                            e.preventDefault();
                            await fetchGameDetails(game);  // Fetch game details from the server
                            setimage(games.images[index]);
                            navigate('/company/games/description');
                        }}
                    >
                        <div className="card">
                            <div className="wrapper">
                                <img src={games.images[index]} className="cover-image" alt={game} />
                            </div>
                            <img src={games.characters[index]} className="character" alt="character" />
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
}

export default Games;
