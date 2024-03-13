// export default function Count() {
//     return (
//     <div>
//         <CountLabel></CountLabel>
//         <span>0</span>;
//     </div>
//     );
// }

// function CountLabel() {
//     return <p>The Current count</p>
// }

// eslint-disable-next-line react/prop-types
export default function Count({ count }) {
  // This component is responsible for:
  // * Receiving the current count value as a prop named 'count'
  // * Displaying the count within a <p> element that has the CSS class "count" (likely for styling purposes)
  return <p className="count">{count}</p>;
}

// const Count = () => {
//   return <span>0</span>;
// };

// export default Count;

// a component is just a function that returns JSX
// a component can be a function or a class
