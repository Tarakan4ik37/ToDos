import { useState } from 'react';

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

export type Filter = 'all' | 'active' | 'completed';

export const useTodos = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<Filter>('all');
    const [isOpen, setIsOpen] = useState(false);

    //Добавление новых задач в список
    const addTodo = () => {
        const trimmed = input.trim();
        if (!trimmed) return;
        setTodos((prev) => [
            { id: Date.now(), text: trimmed, completed: false },
            ...prev,
        ]);
        setInput('');
        setIsOpen(true);
    };

    //Переключение задач между выполнено\не выполнено
    const toggleTodo = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
        );
    };

    //Удаление выполненных задач
    const clearCompleted = () => {
        setTodos((prev) => prev.filter((todo) => !todo.completed));
    };

    //Фильтр (all, active, completed)
    const filteredTodos = todos.filter((todo) =>
        filter === 'active'
            ? !todo.completed
            : filter === 'completed'
              ? todo.completed
              : true,
    );

    //Счетчик не выполненных задач
    const itemsLeft = todos.filter((todo) => !todo.completed).length;

    return {
        input,
        setInput,
        todos,
        filter,
        setFilter,
        isOpen,
        setIsOpen,
        addTodo,
        toggleTodo,
        clearCompleted,
        filteredTodos,
        itemsLeft,
    };
};
