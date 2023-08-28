import { Link, Outlet } from "react-router-dom"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "../components/ui/navigation-menu"
import Header from "../components/ui/header";
import { Archive, Bell, Lightbulb, Trash2 } from "lucide-react";
import { useState } from "react";

const RootLayout = () => {
  const [selectedItem, setSelectedItem] = useState(0); // Initially selecting the first item

  const navigationItems = [
    { id: 0, label: 'Notes', link: '/Notes', icon: <Lightbulb className="p-2" size={40} /> },
    { id: 1, label: 'Reminder', link: '/Reminder', icon: <Bell className="p-2" size={40} /> },
    { id: 2, label: 'Archive', link: '/Archive', icon: <Archive className="p-2" size={40} /> },
    { id: 3, label: 'Trash', link: '/Trash', icon: <Trash2 className="p-2" size={40} /> },
  ];

  const handleItemClick = (itemId: number) => {
    setSelectedItem(itemId);
  };

  return (
    <>
      <div className="main_container">
        <Header />
        <hr className="shadow-sm" />
        <div className="grid grid-cols-10">
          <div className="col-span-2">
            <NavigationMenu className="mt-2">

              {navigationItems.map((item) => {
                return (
                  <NavigationMenuItem key={item.id} onClick={() => handleItemClick(item.id)}>
                    <Link to={`${item.link}`}>
                      <NavigationMenuLink className={`group inline-flex h-10 w-full items-center ${selectedItem == item.id ? 'bg-yellow-300' : ''}  rounded-r-3xl  px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-yellow-300 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-yellow-300 data-[state=open]:bg-yellow-300`}>

                        <div className="flex flex-row">
                          {item.icon}
                          <div className="p-2 ml-2 text-base">{item.label}</div>
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              })}


            </NavigationMenu>
          </div>
          <div className="col-span-8">
            <Outlet />
          </div>
        </div>

      </div>
    </>
  );
}

export default RootLayout