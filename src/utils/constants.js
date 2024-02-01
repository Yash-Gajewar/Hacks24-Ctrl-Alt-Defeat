import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import FilterListIcon from '@mui/icons-material/FilterList';
import ChairIcon from '@mui/icons-material/Chair';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LogoutIcon from '@mui/icons-material/Logout';


export const categories = [
  { name: 'Current Progress', icon: <DonutLargeIcon />, path: "/home" },
  { name: 'Filter', icon: <FilterListIcon />, path: "/contractors" },
  { name: 'My Decor', icon: <ChairIcon />, path: "/" },
  { name: 'Users', icon: <AccountCircleIcon />, path: "/users" },
  { name: 'Shop', icon: <ShoppingBagIcon />, path: "/shop" },
  { name: 'Logout', icon: <LogoutIcon />, path: "/login" },
];