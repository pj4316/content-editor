import {Box, Button, Divider, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from './styles.module.css'

export default function Home() {
  return (
      <Box className={styles.homeContainer}>
        <Box className={styles.homeHeader}>
          <Box className={styles.homeHeaderItem}>
            <Image width={221} height={26} alt="dobedub logo" src="/dobedub.png" />
          </Box>
          <Box className={styles.homeHeaderItem}>
            <Link href={'/login'}><Button variant={'text'} sx={{fontWeight: 'bold'}}>로그인</Button></Link>
            <Link href={'/sign-up'}><Button variant={'text'} sx={{fontWeight: 'bold'}}>회원가입</Button></Link>
            <Link href={'/brand-site'}><Button variant={'contained'} sx={{fontWeight: 'bold'}}>브랜드 사이트
              바로가기</Button></Link>
          </Box>
        </Box>
        <Divider />
        <Box className={styles.homeContent}>
          <Typography sx={{fontSize: '2.625rem'}}>글로벌보이스뱅크 두비덥,</Typography>
          <Typography sx={{fontSize: '2.625rem'}}>보이스아티스트는 음성을 저축하고</Typography>
          <Typography sx={{fontSize: '2.625rem'}}>웹툰 서비스는 그 음성으로 수익을 창출합니다.</Typography>
          <Typography sx={{fontSize: '2.625rem'}}></Typography>
          <Typography sx={{fontSize: '2.625rem', fontWeight: 700, marginTop: '40px'}}>
            GLOBAL VOICE BANK
            <Typography variant={'h6'} sx={{color: 'red'}}> DOBEDUB 덥라이트</Typography>
          </Typography>
          <Button variant={'contained'} sx={{marginTop: '24px', width: '186px'}}>시작하기</Button>
        </Box>
      </Box>
  )
}