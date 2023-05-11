import React from "react";

// const List = (props) => {
//   return (
//     <>
//       {props.people.map((person) => {
//         return (
//           <article key={person.id} className="person">
//             <img src={person.image} alt={person.name} />
//             <div>
//               <h4>{person.name}</h4>
//               <p>{person.age} years</p>
//             </div>
//           </article>
//         );
//       })}
//     </>
//   );
// };

// export default List;

// above i am destructuring using props and below i am directly destructuring

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
