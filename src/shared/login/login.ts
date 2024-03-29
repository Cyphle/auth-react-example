export const methods = {
  componentDidMount(props: any): void {
    login(props.location.state !== undefined ? props.location.state.from.pathname : '');
  }
};

const login = (routeRequestedBeforeLogin: string): void => {
  const { nextRoute, code, state } = extractRouteParams(window.location.href);

  if (code != null) {
    completeLoginWithCode(nextRoute, state, code);
  } else {
    initiateLogin(routeRequestedBeforeLogin);
  }
};

const initiateLogin = (routeRequestedBeforeLogin: string): void => {
  let redirectUri = '/login';
  if (routeRequestedBeforeLogin) {
    redirectUri += `?nextRoute=${routeRequestedBeforeLogin}`;
  }
  openLoginEndpoint(redirectUri);
};

const completeLoginWithCode = (routeRequestedBeforeLogin: string, state: string, code: string): void => {
  if (!routeRequestedBeforeLogin) {
    routeRequestedBeforeLogin = '';
  }
  openLoginEndpoint(routeRequestedBeforeLogin, state, code);
};

const openLoginEndpoint = (redirectUri: string, state?: string, code?: string) => {
  const origin = window.location.origin;
  const encodedRedirectUri = encodeURI(`${ origin }${ redirectUri }`);
  let targetUrl = `${ origin }/api/login?redirect_uri=${ encodedRedirectUri }`;
  if (state) {
    targetUrl += `&state=${ state }`;
  }
  if (code) {
    targetUrl += `&code=${ code }`;
  }
  window.open(targetUrl, '_self');
};

const extractRouteParams = (route: string): { [key: string]: string } => {
  const url = route.split('?');
  if (!!url[1]) {
    return url[1].split('&')
        .reduce((accumulator, currentValue) => {
          return { ...accumulator, [currentValue.split('=')[0]]: currentValue.split('=')[1] };
        }, {});
  } else {
    return {};
  }
};

