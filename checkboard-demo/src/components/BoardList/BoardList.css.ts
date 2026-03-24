import { style } from '@vanilla-extract/css';
import { vars } from '../../App.css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  rowGap: 15,
  minHeight: 'max-content',
  padding: vars.spacing.lg2,
  backgroundColor: vars.color.mainDarker,
});

export const title = style({
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T2,
  marginRight: vars.spacing.lg2,
});

export const addButton = style({
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T2,
  cursor: 'pointer',
  marginLeft: vars.spacing.lg,
  ':hover': {
    opacity: 0.8,
  },
});

export const boardItem = style({
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T3,
  backgroundColor: vars.color.mainFaded,
  padding: vars.spacing.md,
  borderRadius: 10,
  cursor: 'pointer',
  marginRight: vars.spacing.lg,
  ':hover': {
    opacity: 0.8,
    transform: 'scale(1.03)',
  },
});

export const boardItemActive = style({
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T3,
  backgroundColor: vars.color.selectedTab,
  padding: vars.spacing.md,
  borderRadius: 10,
  cursor: 'pointer',
  marginRight: vars.spacing.lg,
});

export const addSection = style({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
});

export const smallTitle = style({
  color: vars.color.brightText,
  fontSize: vars.fontSizing.T3,
});
