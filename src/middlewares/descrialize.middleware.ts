import { jwtSign, jwtVerify } from '../@utils';
import { db } from '../@database';
import { ATPayload } from '../@dto';

export const deserialize = (req: Req, res: Res, next: Next) => {
  const { accessToken, refreshToken } = req.cookies;

  if (!accessToken) {
    return next();
  }

  const { payload, expired } = jwtVerify(accessToken);

  if (payload && typeof ATPayload) {
    req.user = payload;
    return next();
  }

  const reissue = expired && refreshToken;
  const { payload: refresh } = reissue
    ? jwtVerify(refreshToken)
    : { payload: null };

  if (!refresh) {
    return next();
  }

  const session = db.getSession(refresh.sid);
  if (!session) {
    return next();
  }

  const newAccessToken = jwtSign(session, '5s');
  res.cookie('accessToken', newAccessToken, {
    maxAge: 300000,
    httpOnly: true,
  });

  req.user = jwtVerify(newAccessToken).payload;
  return next();
};
