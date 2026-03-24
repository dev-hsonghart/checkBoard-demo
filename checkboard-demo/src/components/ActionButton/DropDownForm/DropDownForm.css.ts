import { style } from '@vanilla-extract/css';
import { vars } from '../../../App.css';

export const taskForm = style({
  display: 'flex',
  flexDirection: 'column',
  height: 'max-content',
  borderRadius: 4,
  marginTop: vars.spacing.sm,
  fontSize: vars.fontSizing.T3,
  padding: vars.spacing.md,
});
export const listForm = style({
  display: 'flex',
  flexDirection: 'column',
  marginRight: vars.spacing.listSpacing,
  padding: vars.spacing.lg2,
  width: 'max-content',
  height: 'max-content',
  borderRadius: 20,
  backgroundColor: vars.color.list,
});
export const input = style({
  padding: vars.spacing.md,
  fontSize: vars.fontSizing.P1,
  minHeight: 60,
  marginBottom: vars.spacing.md,
  border: 'none',
  boxShadow: vars.shadow.basic,
  resize: 'none',
  overflow: 'hidden',
  wordWrap: 'break-word',
});
export const button = style({
  width: 150,
  color: vars.color.brightText,
  padding: vars.spacing.md,
  fontSize: vars.fontSizing.T3,
  backgroundColor: vars.color.mainDarker,
  border: 'none',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: vars.color.mainFaded,
  },
});
export const buttons = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});
export const close = style({
  marginLeft: vars.spacing.lg2,
  fontSize: vars.fontSizing.T1,
  opacity: 0.5,
  ':hover': {
    opacity: 0.7,
  },
});
