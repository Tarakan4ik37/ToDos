import { Stack, Checkbox, Typography, Chip, Button, Sheet } from '@mui/joy';
import type { Filter, Todo } from '../hooks/useTodos.ts';

type TodoListProps = {
    todos: Todo[];
    filteredTodos: Todo[];
    toggleTodo: (id: number) => void;
    filter: Filter;
    setFilter: (filter: Filter) => void;
    clearCompleted: () => void;
    itemsLeft: number;
};

export const TodoList = ({
    todos,
    filteredTodos,
    toggleTodo,
    filter,
    setFilter,
    clearCompleted,
    itemsLeft,
}: TodoListProps) => {
    //Если задач нет ничего не выводится если есть то вывод return
    if (todos.length === 0) return null;

    return (
        <Sheet
            variant="outlined"
            sx={{
                width: '100%',
                maxWidth: '600px',
                p: 2,
                borderRadius: 'md',
                boxShadow: 'sm',
            }}
        >
            <Stack spacing={1}>
                {filteredTodos.map((todo) => (
                    <Stack
                        key={todo.id}
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{ opacity: todo.completed ? 0.5 : 1 }}
                    >
                        <Checkbox
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <Typography
                            sx={{
                                textDecoration: todo.completed
                                    ? 'line-through'
                                    : 'none',
                                flex: 1,
                            }}
                        >
                            {todo.text}
                        </Typography>
                    </Stack>
                ))}
            </Stack>

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mt={2}
                spacing={2}
            >
                <Typography level="body-sm">{itemsLeft} items left</Typography>

                <Stack direction="row" spacing={1}>
                    <Chip
                        variant={filter === 'all' ? 'solid' : 'outlined'}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </Chip>
                    <Chip
                        variant={filter === 'active' ? 'solid' : 'outlined'}
                        onClick={() => setFilter('active')}
                    >
                        Active
                    </Chip>
                    <Chip
                        variant={filter === 'completed' ? 'solid' : 'outlined'}
                        onClick={() => setFilter('completed')}
                    >
                        Completed
                    </Chip>
                </Stack>

                <Button size="sm" variant="plain" onClick={clearCompleted}>
                    Clear completed
                </Button>
            </Stack>
        </Sheet>
    );
};
