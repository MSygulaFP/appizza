import { LoginForm } from './components/LoginForm';

import './app.module.scss';

export function App() {
  return (
    <main className="flex flex-col h-screen">
      <ui-header />

      <div className="mb-auto w-10/12 mx-auto my-auto">
        <LoginForm />
      </div>

      <ui-footer name="Appizza" framework="React" />
    </main>
  );
}

export default App;
