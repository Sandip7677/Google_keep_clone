import { Link, Outlet } from "react-router-dom"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../components/ui/navigation-menu"
import Header from "../components/ui/header";
import { Archive, Bell, Lightbulb, Trash2 } from "lucide-react";

const RootLayout = () => {

  return (
    <>
      <div className="main_container">
        <Header />
        <hr className="shadow-sm" />
        <div className="grid grid-cols-10">
          <div className="col-span-2">
            <NavigationMenu className="mt-2">
              <NavigationMenuItem >
                <Link to="/Notes">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <div className="flex flex-row">
                      <Lightbulb className="p-2" size={40} />
                      <div className="p-2 ml-2 text-base">Notes</div>
                    </div>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/Reminder" >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <div className="flex flex-row">
                      <Bell className="p-2" size={40} />
                      <div className="p-2 ml-2 text-base">Reminder</div>
                    </div>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/Archive" >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <div className="flex flex-row">
                      <Archive className="p-2" size={40} />
                      <div className="p-2 ml-2 text-base">Archive</div>
                    </div>

                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/Trash" >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <div className="flex flex-row">
                      <Trash2 className="p-2" size={40} />
                      <div className="p-2 ml-2 text-base">Trash</div>
                    </div>

                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
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