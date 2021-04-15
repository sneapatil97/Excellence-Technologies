import React from 'react';
import {Link} from 'react-router-dom';

const Header=()=>
{
    return(
        <nav>
            <ul>
                <li><Link  to="/question1" className="pagelink">Question 1</Link></li>
                <li><Link  to="/question2" className="pagelink">Question 2</Link></li>
                <li><Link  to="/question3" className="pagelink">Question 3</Link></li>
                <li><Link  to="" className="pagelink">Question 4</Link></li>
                <li><Link  to="/question5" className="pagelink">Question 5</Link></li>
                <li><Link  to="/todo" className="pagelink">TO-DO App</Link></li>
            </ul>
        </nav>
    )
}

export default Header;