import { Stack, Typography, Input } from '@mui/joy';
import { useTodos } from './hooks/useTodos';
import { TodoList } from './features/TodoList.tsx';

export const App = () => {
    const {
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
    } = useTodos();

    return (
        <Stack spacing={2} alignItems="center" sx={{ p: 4 }}>
            <Typography level="h1" color="primary" sx={{ mt: '50px' }}>
                ToDos
            </Typography>

            <Input
                placeholder="What needs to be done?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={() => setIsOpen(true)}
                onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                sx={{ width: '100%', maxWidth: '600px' }}
            />

            {isOpen && todos.length > 0 && (
                <TodoList
                    todos={todos}
                    filteredTodos={filteredTodos}
                    toggleTodo={toggleTodo}
                    filter={filter}
                    setFilter={setFilter}
                    clearCompleted={clearCompleted}
                    itemsLeft={itemsLeft}
                />
            )}
        </Stack>
    );
};
