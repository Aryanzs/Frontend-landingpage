import React from 'react'
import {Link} from "react-router-dom";

const BackLink = () => {
  return (
      <Link
    to="/"
    className="mb-6 inline-flex items-center gap-2 text-sm text-[#3A643B]"
  >
    <span className="text-lg">←</span>
    Back
  </Link>
    
  )
}

export default BackLink