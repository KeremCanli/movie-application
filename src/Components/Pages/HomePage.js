import React from "react";
import ActorList from "../ActorList.js";
class HomePage extends React.Component
  {
    state={Actors: [{Name: "Marlon Brando",
                     Description: "Marlon Brando is widely considered the greatest movie actor of all time, rivaled only by the more theatrically oriented Laurence Olivier in terms of esteem.",
                     Photo: "https://m.media-amazon.com/images/M/MV5BMTg3MDYyMDE5OF5BMl5BanBnXkFtZTcwNjgyNTEzNA@@._V1_.jpg"},
                    {Name: "Tom Hanks",
                     Description: "Thomas Jeffrey Hanks was born in Concord, California, to Janet Marylyn (Frager), a hospital worker, and Amos Mefford Hanks, an itinerant cook.",
                     Photo: "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_SY1000_CR0,0,691,1000_AL_.jpg"},
                    {Name: "Johnny Depp",
                     Description: "Johnny Depp is perhaps one of the most versatile actors of his day and age in Hollywood. He was born John Christopher Depp II in Owensboro, Kentucky, on June 9, 1963.",
                     Photo: "https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_SY1000_CR0,0,701,1000_AL_.jpg"},
                    {Name: "Al Pacino",
                     Description: "One of the greatest actors in all of film history, Al Pacino established himself during one of cinema's most vibrant decades, the 1970s, and has become an enduring.",
                     Photo: "https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_.jpg"},
                    {Name: "Tom Cruise",
                     Description: "In 1976, if you had told fourteen year-old Franciscan seminary student Thomas Cruise Mapother IV that one day in the not too distant future he would be Tom Cruise.",
                     Photo: "https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_.jpg"},
                    {Name: "Bruce Willis",
                     Description: "Actor and musician Bruce Willis is well known for playing wisecracking or hard-edged characters, often in spectacular action films.",
                     Photo: "https://m.media-amazon.com/images/M/MV5BMjA0MjMzMTE5OF5BMl5BanBnXkFtZTcwMzQ2ODE3Mw@@._V1_.jpg"}]};
    render ()
      {
        return (<div>
                  <h2>Actors</h2>
                  <ActorList Actors={this.state.Actors}/>
                </div>);
      }
  }
export default HomePage;