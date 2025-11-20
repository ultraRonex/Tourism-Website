// import React, { useState } from 'react';
// import './VisitorComment.css';

// const VisitorComment = ({ comment }) => {
//   const [reply, setReply] = useState('');
//   const [replied, setReplied] = useState(null);

//   const handleReply = () => {
//     setReplied(reply);
//     setReply('');
//   };

//   return (
//     <div className="visitor-comment">
//       <p>💬 {comment}</p>
//       {replied && <p className="reply">🧑‍💻 Reply: {replied}</p>}
//       <input
//         type="text"
//         placeholder="Write your reply..."
//         value={reply}
//         onChange={(e) => setReply(e.target.value)}
//       />
//       <button onClick={handleReply}>Reply</button>
//     </div>
//   );
// };

// export default VisitorComment;
