import { useState, useEffect } from 'react';
import { Appearance } from 'react-native';
import {light , dark } from '../styles';

const useTheme = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const colors = theme === 'dark' ? dark : light;

  return { ...colors };
};

export default useTheme;