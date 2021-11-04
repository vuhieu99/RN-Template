import React, { useCallback, useRef, useMemo, useEffect } from 'react';
import { useRequest } from '@umijs/hooks';
import { DotIndicator } from 'react-native-indicators';
import Box from '@src/components/Box';
import Text from '@src/components/Text';
import styles from './styles';
import { useIsFocused } from '@react-navigation/native';
import i18n from '@src/utils/i18n';

const useFlatlist = (service, { autoRefreshOnFocus = false, ...options }) => {
  const isFirstLoad = useRef(true);
  const focusRef = useRef(`${Math.random(1000)}`);
  const isFocused = useIsFocused();

  const focused = useMemo(() => {
    if (isFocused) {
      const newValue = `${Math.random(1000)}`;
      return newValue;
    }
    return focusRef.current;
  }, [isFocused]);

  const onEndReachedCalledDuringMomentum = useRef(true);

  const request = useRequest(service, {
    loadMore: true,
    debounceInterval: 250,
    isNoMore: e => {
      return e?.list && e?.total && e?.list?.length < e?.total;
    },
    ...options,
    onSuccess: r => {
      if (isFirstLoad.current) {
        isFirstLoad.current = false;
      }

      onEndReachedCalledDuringMomentum.current = false;

      options.onSuccess && options.onSuccess(r);
    },
  });

  const { refresh, loadMore, loading } = request;

  const keyExtractor = useCallback(item => `${item.id}`, []);

  const onEndReached = () => {
    if (!onEndReachedCalledDuringMomentum.current && !request.noMore) {
      onEndReachedCalledDuringMomentum.current = true;
      loadMore();
    }
  };

  const flatListProps = {
    refreshing: loading,
    onRefresh: refresh,
    keyExtractor,
    data: request?.data?.list,
    showsVerticalScrollIndicator: false,
    scrollEventThrottle: 16,
    onEndReachedThreshold: 0.5,
    removeClippedSubviews: false,
    onEndReached,
    contentContainerStyle: styles.contentContainerStyle,
    ListFooterComponent: () => {
      if (request?.loadingMore) {
        return (
          <Box justify="center" align="center" padding={[15]}>
            <Box flexDirection="row">
              <DotIndicator count={4} size={9} color={'#000'} />
            </Box>
            <Text margin={15} fontSize={12}>
              {i18n.t('common_loading')}
            </Text>
          </Box>
        );
      }

      if (!request?.loadingMore && options?.contentFooter) {
        return options?.contentFooter();
      }
      return null;
    },
  };

  useEffect(() => {
    if (
      autoRefreshOnFocus &&
      focusRef.current !== focused &&
      !isFirstLoad.current
    ) {
      focusRef.current = focused;
      refresh();
    }
  }, [focused, refresh, autoRefreshOnFocus]);

  return { ...request, flatListProps };
};

export default useFlatlist;
