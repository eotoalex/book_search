import React from 'react';


class Nav extends React.Component{
    
    render(){
        return(
            <div>
                <nav>
                    <p>Nav Here</p>
                {/* <Router>
                    <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/saved_books"}>My Saved Books</Link></li>

                    </ul>
                    <Route exact path="/" component={Form}></Route>
                    <Route exact path="/saved_books" component={SavedBooks}></Route>
                </Router> */}
                </nav>
            </div>
        )
    }
}

export default Nav;