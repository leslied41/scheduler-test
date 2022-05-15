// import React, { useTransition, useState } from "react";

// export const UseTransition = () => {
//   const [isPending, startTransition] = useTransition;
//   const [list, setList] = useState([]);
//   const [input, setInput] = useState("");
//   const handleChange = (e) => {
//     setInput(e.target.value);
//     startTransition(() => {
//       const l = [];
//       for (let i = 0; i < 20000; i++) {
//         l.push(e.target.value);
//       }
//       //so the code inside the callback function of startTransition will
//       //be low priority.
//       setList(l);
//     });
//   };
//   /*regaring how the useSate works and make component rerenderd, it is noteworthy
//   that for this handleChange function, after line 7 setInput(e.target.value);
//   this component will not rerender immediately. Instead, it will continue to execute
//   this whole function, after for loop and setList(l); it will get rerendered.
//   However, this will bring some unexpected issue that affect performance. That's because
//   this for loop will take a long to time to finalize. So this component will be very slow.
//   In order to resolve this problem, usetransition is introduced. It can set
//   different priority for difference code lines. When set as low priority, the high priority part
//   will get component rerendered and ignore the low priority and after high priority get
//   executed, the low priority part will be executed.  */
//   return (
//     <div>
//       <input type="text" value={input} onChange={handleChange} />
//       {isPending ? (
//         <div>Loading...</div>
//       ) : (
//         list.map((i, index) => {
//           return <div key={index}>{i}</div>;
//         })
//       )}
//     </div>
//   );
// };
