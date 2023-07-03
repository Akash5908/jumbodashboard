import {InputBase, styled} from "@mui/material";

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    width: '90%',
    zIndex: "999",
    backgroundColor: 'white',
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(1, 1),
    height: '85%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   zIndex:"999"
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    display: 'flex',
    // backgroundColor: 'whitesmoke',
    borderRadius: 24,
    boxShadow: theme.shadows[20],

    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        height: 24
    },
}));
