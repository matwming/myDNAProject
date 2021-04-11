const getPickerOptions = (units: number): {label: string; value: string}[] => {
  if (Number.isNaN(units)) return [{label: '0', value: '0'}];
  return new Array(units).fill(0).map((el, index: number) => {
    return {
      label: String(index),
      value: String(index),
    };
  });
};
export default getPickerOptions;
