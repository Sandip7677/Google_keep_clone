import { Link, Outlet } from "react-router-dom"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "../components/ui/navigation-menu"
import Header from "../components/ui/header";

const RootLayout = () => {

  return (
    <>
      <div className="main_container">
        <Header />
        <div className="grid grid-cols-10">
          <div className="col-span-2 bg-slate-600">
            <NavigationMenu className="float-left">
              <NavigationMenuItem >
                <Link to="/Notes">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Notes
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/Reminder" >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Reminder
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/Archive" >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Archive
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/Trash" >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Trash
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenu>
          </div>
          <div className="col-span-8 bg-red-600">
            <Outlet />
          </div>
        </div>

      </div>
    </>
  );
}

export default RootLayout