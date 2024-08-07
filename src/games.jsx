import React from 'react';
import './games.css';
import gtav from './assets/gtav.jpeg';
import gtavi from './assets/gtavi.jpeg';
import gtaiv from './assets/gtaiv.jpeg';
import rdr from './assets/rdr.jpeg';
import rdr2 from './assets/rdr2.jpeg';
import maxpayne from './assets/maxpayne.jpeg';
import michael from './assets/michael.png'
import max from './assets/max.png'
import morgan from './assets/morgan.png'
import nicko from './assets/nicko.png'
import six from './assets/6.png'
import { useNavigate } from 'react-router-dom';

const gamesData = {
    "rockstar": {
        "games": ['gtavi', 'gtav', 'gtaiv', 'rdr', 'rdr2', 'maxpayne'],
        "images": [gtavi, gtav, gtaiv, rdr, rdr2, maxpayne],
        'characters':[six,michael,nicko,morgan,morgan,max],
        'detail': [
            {
                'name': 'Grand Theft Auto VI',
                'description': 'Grand Theft Auto VI is an upcoming open-world action-adventure game developed by Rockstar Games. It is the sixth main installment in the Grand Theft Auto series.',
                'system_requirements': {
                    'Processor': 'AMD Ryzen 5 3600',
                    'Memory': '8 GB',
                    'Graphics': 'NVIDIA GeForce RTX 3070 or AMD Radeon RX 6800 XT',
                    'OS': 'Windows Vista/7/8/10 (64-bit)',
                   
                   
                }
            },
            {
                'name': 'Grand Theft Auto V',
                'description': 'Grand Theft Auto V is an open-world action-adventure game developed by Rockstar Games. It is the fifth main installment in the Grand Theft Auto series.',
                'system_requirements': {
                    'Processor': 'Pentium 4 3.0 GHz',
                    'Memory': '512 MB',
                    'Graphics': 'DirectX 9.0c or ATI Radeon X1600 or GeForce 6600 GT',
                    'OS': 'Windows Vista/7/8/10 (64-bit)',
                },
            },
            {
                'name': 'Grand Theft Auto IV',
                'description': 'Grand Theft Auto IV is an open-world action-adventure game developed by Rockstar North and published by Rockstar Games. It is the fourth main installment in the Grand Theft Auto series.',
                'system_requirements': {
                    'Processor': 'Intel Core 2 Duo E6600 2.4GHz',
                    'Memory': '1 GB',
                    'Graphics': 'NVIDIA GeForce 7800 GT or ATI X1600 XT',
                    'OS': 'Windows XP (SP3) / Vista (SP1)/ 7/ 8/ 10'
                }
            },
            {
                'name': 'Red Dead Redemption',
                'description': 'Red Dead Redemption is an open-world western action-adventure game developed by Rockstar Games. It is set in the late 1800s and follows the story of John Marston, a member of the Van der Linde gang, and his experiences in the American Old West.',
                'system_requirements': {
                    'Processor': 'Intel Pentium 4 3.0 GHz',
                    'Memory': '2 GB',
                    'Graphics': 'NVIDIA GeForce 6600/ATI Radeon X1600',
                    'OS': 'Windows XP/Vista/7/8/10'
                }
            },
            {
                'name': 'Red Dead Redemption 2',
                'description': 'Red Dead Redemption 2 is an open-world western action-adventure game developed by Rockstar Games. It is the sequel to Red Dead Redemption and the latest installment in the Red Dead series.',
                'system_requirements': {
                    'Processor': 'Intel Core i5-2400',
                    'Memory': '8 GB',
                    'Graphics': 'NVIDIA GeForce GTX 660 or AMD Radeon HD 7870',
                    'OS': 'Windows 7/8/10'
                }
            },
            {
                'name': 'Max Payne',
                'description': 'Max Payne is an action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first game in the Max Payne series and was released in 2012.',
                'system_requirements': {
                    'Processor': 'Intel Pentium 4 3.0 GHz',
                    'Memory': '512 MB',
                    'Graphics': 'DirectX 9',
                    'OS': 'Windows XP/Vista/7/8/10'
                }
            },
        ]
    }
    // Add other companies and their games here if needed
};

function Games({ company ,setdetail,setimage}) {
    const games = gamesData[company.toLowerCase()]; // Get games and images for the specified company
    const navigate=useNavigate();
    if (!games) {
        return <div>No games found for the specified company.</div>;
    }

    return(
    <>
    <div className='company-name'>
        <h2 className='company-h2'>{company.toUpperCase()}</h2>
    </div>
    <div className='cards'>
        {games.games.map((game, index) => (
            <a
            href="/company/games/description"
            onClick={(e) => {
              e.preventDefault();
              setdetail(games.detail[index]);
              setimage(games.images[index]);
              navigate('/company/games/description');
            }}
          >
        <div key={index} className="card">
        
        <div class="wrapper" >
      <img src={games.images[index]} className="cover-image" />
    </div>
    
    <img src={games.characters[index]} className="character" />
  </div>
  </a>
        ))}
        
        </div>

</>
    )
}

export default Games;
{/* <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" className="title" /> */}