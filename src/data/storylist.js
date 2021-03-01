import { psychologique, paranormal, firstperson } from '../types/genres';

const storylist = [
    {
      genres: [
        psychologique,
      ],
      tempsLecture: 5,
      date: "10/02/2021",
      description:"Lorem ipsum dolores ombrage Lorem ipsum dolores ombrage Lorem ipsum dolores ombrage Lorem ipsum dolores ombrage Lorem ipsum dolores ombrage Lorem ipsum dolores ombrage Lorem ipsum dolores ombrage ",
      url:"http://localhost:3000/stories/1",
      title:"Easy Street",
      image:"/assets/stories/easystreet.png",
    },
    {
      genres: [
        paranormal,
        firstperson
      ],
      tempsLecture: 10,
      date: "13/02/2021",
      description:"Lorem ipsum dolores ombrage",
      url:"http://localhost:3000/stories/2",
      title:"Obscur",
      image:"/assets/stories/easystreet.png",
    }
  ];

  export default storylist;