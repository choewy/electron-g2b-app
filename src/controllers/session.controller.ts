import { ATPayload, RTPayload } from '../@dto';
import { db } from '../@database';
import { jwtSign } from '../@utils';

export const createSession = (req: Req, res: Res) => {
  const { email, password } = req.body;
  const user = db.getUser(email);

  if (!user || user.password !== password) {
    return res.status(401).send('Invalid email or password');
  }

  const session = db.createSession(email, user.username);
  const atPayload: ATPayload = {
    sid: session.sid,
    email: user.email,
    username: user.username,
  };
  const rtPayload: RTPayload = {
    sid: session.sid,
  };

  const accessToken = jwtSign(atPayload, '5s');
  const refreshToken = jwtSign(rtPayload, '1y');

  res.cookie('accessToken', accessToken, {
    maxAge: 300000,
    httpOnly: true,
  });

  res.cookie('refreshToken', refreshToken, {
    maxAge: 3.154e10,
    httpOnly: true,
  });

  return res.send(session);
};

export const getSession = (req: Req, res: Res) => {
  return res.send(req.user);
};

export const deleteSessioin = (req: Req, res: Res) => {
  res.cookie('accessToken', '', {
    maxAge: 0,
    httpOnly: true,
  });

  res.cookie('refreshToken', '', {
    maxAge: 0,
    httpOnly: true,
  });

  const session = db.invalidateSession(req.user.sid);
  return res.send(session);
};
