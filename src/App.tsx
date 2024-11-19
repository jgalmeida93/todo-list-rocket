import { useState } from "react";
import Logo from "./components/icons/Logo";
import { CirclePlus } from "lucide-react";
import EmptyList from "./components/icons/EmptyList";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: input.trim(), completed: false },
      ]);
      setInput("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  console.log(todos);

  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <div className="bg-[#0D0D0D] h-[200px]">
        <div className="w-full mx-auto px-4">
          <div className="flex justify-center py-16">
            <Logo />
          </div>

          <form onSubmit={addTodo} className="flex justify-center mb-6">
            <div className="flex gap-2 w-[740px]">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-[620px] rounded-lg bg-gray-800 text-white px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Adicione uma nova tarefa"
              />
              <button
                type="submit"
                className="w-[100px] h-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <div className="flex items-center gap-1">
                  Criar{" "}
                  <div>
                    <CirclePlus className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </button>
            </div>
          </form>

          <div className="space-y-2">
            <div className="w-[50%] mx-auto flex flex-col gap-2">
              <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-[#4EA8DE]">Tarefas criadas</h3>
                  <div className="flex items-center justify-center text-[#D9D9D9] bg-[#333333] rounded-xl w-[25px] h-[25px]">
                    {todos.length}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <h3 className="text-[#8284FA]">Tarefas concluídas </h3>
                  <div className="flex items-center justify-center text-[#D9D9D9] bg-[#333333] rounded-xl px-2">
                    {
                      todos
                        .map((todo) => todo)
                        .filter((todos) => todos.completed).length
                    }{" "}
                    de {todos.length}
                  </div>
                </div>
              </div>
              <hr className="w-full border-[#333333] my-4" />

              {todos.map((todo) => (
                <div
                  key={todo.id}
                  className="flex items-center bg-[#262626] border-[#333333] border rounded-lg p-4 gap-4"
                >
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      todo.completed
                        ? "bg-[#5E60CE] border-[#5E60CE]"
                        : "border-[#4EA8DE] bg-transparent"
                    }`}
                  >
                    {todo.completed && (
                      <svg
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.43059 0.342154L4.09865 4.67409L1.61618 2.19162L0.780273 3.02753L4.09865 6.3459L9.26649 1.17806L8.43059 0.342154Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </button>
                  <span
                    className={`flex-1 text-white ${
                      todo.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-600 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {todos.length === 0 && (
              <div className="flex flex-col justify-center text-center text-gray-500">
                <div className="flex flex-col items-center">
                  <EmptyList />
                  <p>Você ainda não tem tarefas cadastradas</p>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
