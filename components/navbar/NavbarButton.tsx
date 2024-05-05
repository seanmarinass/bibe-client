import { Button } from "@mui/material";

type NavbarButtonProps = {
  path: string;
  label: string;
};

export function NavbarButton({ label, path }: NavbarButtonProps) {
  return (
    <Button href={path} color="inherit">
      {label}
    </Button>
  );
}
