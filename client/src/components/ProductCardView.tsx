import {Box, IconButton, ImageList, ImageListItem, Typography} from "@mui/material";
import Image from "next/image";
import RefreshIcon from '@mui/icons-material/Refresh';

type Props = {
  title: string,
  description?: string | undefined,
  data: any[],
  width: number,
  height: number,
  refreshable?: boolean | undefined
}

export default function ProductCardView(props: Props) {
  const {title, description, data, width, height, refreshable } = props

  return <Box>
    <Typography variant={'h6'}> { refreshable ? `${title}  |` : title }{refreshable ? <IconButton><RefreshIcon /></IconButton> : undefined} </Typography>
    { description ? <Typography variant={'h6'} sx={{ color: '#248FFF', fontWeight: 'bold' }}> {description} </Typography> : undefined }
    <ImageList cols={10} rowHeight={height} sx={{ display: 'flex', margin: 0, marginBottom: '24px', overflowX: 'scroll', width: 'calc(100%-16px)' }}>
      {
        data.map((item, index) => {
          const key = title !== undefined
              ? 'product-${title}-${index}'
              : `product-${index}`

          return <ImageListItem key={key}>
            <Image
                width={width} height={height}
                src={item.image}
                alt={item.title}
            />
          </ImageListItem>
        })
      }
    </ImageList>
  </Box>
}