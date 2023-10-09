import {Box, Button, List, ListItem} from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
      <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'space-between'
          }}
      >
        <List>
          <ListItem>
            <Link href={'/home'}><Button>HOME</Button></Link>
          </ListItem>
          <ListItem>
            <Link href={'/dashboard'}><Button>Dashboard</Button></Link>
          </ListItem>
          <ListItem>
            <Link href={'/sound-module'}><Button>Sound Module</Button></Link>
          </ListItem>
        </List>
      </Box>
  )
}
