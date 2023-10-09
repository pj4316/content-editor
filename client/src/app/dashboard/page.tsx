import {Box, Typography} from "@mui/material";
import ProductCardView from "@/components/ProductCardView";
import styles from './styles.module.css'

export default async function Dashboard() {
  //@ts-ignore
  const webtoonResponse = await fetch('http://localhost:9999/webtoons', {next: {revalidate: 0}})
  const webtoonList = await webtoonResponse.json()
  return <Box className={styles.dashboardPageContainer}>
    <Box className={styles.dashboardPageDescription}>
      <Typography variant={'h5'} sx={{color: '#248FFF', fontWeight: 'bold'}}>꿀보이스 🎙PT성우님, </Typography>
      <Typography variant={'h4'} sx={{color: '#248FFF', fontWeight: 'bold'}}>👍🏻 이런 작품에 내 보이스를
        더해보세요! </Typography>
    </Box>
    <ProductCardView title={'추천'} data={webtoonList} width={150} height={250} />
    <ProductCardView title={'내 작업 중인 목록'} data={webtoonList} width={150} height={250} />
    <ProductCardView title={'교육'} data={webtoonList} width={150} height={250} refreshable />
    <ProductCardView title={'일반'} data={webtoonList} width={150} height={250} refreshable />
    <ProductCardView title={'코미디'} data={webtoonList} width={150} height={250} refreshable />
  </Box>
}