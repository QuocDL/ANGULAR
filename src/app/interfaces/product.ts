
export interface Product {
  id?: number;
  title?: string;
  thumbnail?: string;
  game_url?: string;
  short_description?: string;
  genre?: string;
  platform?: string;
  publisher?: string;
  developer?: string;
  release_date?: string;
  freetogame_profile_url: string;
  gameplay: string;
  system_requirements_medium?:{
    medium: {
        System_Play?: string,
        cpu: string,
        ram: string,
        card: string,
        card_ram: string,
        os: string,
        freedisk: string
   },
   playgood: {
        System_Play?: string,
        cpu: string,
        ram: string,
        card: string,
        card_ram: string,
        os: string,
        freedisk: string
   }
  },
}

export type system = {
   medium: {
     cpu: string,
     ram: string,
    card: string,
    card_ram: string,
    os: string,
    freedisk: string
   },
   playgood: {
     cpu: string,
    ram: string,
    card: string,
    card_ram: string,
    os: string,
    freedisk: string
   }
}



/*
"minmum": [{
                    "cpu": "Intel® Core™ i3 or AMD Phenom™ X3 8650", 
                    "ram": "6GB",
                    "card": "NVIDIA® GeForce® GTX 600 series, AMD Radeon™ HD 7000 series",
                    "card_ram": "512MB",
                    "os": "Windows® 7 / Windows® 8 / Windows® 10 64-bit (latest Service Pack)",
                    "freedisk": "50GB"
*/

/*
"id": 529,
        "title": "Tower of Fantasy",
        "thumbnail": "https://www.freetogame.com/g/529/thumbnail.jpg",
        "short_description": "Tower of Fantasy is a 3D open-world RPG, anime-style sci-fi MMO RPG game with unique characters and beautiful open vistas!",
        "game_url": "https://www.freetogame.com/open/tower-of-fantasy",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Level Infinite",
        "developer": "Hotta Studio",
        "release_date": "2022-08-10",
        "freetogame_profile_url": "https://www.freetogame.com/tower-of-fantasy"
*/