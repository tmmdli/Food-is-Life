import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import React, {forwardRef, useImperativeHandle} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

interface Props extends React.PropsWithChildren {
  contentHeight?: number;
}

export type AppBottomSheetRef = {
  open: () => void;
  close: () => void;
};

const BottomSheet: React.ForwardRefRenderFunction<AppBottomSheetRef, Props> = (
  {children},
  ref,
) => {
  const {top = 0, bottom = 0} = useSafeAreaInsets();
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);
  const snapPoints = React.useMemo(() => ['100%'], [bottom]);

  useImperativeHandle(ref, () => ({
    open: () => {
      bottomSheetModalRef.current?.present();
    },
    close: () => {
      bottomSheetModalRef.current?.close();
    },
  }));

  const renderBackdrop = React.useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        opacity={0.5}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  const handleSheetChanges = React.useCallback((index: number) => {
    // ...
  }, []);

  return (
    <BottomSheetModal
      index={0}
      topInset={top}
      snapPoints={snapPoints}
      ref={bottomSheetModalRef}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={styles.handleIndicator}>
      {children}
    </BottomSheetModal>
  );
};

export const AppBottomSheet = forwardRef(BottomSheet);

const styles = StyleSheet.create({
  handleIndicator: {
    width: 48,
    height: 4,
    backgroundColor: '#272D2F',
  },
});
