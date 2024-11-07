import React, { useEffect } from 'react';
import Header from './common/components/Header';
import Navigation from './common/components/Navigation/Navigation';
import { Outlet, useLocation } from 'react-router-dom';
import Balance from './common/components/Balance';
import Container from './common/components/Container/Container';
import {
  DashboardContainer,
  GradientLeftBottom,
  GradientLeftTop,
  GradientRightBottom,
  GradientRightTop,
  LeftContainer,
  NavAndBalanceWrapper,
  SectionContainer,
} from './DashboardPage.styled';
import { useMediaQuery } from 'react-responsive';
import CurrencyPage from './CurrencyPage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTransactions } from '../redux/transactions/operations';

function DashboardPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const location = useLocation();
  const currentPage = location.pathname
    .replace('dashboard', '')
    .replaceAll('/', '');

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchAllTransactions());
    }
  }, [dispatch]);

  return (
    <SectionContainer>
      <Header />
      <Container>
        <DashboardContainer>
          <GradientLeftTop />
          <GradientLeftBottom />
          {isTabletOrDesktop && (
            <>
              <GradientRightBottom />
              <GradientRightTop />
            </>
          )}
          <LeftContainer>
            <NavAndBalanceWrapper>
              <Navigation />
              {!isTabletOrDesktop &&
                (currentPage === 'home' || currentPage === '') && <Balance />}
              {isTabletOrDesktop && <Balance />}
            </NavAndBalanceWrapper>
            {isTabletOrDesktop && <CurrencyPage />}
          </LeftContainer>
          {/*       <Suspense fallback={<Loader/>}>*/}
          <Outlet />
          {/*   </Suspense>*/}
        </DashboardContainer>
      </Container>
    </SectionContainer>
  );
}

export default DashboardPage;
