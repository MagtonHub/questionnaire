import React, { Fragment } from 'react';
import withWidth from '@material-ui/core/withWidth';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '@/components/Header';

interface Props {
  width: Breakpoint;
  children: JSX.Element[] | JSX.Element;
}

function MainLayout(props: Props) {
  const { width, children } = props;
  return (
    <Fragment>
      <CssBaseline />
      <Header breakpoint={width} />
      <Container>{children}</Container>
    </Fragment>
  );
}
export default withWidth()(MainLayout);
