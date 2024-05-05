import {
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { NAVBAR_LINKS } from "./data";
import { NavbarButton } from "./NavbarLink";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <div className="flex-grow">
          <span>Logo</span>
        </div>

        <div className="flex gap-2">
          {NAVBAR_LINKS.map((link, idx) => {
            return (
              <NavbarButton key={idx} path={link.path} label={link.label} />
            );
          })}

          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
