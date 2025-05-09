const Star = ({ filled }) => (
    <svg
      className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.1 3.386a1 1 0 00.95.69h3.562c.969 0 1.371 1.24.588 1.81l-2.883 2.094a1 1 0 00-.364 1.118l1.1 3.386c.3.921-.755 1.688-1.538 1.118L10 13.011l-2.883 2.093c-.783.57-1.838-.197-1.538-1.118l1.1-3.386a1 1 0 00-.364-1.118L3.432 8.813c-.783-.57-.38-1.81.588-1.81h3.562a1 1 0 00.95-.69l1.1-3.386z" />
    </svg>
  );
  

  export default Star;