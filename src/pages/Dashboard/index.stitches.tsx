import { styled } from "../../stitches.config";

export const DashboardContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,

});

export const CardsContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,

});

export const GapContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 'min(27vw, 400px)',
});

