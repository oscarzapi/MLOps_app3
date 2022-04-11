import '../App.css';
import {Link} from 'react-router-dom'

function Navigator() {
  return (
    <div className="Navigator">
        <nav>
            <h2>Company Y</h2>
            <ul className="nvlink">
                <li>Home</li>
                <li>Batch Processing</li>
            </ul>
        </nav>
    </div>
  );
}

export default Navigator;
