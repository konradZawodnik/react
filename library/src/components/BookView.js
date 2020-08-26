import React from 'react';

export default class BookView extends React.Component {

    render() {
        const { book, addToOrder } = this.props;
        return (
            <div className="bookView row">
                <div className="col-xs-4">
                    <img src={book.image} width="75" height="100" alt={book.name} />
                </div>
                <div className="col-xs-4">
                    <b>{book.name}</b><br />
                    <i>{book.author}</i><br />
                </div>
                <div className="col-xs-4">
                    <button className="btn btn-primary" onClick={(event) => addToOrder(book)}>Add to Order</button>
                </div>
            </div>

        );
    }

}