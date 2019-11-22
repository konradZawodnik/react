import React from 'react';
import { fbase, firebaseApp } from '../fbase';

class AdminPanel extends React.Component {
    
    state = {
        books: [],
        book: {
            name: "",
            author: "",
            description: "",
            onStock: true,
            image: ""
        },
        loggedIn: false,
        email: "",
        password: ""
    };

    handleLoginChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChange = (event) => {
        const { book } = this.state;
        let newBook;
        if (event.target.name === "onStock") {
            newBook = {
                ...book,
                [event.target.name]: event.target.checked
            };
        } else {
            newBook = {
                ...book,
                [event.target.name]: event.target.value
            };
        }
        this.setState({
            book: newBook
        });
    }

    addNewBook = (event) => {
        const { book, books } = this.state;
        event.preventDefault();
        let newBook = { ...book };
        this.setState({
            books: [...books, newBook],
            book: {
                name: "",
                author: "",
                description: "",
                onStock: true,
                image: ""
            }
        });
    }

    componentDidMount() {
        this.ref = fbase.syncState('bookstore/books', {
            context: this,
            state: 'books'
        });
    }

    componentWillUnmount() {
        fbase.removeBinding(this.ref);
    }

    authenticate = (event) => {
        const { email, password } = this.state;
        event.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({
                    loggedIn: true
                })
            })
            .catch(() => {
                console.log('Unable to authenticate');
            })
    }


    render() {
        const { email, password, book, loggedIn } = this.state;
        return (
            <div>
                {!loggedIn &&
                    <div className="col-xs-4 col-xs-offset-2 loginForm" >
                        <form onSubmit={this.authenticate}>
                            <div className="form-group">
                                <input type="text" placeholder="email" id="email_bs" name="email" className="form-control"
                                    onChange={this.handleLoginChange} value={email} />
                            </div>
                            <div className="form-group">
                                <input type="password" id="password_bs" name="password" className="form-control"
                                    onChange={this.handleLoginChange} value={password} />
                            </div>
                            <button type="submit" className="btn btn-primary">Log in</button>
                        </form>
                    </div>
                }
                {loggedIn &&
                    <div className="adminPanel col-xs-4">
                        <form onSubmit={this.addNewBook}>
                            <div className="form-group">
                                <input type="text" placeholder="Book name" id="name" name="name" className="form-control"
                                    onChange={this.handleChange} value={book.name} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Book author" id="author" name="author" className="form-control"
                                    onChange={this.handleChange} value={book.author} />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Book description" id="description" name="description" className="form-control"
                                    onChange={this.handleChange} value={book.description} />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" id="onStock" name="onStock" className="form-check-input"
                                    onChange={this.handleChange} value={book.onStock} />
                                <label htmlFor="onStock" className="form-check-label">On stock</label>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Book image" id="image" name="image" className="form-control"
                                    onChange={this.handleChange} value={book.image} />
                            </div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </form>
                    </div>
                }
            </div>
        )
    }
}

export default AdminPanel;