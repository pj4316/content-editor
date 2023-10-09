import styles from "@/app/dashboard/styles.module.css";
import {Avatar, Box, Divider} from "@mui/material";
import React from "react";
import Image from "next/image";
import SearchField from "@/components/SearchField";

interface Props {
  children: React.ReactNode
}

export default function Layout(props: Props) {
  return (
      <Box className={styles.dashboardContainer}>
        <Box className={styles.dashboardHeader}>
          <Box className={styles.dashboardHeaderItem}>
            <Image width={221} height={26} alt="dobedub logo" src="/dobedub.png" />
          </Box>
          <Box className={styles.dashboardHeaderItem}>
            <SearchField placeholder={'작품 검색하기'} onClick={()=>{ /** TODO */}} />
            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px'}}>
              <Avatar />
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px'}}>
                <Box sx={{fontWeight: 'bold', fontSize: '15px'}}>PT성우</Box>
                <Box sx={{color: 'grey', fontSize: '12px'}}>보이스 아티스트</Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box className={styles.dashboardContent}>
          {props.children}
        </Box>
      </Box>
  )
}