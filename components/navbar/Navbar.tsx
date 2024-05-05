"use client";

import { AppBar, Toolbar, IconButton, OutlinedInput } from "@mui/material";
import { NAVBAR_LINKS } from "./data";
import { NavbarButton } from "./NavbarButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

export default function Navbar() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      alert(`You have searched for: ${searchBarValue}`);
      setSearchBarValue("");
    }
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <div className="flex-grow">
          <span>Logo</span>
        </div>

        <div className="flex gap-2">
          <OutlinedInput
            id="search-input"
            placeholder="Search"
            color="primary"
            value={searchBarValue}
            onKeyDown={handleSearch}
            onChange={(event) => setSearchBarValue(event.target.value)}
            size="small"
          />

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
