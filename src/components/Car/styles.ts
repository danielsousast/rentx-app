import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import FastImage from "react-native-fast-image";

export const Container = styled(RectButton)`
  width: 100%;
  height: 126px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  align-items: center;
  padding: 24px;
  margin-bottom: 16px;
  border-radius: 5px;
`;

export const Details = styled.View``;

export const RightContent = styled.View``;

export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_details};
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 16px;
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

export const Period = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_details};
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
`;

export const Type = styled.View``;

export const CarImage = styled(FastImage)`
  width: 167px;
  height: 85px;
`;
