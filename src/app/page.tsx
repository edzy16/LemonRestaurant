export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-sans">
      <nav className="flex flex-col items-center justify-center">
        <span className="flex items-center absolute top-5">
          <img
            className="pr-10"
            src=""
            alt="logo"
            width="100"
            height="100"
          />
          <div className="flex">
            <div id="home" className="pl-5">
              Home
            </div>
            <div id="about" className="pl-5">
              About
            </div>
            <div id="menu" className="pl-5">
              Menu
            </div>
            <div id="reservations" className="pl-5">
              Reservations
            </div>
            <div id="orderOnline" className="pl-5 w-25">
              Order Online
            </div>
            <div id="login" className="pl-5">
              Login/Register
            </div>
          </div>
        </span>
      </nav>
    </main>
  );
}
