import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoPage from "./index";
import {Provider} from "react-redux";

describe('TodoPage', () => {
    let store;
    beforeEach(() => {
        jest.resetModules();
        store = require('../../store').store;
    });

    if (!window.matchMedia) {
        window.matchMedia = function(query) {
            return {
                matches: false,
                media: query,
                onchange: null,
                addListener: function() {},
                removeListener: function() {},
                addEventListener: function() {},
                removeEventListener: function() {},
                dispatchEvent: function() { return false; }
            };
        };
    }

    test('renders the component first time', () => {
        render(
            <Provider store={store}>
                <TodoPage />
            </Provider>
        );

        expect(screen.getByText('To Do List')).toBeInTheDocument();
        expect(screen.getByText('TodoList is empty!')).toBeInTheDocument();
    });

    test('letters and numbers in the input', async () => {
        render(
            <Provider store={store}>
                <TodoPage />
            </Provider>
        );

        const inputElement = screen.getByPlaceholderText('Task name');
        const addButton = screen.getByText('Add Task');

        fireEvent.change(inputElement, { target: { value: 'Hell0! My name 1s Artem!' } });
        fireEvent.click(addButton);

        expect(await screen.findByText('Hell0! My name 1s Artem!')).toBeInTheDocument();
        expect(screen.queryByText('TodoList is empty!')).not.toBeInTheDocument();
    });

    test('empty input', async () => {
        render(
            <Provider store={store}>
                <TodoPage />
            </Provider>
        );

        const inputElement = screen.getByPlaceholderText('Task name');
        const addButton = screen.getByText('Add Task');

        fireEvent.change(inputElement, { target: { value: '' } });
        fireEvent.click(addButton);

        expect(await screen.findByText('Task is required!')).toBeInTheDocument();
        expect(screen.getByText('TodoList is empty!')).toBeInTheDocument();
    });

    test('small task', async () => {
        render(
            <Provider store={store}>
                <TodoPage />
            </Provider>
        );

        const inputElement = screen.getByPlaceholderText('Task name');
        const addButton = screen.getByText('Add Task');

        fireEvent.change(inputElement, { target: { value: 'Test' } });
        fireEvent.click(addButton);

        expect(screen.queryByText('Test')).not.toBeInTheDocument();
        expect(await screen.findByText('Task must be at least 5 characters long!')).toBeInTheDocument();
        expect(screen.getByText('TodoList is empty!')).toBeInTheDocument();
    });

    test('delete todo item', async () => {
        render(
            <Provider store={store}>
                <TodoPage />
            </Provider>
        );

        const inputElement = screen.getByPlaceholderText('Task name');
        const addButton = screen.getByText('Add Task');

        fireEvent.change(inputElement, { target: { value: 'Test Task' } });
        fireEvent.click(addButton);

        expect(await screen.findByText('Test Task')).toBeInTheDocument();

        const deleteButton = screen.getByTestId('delete-button');
        fireEvent.click(deleteButton);

        expect(screen.queryByText('Test Task')).not.toBeInTheDocument();
        expect(screen.getByText('TodoList is empty!')).toBeInTheDocument();
    });

    test('toggle todo item', async () => {
        render(
            <Provider store={store}>
                <TodoPage />
            </Provider>
        );

        const inputElement = screen.getByPlaceholderText('Task name');
        const addButton = screen.getByText('Add Task');

        fireEvent.change(inputElement, { target: { value: 'Test Task' } });
        fireEvent.click(addButton);

        expect(await screen.findByText('Test Task')).toBeInTheDocument();

        const taskElement = screen.getByText('Test Task');
        fireEvent.click(taskElement);

        expect(taskElement).toHaveStyle('text-decoration: line-through');

        fireEvent.click(taskElement);

        expect(taskElement).not.toHaveStyle('text-decoration: line-through');
    });
});
