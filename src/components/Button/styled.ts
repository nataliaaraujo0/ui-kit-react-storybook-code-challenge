import styled from 'styled-components';
import {Props} from './index'
export const Container = styled.hr`
  background-color:${({backgroundColor}:Props) =>backgroundColor};
  color:${({color}:Props) =>color};
`;