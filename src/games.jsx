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
import gow1 from './assets/gow1.jpg';
import gow2 from './assets/gow2.jpg';
import gow3 from './assets/gow3.jpg';
import gow4 from './assets/gow4.jpg';
import bt1 from './assets/bt1.jpg';
import bt2 from './assets/bt2.jpg';
import bt5 from './assets/bt5.jpg';
import bt2042 from './assets/bt2042.jpg';
import sm1 from './assets/sm1.jpg';
import sm2 from './assets/sm2.jpg';
import sm3 from './assets/sm3.jpg';
import som from './assets/som.jpg';
import sow from './assets/sow.jpg';
import ac1 from './assets/ac1.jpg';
import ac2 from './assets/ac2.jpg';
import ac3 from './assets/ac3.jpg';
import acv from './assets/acv.jpg';
import ds from './assets/ds.jpg';
import bb from './assets/bb.jpg';
import sekiro from './assets/sekiro.jpg';
import er from './assets/er.jpg';
import re1 from './assets/re1.jpg';
import re2 from './assets/re2.jpg';
import re3 from './assets/re3.jpg';
import re4 from './assets/re4.jpg';
import cod1 from './assets/cod1.jpg';
import cod2 from './assets/cod2.jpg';
import cod3 from './assets/cod3.jpg';
import cod4 from './assets/cod4.jpg';
import fo from './assets/fo.jpg';
import fo3 from './assets/fo3.jpg';
import fo4 from './assets/fo4.jpg';
import fo76 from './assets/fo76.jpg';
import k1 from './assets/k1.png';
import k2 from './assets/k2.png';
import k3 from './assets/k3.png';
import k4 from './assets/k4.png';
import b1 from './assets/b1.png';
import b2 from './assets/b2.png';
import b3 from './assets/b3.png';
import b4 from './assets/b4.png';
import s1 from './assets/s1.png';
import s2 from './assets/s2.png';
import s3 from './assets/s3.png';
import t1 from './assets/t1.png';
import t2 from './assets/t2.png';
import a1 from './assets/a1.png';
import a2 from './assets/a2.png';
import a3 from './assets/a3.png';
import a4 from './assets/a4.png';
import d from './assets/d.png';
import b from './assets/b.png';
import s from './assets/s.png';
import e from './assets/e.png';
import r1 from './assets/r1.png';
import r2 from './assets/r2.png';
import r3 from './assets/r3.png';
import r4 from './assets/r4.png';
import c1 from './assets/c1.png';
import c2 from './assets/c2.png';
import c3 from './assets/c3.png';
import c4 from './assets/c4.png';
import f1 from './assets/f1.png';
import f2 from './assets/f2.png';
import f3 from './assets/f3.png';
import f4 from './assets/f4.png';
const gamesData = {
    "rockstar": {
        "games": ['gtavi', 'gtav', 'gtaiv', 'rdr', 'rdr2', 'maxpayne'],
        "images": [gtavi, gtav, gtaiv, rdr, rdr2, maxpayne],
        'characters': [six, michael, nicko, morgan, morgan, max],
    },
    "santamonica": {
        "games": ['gow1', 'gow2', 'gow3', 'gow4'],
        "images": [gow1,gow2,gow3,gow4],
        'characters': [k1, k2, k3, k4],
    },
    "electronicarts": {
        "games": ['bt1', 'bt2', 'bt5', 'bt2042'],
        "images": [bt1,bt2,bt5,bt2042],
        'characters': [b1, b2, b3, b4],
    },
    "insomaniac": {
        "games": ['sm1', 'sm2', 'sm3'],
        "images": [sm1, sm2, sm3],
        'characters': [s1, s2, s3],
    },
    "monolith": {
        "games": ['som', 'sow'],
        "images": [som, sow],
        'characters': [t1, t2],
    },
    "ubisoft": {
        "games": ['ac', 'ac2', 'ac3', 'acv'],
        "images": [ac1, ac2, ac3, acv],
        'characters': [a1, a2, a3, a4],
    },
    "fromsoftware": {
        "games": ['ds', 'bb', 'sekiro', 'er'],
        "images": [ds, bb, sekiro, er],
        'characters': [d, b, s, e],
    },
    "capcom": {
        "games": ['re', 're2', 're3', 're4'],
        "images": [re1, re2, re3, re4],
        'characters': [r1, r2, r3, r4],
    },
    "activision": {
        "games": ['cod1', 'cod2', 'cod3', 'cod4'],
        "images": [cod1, cod2, cod3, cod4],
        'characters': [c1, c2, c3, c4],
    },
    "bethesda": {
        "games": ['fo', 'fo3', 'fo4', 'fo76'],
        "images": [fo, fo3, fo4, fo76],
        'characters': [f1, f2, f3, f4],
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
