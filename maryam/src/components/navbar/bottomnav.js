import React from 'react'
import Image from 'next/image'
import {Box, Flex, Input, Select, Text, useTheme} from "@chakra-ui/react";
import {logo} from "../../../public/assets/navbar";
import styled from "styled-components";
import {BiSearch} from "react-icons/bi";
// import {LiaShippingFastSolid} from "react-icons/lia";
import {TfiHeadphoneAlt} from "react-icons/tfi";
import {FaRegHeart, FaRegUserCircle} from "react-icons/fa";
import {BsCart3} from "react-icons/bs";

const BottomNav = () => {
    const theme = useTheme();

    return (
        <>
            <Flex bg={'#EEEDED'} justifyContent={'space-around'} alignItems={'center'} py={'.9rem'}>
                <Image src={logo} alt={'logo'}/>

                {/* ====== search box ====== */}
                <Flex
                    borderRadius={'4px'}
                    border={'2px solid #ccc'}
                    p={'1rem 2rem'}
                    bg={'#fff'}
                    justifyContent={'space-around'}
                    flexDir={'row'}
                >
                    <Input variant={'unstyled'} placeholder={'Search for anything...'} padding={'0 1rem'} focusBorderColor='#fff' w={'300px'}/>

                    <Flex justifyContent={'space-evenly'} alignItems='center' ml={'2rem'}>
                        <div style={{ background: '#ccc', width: '2px', height: '20px' }} />
                        <Select variant='unstyled' placeholder='All Categories' focusBorderColor='#fff' width={'100px'} ml={'10px'} />
                    </Flex>
                    <SearchBtn>
                        <BiSearch />
                    </SearchBtn>
                </Flex>

                <Flex justifyContent={'space-evenly'}>
                    <DeliveryCard>
                        {/*<LiaShippingFastSolid />*/}
                        <div>
                            <p className={'pink-text'}>Free Shipping</p>
                            <p >Orders above ₦500K</p>
                        </div>
                    </DeliveryCard>
                    <DeliveryCard>
                        <TfiHeadphoneAlt />

                        <Box>
                            <Text className={'pink-text'}>Customer Care</Text>
                            <Text >+234809 999 7576</Text>
                        </Box>
                    </DeliveryCard>
                </Flex>

                <ProfileIcons>
                    <FaRegUserCircle />
                    <FaRegHeart />
                    <BsCart3 />
                </ProfileIcons>
            </Flex>
        </>
    )
}

export default BottomNav;

const SearchBtn = styled.div`
  width: 80px;
  
  border-radius: 0.30606rem;
  background: #DB0090;
  box-shadow: 0px 3.2967774868011475px 3.2967774868011475px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  margin-left: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.45838rem 1.52038rem;
  gap: 0.11181rem;
  
  svg {
    font-size: 1.3rem;
    color: #fff;
  }
`;

const DeliveryCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 5px 10px;
  margin-right: 10px;
  
  border-radius: 0.54944rem;
  border: 0.374px solid #343330;
  background: #FFF;
  color: #343330;
  
  font-size: 0.67044rem;
  font-weight: 400;
  line-height: normal;
  
  svg {
    font-size: 2.3rem;
    margin-right: 8px;
  }
  .pink-text {
    color: #DB0090;
  }
`;

const ProfileIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  
  svg {
    font-size: 2.5rem;
    margin-right: 10px;
  }
`;
