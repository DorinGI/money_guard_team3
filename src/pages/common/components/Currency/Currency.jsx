import React, { useEffect, useCallback, useState } from 'react';
import image from '../../../../images/currency.png';
import imageTab from '../../../../images/currencyTab.png';
import {
  CurrencyWrapper,
  CurrencyTable,
  CurrencyTableHead,
  CurrencyTableBodyList,
  CurrencyTableItem,
  CurrencyTableHeadItem,
  CurrencyTableBody,
  CurrecnyDiagram,
  LowerNumber,
  HigherNumber,
  CurrencyHeadWrapper,
  Gradient,
} from './Currency.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { useMediaQuery } from 'react-responsive';
import { fetchCurrency } from '../../../../redux/currency/operations';
import { selectCurrency } from '../../../../redux/currency/selectors';

import { setLastUpdatedTime } from '../../../../redux/currency/slice';
import { selectLastUpdatedTime } from '../../../../redux/currency/selectors';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const selectedCurrency = useSelector(selectCurrency);
  const lastUpdatedTime = useSelector(selectLastUpdatedTime);

  const dispatch = useDispatch();

  const isHourPassed = useCallback(() => {
    const ONE_HOUR_IN_MS = 60 * 60 * 1000;
    return Date.now() - lastUpdatedTime >= ONE_HOUR_IN_MS;
  }, [lastUpdatedTime]);

  useEffect(() => {
    if (isHourPassed() || !lastUpdatedTime) {
      dispatch(fetchCurrency());
    }
  }, [dispatch, lastUpdatedTime, isHourPassed]);

  useEffect(() => {
    setCurrency(selectedCurrency);
  }, [selectedCurrency]);

  useEffect(() => {
    dispatch(setLastUpdatedTime(Date.now()));
  }, [dispatch]);

  const isTablet = useMediaQuery({ query: '(max-width: 1279px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <CurrencyWrapper>
      <Gradient />
      <CurrencyTable>
        <CurrencyHeadWrapper>
          <CurrencyTableHead>
            <CurrencyTableHeadItem>Currency</CurrencyTableHeadItem>
            <CurrencyTableHeadItem>Purchase</CurrencyTableHeadItem>
            <CurrencyTableHeadItem>Sale</CurrencyTableHeadItem>
          </CurrencyTableHead>
        </CurrencyHeadWrapper>

        <CurrencyTableBodyList>
          {currency?.map(el => (
            <CurrencyTableBody key={nanoid()}>
              <CurrencyTableItem>{el.currencyName}</CurrencyTableItem>
              <CurrencyTableItem>{el.rateBuy.toFixed(2)}</CurrencyTableItem>
              <CurrencyTableItem>{el.rateSell.toFixed(2)}</CurrencyTableItem>
            </CurrencyTableBody>
          ))}
        </CurrencyTableBodyList>
      </CurrencyTable>
      <CurrecnyDiagram>
        {currency?.map(item => {
          if (item.currencyCodeA === '840') {
            // Afișează USD
            return (
              <LowerNumber key={nanoid()}>
                {Number(item.rateBuy).toFixed(2)}
              </LowerNumber>
            );
          } else if (item.currencyCodeA === '978') {
            // Afișează EUR
            return (
              <HigherNumber key={nanoid()}>
                {Number(item.rateBuy).toFixed(2)}
              </HigherNumber>
            );
          }
          return null; // Pentru alte valute, dacă există, nu afișa nimic
        })}
        {isDesktop && <img src={image} alt="" />}
        {isTablet && <img src={imageTab} alt="" />}
      </CurrecnyDiagram>
    </CurrencyWrapper>
  );
};

export default Currency;
