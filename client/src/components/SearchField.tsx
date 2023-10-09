import {Box, IconButton, TextField} from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  onClick: (e: any) => void,
  placeholder: string | undefined
}
export default function SearchField(props: Props) {
  return <form>
    <TextField variant={'standard'} label="Search" placeholder={props.placeholder} size={'small'} />
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon id={'search-button'}/>
    </IconButton>
  </form>
}