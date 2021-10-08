import { FiMoreVertical } from "react-icons/fi";
import styled from "styled-components";

export const BoxContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.background};
  padding: 1%;
  margin: 1%;
  text-align: justify;
  flex-wrap: wrap;
  width: 200px;
  height: 200px;
`;

export const BoxHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 2%;
`;

export const BoxIcon = styled(FiMoreVertical)`
  color: ${({ theme }) => theme.colors.primary.main.color};
  font-weight: bold;
  cursor: pointer;
`;

export const BoxTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
`;

export const BoxFooter = styled.footer`
  background-color: #f00;
  position: relative;
  bottom: 0;
  border-radius: 0 0 5px px;
`;

export const BoxDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: ${({ theme }) => theme.fonts.description};
  display: block;
  display: -webkit-box;
`;
