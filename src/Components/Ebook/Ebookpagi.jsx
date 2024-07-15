import React from 'react'
import {Link} from 'react-router-dom';
export default function Ebookpagi() {
  return (
    <>
   <nav aria-label="Page navigation example ">
        <ul className="pagination justify-content-center">
            <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
            <li className="page-item"><Link className="page-link" to="#">1</Link></li>
            
                <li class="page-item active" aria-current="page">
                    <Link className="page-link" to="#">2</Link>
                </li>
            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
            <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
        </ul>
    </nav>

    </>
  )
}
