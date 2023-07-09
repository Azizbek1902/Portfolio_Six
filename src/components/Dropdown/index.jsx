import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function DropDown() {
  return (
    <div>
      {" "}
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5">
            Pages
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-10 mt-9 w-40 py-3 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? "text-base navLi  text-[#450b78]  Pop"
                        : "text-[#450b78]  Pop",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    <NavLink to={"/blog"}>Blog</NavLink>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? "text-base navLi  text-[#450b78]  Pop"
                        : "text-[#450b78]  Pop",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    <NavLink to={"/detail"}> Blog Details</NavLink>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? "text-base navLi  text-[#450b78]  Pop"
                        : "text-[#450b78]  Pop",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {" "}
                    <NavLink to={"/element"}>Element</NavLink>
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default DropDown;
