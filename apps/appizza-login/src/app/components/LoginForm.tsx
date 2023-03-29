import { FormEvent } from 'react';

export function LoginForm() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = 'http://localhost:4200';
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col w-10/12 mx-auto my-5">
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="bg-white border border-slate-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="flex flex-col mt-5">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="bg-white border border-slate-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md mt-5"
      >
        Login
      </button>
    </form>
  );
}
