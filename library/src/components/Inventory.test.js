import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './Inventory';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Inventory tests', () => {

    it('Inventory renders without a problem', () => {
        const div = document.createElement('div');
        const books = [];
        ReactDOM.render(<Inventory books={books} />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Snapshot matches', () => {
        const books = [];
        const wrapper = shallow(<Inventory books={books} />);
        expect(wrapper).toMatchSnapshot();
    });
    describe("inventory", () => {
        const books = [{
            name: "Pan Wołodyjowski",
            author: "Sienkiewicz",
            description: "Ciekawa książka",
            onStock: true,
            image: "tester.png"
        }];
        const input = mount(<Inventory books={books} />)
        const instance = input.instance();
        it('should have state name [STRING] ', () => {
            expect(typeof instance.state.books[name]).toBe('string');
        });
        afterAll(() => {
            input.unmount();
        })
    });

    describe("inventory", () => {
        const books = [{
            name: "Wójt",
            author: "Stanowski",
            description: "Mocna",
            onStock: true,
            image: "wow.png"
        }];
        const input = mount(<Inventory books={books} />)
        const instance = input.instance();
        it('inventory should have state author [STRING] ', () => {
            expect(typeof instance.state.books.author).toBe('string');
        });
        afterAll(() => {
            input.unmount();
        })
    });

    describe("inventory", () => {
        const books = [{
            name: "Potop",
            author: "Sienkiewicz",
            description: "test",
            onStock: true,
            image: "testing.gif"
        }];
        const input = mount(<Inventory books={books} />)
        const instance = input.instance();
        it('should have state description [STRING] ', () => {
            expect(typeof instance.state.books.description).toBe('string');
        });
        afterAll(() => {
            input.unmount();
        })
    });

    describe("inventory", () => {
        const books = [{
            name: "Ovo Vadis",
            author: "Sienkiewicz",
            description: "Dobra książka",
            onStock: true,
            image: "test.png"
        }];
        const input = mount(<Inventory books={books} />)
        const instance = input.instance();
        it('inventory should have state onStock [BOOLEAN] ', () => {
            expect(instance.state.books.onStock).toEqual(true)
        });
        afterAll(() => {
            input.unmount();
        })
    });
    
    describe("inventory", () => {
    const books = [{
        name: "Krzyżacy",
        author: "Sienkiewicz",
        description: "dobra książka",
        onStock: true,
        image: "test.img"
    }];
    const input = mount(<Inventory books={books} />)
    const instance = input.instance();
    it('inventory should have state image [STRING] ', () => {
        expect(typeof instance.state.books.image).toBe('string');
    });
    afterAll(() => {
        input.unmount();
    });
});

})

