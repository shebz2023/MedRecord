import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <>
      <div>this is the user Layout</div>
      <main className="flex-1 overflow-y-auto pb-3">
        <Outlet />
      </main>
    </>
  );
};
