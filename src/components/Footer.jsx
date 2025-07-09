import React from 'react';
// import bgFooter from '../assets/bg-footer.jpg';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Max Bickel. All rights reserved.</p>
    </footer>
  );
}

// export default function Footer() {
//   return (
//     <footer
//       className="text-white py-6 text-center bg-gray-800 relative"
//       style={{
//         backgroundImage: `url(${bgFooter})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="bg-black bg-opacity-60 py-6">
//         <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }