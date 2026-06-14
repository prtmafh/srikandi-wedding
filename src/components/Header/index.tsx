"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScrollSpy = () => {
      const scrollY = window.scrollY + 150;

      sections.forEach((section) => {
        const element = section as HTMLElement;

        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        const sectionId = element.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId || "");
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);

    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${
          sticky
            ? "shadow-sticky fixed z-9999 bg-[#FCFBF9]/95 backdrop-blur-md transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="mr-12 w-auto px-4 xl:mr-20">
              <Link
                href="/"
                className={`header-logo flex items-center ${
                  sticky ? "py-4" : "py-6"
                }`}
              >
                <Image
                  src="/images/logo/srikandi-logo.png"
                  alt="Srikandi Wedding"
                  width={120}
                  height={120}
                  priority
                  className="h-auto w-[50px] md:w-[60px]"
                />

                <div className="ml-3">
                  <h3 className="text-sm font-semibold tracking-[0.25em] text-[#634014] md:text-base">
                    SRIKANDI
                  </h3>

                  <p className="text-[10px] tracking-[0.45em] text-[#C48E3B] md:text-xs">
                    WEDDING
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex w-full items-center px-4">
              <div className="flex flex-1 justify-center">
                {/* <div> */}
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            onClick={() => {
                              const id = menuItem.path.replace("#", "");
                              setActiveSection(id);
                              setNavbarOpen(false);
                            }}
                            className={`relative flex py-2 text-base font-medium transition-all duration-300 lg:inline-flex lg:px-0 lg:py-6 ${
                              activeSection === menuItem.path.replace("#", "")
                                ? "text-[#C48E3B]"
                                : "text-[#634014] hover:text-[#C48E3B]"
                            }`}
                          >
                            {menuItem.title}

                            {/* <span
                              className={`absolute bottom-4 left-0 h-[2px] bg-[#C48E3B] transition-all duration-300 ${
                                usePathName === menuItem.path
                                  ? "w-full"
                                  : "w-0 group-hover:w-full"
                              }`}
                            /> */}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                {/* <Link
                  href="/signin"
                  className="text-dark hidden px-7 py-3 text-base font-medium hover:opacity-70 md:block dark:text-white"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 hidden rounded-xs px-8 py-3 text-base font-medium text-white transition duration-300 md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Sign Up
                </Link> */}
                {/* <div>
                  <ThemeToggler />
                </div> */}
                {/* <Link
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  className="rounded-lg bg-[#C48E3B] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#A8742D]"
                >
                  Konsultasi
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
