import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import Container from 'components/layout/Container'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import EarnAPYCard from 'views/Home/components/EarnAPYCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/pan-bg-mobile.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  margin: 32px auto;
  max-width: 904px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');
    background-position: left center, right center;
    height: 165px;
    margin-top: 48px;
    padding-top: 0;
  }
`

const Title = styled(Heading)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 40px;
  margin-bottom: ${({ theme }) => theme.spacing[4]}px;
`

const Subtitle = styled(Text)`
  font-weight: 400;
`

const Cards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-top: 48px;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <div>
          <Title as="h1">{TranslateString(576, 'PancakeSwap')}</Title>
          <Subtitle>{TranslateString(578, 'The #1 AMM and yield farm on Binance Smart Chain.')}</Subtitle>
        </div>
      </Hero>
      <Container>
        <Cards>
          <FarmStakingCard />
          <LotteryCard />
        </Cards>
        <CakeStats />
        <CTACards>
          <EarnAPYCard />
          <EarnAssetCard />
          <WinCard />
        </CTACards>
      </Container>
    </Page>
  )
}

export default Home
